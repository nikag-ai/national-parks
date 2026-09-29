import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const source = readFileSync(new URL('../analytics.js', import.meta.url), 'utf8');
function load(url, setup = () => {}) {
  const dom = new JSDOM('<head><script></script></head>', {url, runScripts:'outside-only'});
  setup(dom.window);
  dom.window.eval(source);
  return dom;
}
function assertSilent(w) {
  assert.equal(w.gtag, undefined);
  assert.equal(w.posthog, undefined);
  assert.equal(w.document.querySelectorAll('script[src]').length, 0);
}
test('development, previews, unrelated GitHub sites, and HTTP never load production vendors', () => {
  for (const url of ['http://localhost:3000/', 'http://127.0.0.1:8080/november',
    'http://[::1]:3000/', 'http://192.168.1.3:3000/', 'https://national-parks-3rn.pages.dev/',
    'https://preview.example.com/', 'https://nikag-ai.github.io/another-project/',
    'http://nationalparkfinder.info/', 'https://nationalparkfinder.info.evil.test/?analytics=on']) {
    const dom = load(url); assertSilent(dom.window); dom.window.close();
  }
});
test('both public hosts retain production vendor configuration', () => {
  for (const base of ['https://nationalparkfinder.info/', 'https://nikag-ai.github.io/national-parks/']) {
    const url = base + 'november?utm_source=via&utm_medium=email&utm_campaign=november_2026';
    const dom = load(url); const w = dom.window;
    assert.equal(w.document.querySelectorAll('script[src]').length, 2);
    const calls = w.dataLayer.map(args => Array.from(args));
    assert.ok(calls.some(c=>c[0]==='config' && c[1]==='G-YZ57RJ75MN'));
    assert.ok(calls.some(c=>c[0]==='config' && c[1]==='AW-593488152'));
    assert.equal(calls.filter(c=>c[1]==='conversion').length,1);
    assert.equal(w.posthog._i.length,1);
    dom.window.close();
  }
});
test('creator opt-out persists and explicitly opting in restores collection', () => {
  let dom = load('https://nationalparkfinder.info/?analytics=off');
  assertSilent(dom.window);
  assert.equal(dom.window.localStorage.getItem('npf_analytics_disabled'),'1');
  dom.window.close();
  dom = load('https://nationalparkfinder.info/november', w=>w.localStorage.setItem('npf_analytics_disabled','1'));
  assertSilent(dom.window); dom.window.close();
  dom = load('https://nationalparkfinder.info/?analytics=on', w=>w.localStorage.setItem('npf_analytics_disabled','1'));
  assert.equal(typeof dom.window.gtag,'function'); dom.window.close();
});
test('explicit opt-out works even when browser storage throws', () => {
  const dom = load('https://nationalparkfinder.info/?analytics=off', w=> {
    Object.defineProperty(w,'localStorage',{get(){throw new Error('blocked');}});
    Object.defineProperty(w,'sessionStorage',{get(){throw new Error('blocked');}});
  });
  assertSilent(dom.window); dom.window.close();
});
test('research and editor-demo visits stay excluded on subsequent pages in the tab', () => {
  for (const medium of ['research','editor_demo']) {
    let dom=load('https://nationalparkfinder.info/november?utm_medium='+medium);
    assertSilent(dom.window);
    assert.equal(dom.window.sessionStorage.getItem('npf_analytics_test_visit'),'1');
    dom.window.close();
    dom=load('https://nationalparkfinder.info/saguaro',w=>w.sessionStorage.setItem('npf_analytics_test_visit','1'));
    assertSilent(dom.window); dom.window.close();
  }
});
test('every generated entry point uses the gated loader with no inline vendor bypass', () => {
  const parks=JSON.parse(readFileSync(new URL('../data/park-guidance.json',import.meta.url),'utf8'));
  const months='january february march april may june july august september october november december'.split(' ');
  for (const slug of ['index',...months,...Object.keys(parks)]) {
    const html=readFileSync(new URL('../'+slug+'.html',import.meta.url),'utf8');
    assert.equal((html.match(/src="analytics.js\?v=1.0.0"/g)||[]).length,1,slug);
    assert.doesNotMatch(html,/googletagmanager\.com|posthog\.init|gtag\('config'/,slug);
  }
});
