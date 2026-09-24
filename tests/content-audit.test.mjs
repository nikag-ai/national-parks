import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const guidance = JSON.parse(read('data/park-guidance.json'));
function load(path = '/', saved = {}) {
  const dom = new JSDOM(read('index.html'), {url: 'https://example.test' + path, runScripts:'outside-only', pretendToBeVisual:true});
  const w = dom.window;
  w.scrollTo = () => {};
  w.HTMLElement.prototype.scrollIntoView = () => {};
  w.HTMLElement.prototype.scrollTo = () => {};
  w.IntersectionObserver = class { observe() {} disconnect() {} };
  for (const [key,value] of Object.entries(saved)) w.localStorage.setItem(key, JSON.stringify(value));
  for (const script of ['data/parks-summary.js','data/parks-details.js','app.js']) w.eval(read(script));
  return dom;
}

test('every park has traceable facts, climate, photo, and explicitly editorial suggestions', () => {
  assert.equal(Object.keys(guidance).length,63);
  for (const [id,p] of Object.entries(guidance)) {
    assert.equal(p.id,id);
    for (const field of ['description','planningNote','weatherNote','suggestionBasis','reviewedAt']) assert.ok(p[field],id+': '+field);
    assert.match(p.suggestionBasis,/Editorial/i);
    assert.ok(p.sources.length>=2);
    for (const source of p.sources) assert.ok(['www.nps.gov','home.nps.gov'].includes(new URL(source.url).hostname));
    assert.ok(['www.nps.gov','npgallery.nps.gov'].includes(new URL(p.photo.sourceUrl).hostname));
    assert.ok(p.photo.credit);
    assert.ok(existsSync(new URL('../'+p.thumbnail,import.meta.url)));
    assert.equal(new Set(p.bestMonths).size,p.bestMonths.length);
    assert.ok(p.bestMonths.every(m=>Number.isInteger(m)&&m>=1&&m<=12));
    assert.ok(p.nightSkyListed === true || p.nightSkyListed === null);
    assert.equal(Boolean(p.nightSkyNote),p.nightSkyListed === true);
    assert.equal(Boolean(p.nightSkyReviewedAt),p.nightSkyListed === true);
    if (p.nightSkyListed === null) {
      assert.ok(['not-listed','insufficient-evidence'].includes(p.nightSkyResearch?.status),id);
      assert.equal(p.nightSkyResearch?.reviewedAt,'2026-09-23',id);
      assert.ok(['www.nps.gov','home.nps.gov'].includes(new URL(p.nightSkyResearch?.sourceUrl).hostname),id);
    }
    for(const removed of ['redditPosts','redditSentiment','compositeScore','crowdScore','temperature','flightTime','driveTimes','sfoAccessibility']) assert.equal(p[removed],undefined);
  }
});

test('all 63 modal views render source-linked content without unsupported metrics', () => {
 const dom=load();const w=dom.window;
 for(const p of Object.values(w.PARKS_SUMMARY)) {
  w.openModal(p,true);
  const body=w.document.querySelector('#modal-body');
  assert.ok(body.textContent.includes(guidance[p.id].planningNote),p.id);
  assert.ok(body.textContent.includes(guidance[p.id].weatherNote),p.id);
  assert.equal(Boolean(body.textContent.includes('After dark')),guidance[p.id].nightSkyListed === true,p.id);
  assert.ok(body.textContent.includes('editorial'),p.id);
  assert.doesNotMatch(body.textContent,/undefined|NaN|Ratings & Score|Average Temp/);
  assert.equal(body.querySelector('.guide-primary-actions a[href^="https://www.reddit.com/search/"]')?.getAttribute('rel'),'noopener noreferrer');
  assert.equal(body.querySelectorAll('.source-links a').length,guidance[p.id].sources.length);
 }
 dom.window.close();
});

test('Grand Canyon night-sky guidance is sourced and appears in the activity filter', () => {
 const dom=load();const w=dom.window;
 w.openModal(w.PARKS_SUMMARY['grand-canyon'],true);
 const body=w.document.querySelector('#modal-body');
 assert.match(body.textContent,/Grand Canyon is an International Dark Sky Park/);
 assert.match(body.textContent,/Mather Point and Desert View/);
 assert.ok([...body.querySelectorAll('.source-links a')].some(a=>a.href==='https://www.nps.gov/grca/learn/nature/night-skies.htm'));
 w.selectMonth(null,true);
 w.setFilterValue('stargazing',true);
 assert.ok(w.document.querySelector('[data-park-id="grand-canyon"]'));
 dom.window.close();
});

test('NPS night-sky parks are filterable and Petrified Forest access limits are visible', () => {
 const dom=load(); const w=dom.window;
 const directory='https://www.nps.gov/subjects/nightskies/stargaze.htm';
 assert.equal(Object.values(guidance).filter(p=>p.nightSkyListed).length,49);
 assert.equal(Object.values(guidance).filter(p=>p.nightSkyListed===null).length,14);
 for(const slug of ['badlands','black-canyon-of-the-gunnison','capitol-reef','death-valley','glacier','mesa-verde','petrified-forest','voyageurs']) {
  assert.equal(guidance[slug].nightSkyListed,true,slug);
  assert.ok(guidance[slug].sources.some(s=>s.url===directory || s.url.includes('dark-sky-park-certification')),slug);
 }
 w.selectMonth(null,true); w.setFilterValue('stargazing',true);
 assert.equal(w.document.querySelectorAll('.park-card').length,49);
 w.openModal(w.PARKS_SUMMARY['petrified-forest'],true);
 assert.match(w.document.querySelector('#modal-body').textContent,/closes at dusk/);
 assert.match(w.document.querySelector('#modal-body').textContent,/Dark Sky Viewing Permit/);
 assert.ok([...w.document.querySelectorAll('.source-links a')].some(a=>a.href==='https://www.nps.gov/pefo/planyourvisit/darkskyviewpermit.htm'));
 dom.window.close();
});

test('Saved is in More and its empty state has one browse action', () => {
 const dom=load(); const w=dom.window;
 assert.equal(w.document.querySelectorAll('#saved-nav').length,1);
 assert.ok(w.document.querySelector('.collections-menu #saved-nav'));
 w.selectSpecialMode('favorites');
 const empty=w.document.querySelector('#empty-state');
 assert.equal(empty.classList.contains('hidden'),false);
 assert.match(empty.textContent,/Your shortlist starts here/);
 assert.equal(empty.querySelectorAll('button').length,1);
 assert.equal(w.document.querySelector('#stats-bar .back-explore'),null);
 assert.match(empty.querySelector('button').textContent,/Browse parks/);
 dom.window.close();
});

test('2026 access distinctions stay attached to their official sources', () => {
 const checks={
  'glacier':[/no.*vehicle reservation/i,'https://www.nps.gov/glac/planyourvisit/vehicle-reservations2026.htm'],
  'mount-rainier':[/does not use timed entry in 2026/i,'https://home.nps.gov/mora/planyourvisit/fees.htm'],
  'rocky-mountain':[/separate reservation option for Bear Lake Road/i,'https://home.nps.gov/romo/planyourvisit/timed-entry-permit-system.htm'],
  'acadia':[/Cadillac Summit Road requires a separate vehicle reservation/i,'https://www.nps.gov/acad/planyourvisit/vehicle_reservations.htm'],
 };
 for(const [slug,[pattern,url]] of Object.entries(checks)) {
  assert.match(guidance[slug].planningNote,pattern);
  assert.ok(guidance[slug].sources.some(s=>s.url===url),slug);
 }
});

test('month results match the shared shortlist and all parks remain accessible', () => {
 const dom=load();const w=dom.window;
 for(let month=1;month<=12;month++) {
  w.selectMonth(month,true);
  const expected=Object.values(guidance).filter(p=>p.bestMonths.includes(month)).length;
  assert.equal(w.document.querySelectorAll('.park-card').length,expected,`month ${month}`);
 }
 w.selectMonth(null,true);
 assert.equal(w.document.querySelectorAll('.park-card').length,63);
 dom.window.close();
});

test('legacy filters cannot hide parks; user saved sets are preserved', () => {
 const saved={favoritedParks:['Yosemite'],visitedParks:['Acadia'],hiddenParks:['Arches'],filterState:{maxDuration:30,minRating:5,flights:['direct'],stargazing:true}};
 const dom=load('/',saved);const w=dom.window;
 w.selectMonth(null,true);
 assert.equal(w.document.querySelectorAll('.park-card').length,62);
 assert.ok(w.document.querySelector('[data-park-id="yosemite"] .active-heart'));
 w.selectSpecialMode('favorites');
 assert.equal(w.document.querySelectorAll('.park-card').length,1);
 assert.match(w.document.querySelector('.park-card .park-name').textContent,/Yosemite/);
 w.selectSpecialMode('all');
 for(const key of ['favoritedParks','visitedParks','hiddenParks']) assert.deepEqual(JSON.parse(w.localStorage.getItem(key)),saved[key]);
 for(const hub of ['SFO','LAX','SEA','DEN','ORD','LGA','MIA']) {
  w.localStorage.setItem('homeHub',hub);
  assert.equal(w.getTravelTime(w.PARKS_SUMMARY['national-park-of-american-samoa']),null);
 }
 w.toggleFilterPanel();
 assert.doesNotMatch(w.document.querySelector('#filter-panel').textContent,/Temperature|Star Rating|Transit Stops|Total Travel/);
 dom.window.close();
});

test('Yosemite permit correction, Unicode route, and favorites work', async () => {
 const dom=load('/haleakal%C4%81');const w=dom.window;
 await new Promise(r=>setTimeout(r,80));
 assert.match(w.document.querySelector('.modal-title').textContent,/Haleakalā/);
 w.openModal(w.PARKS_SUMMARY.yosemite,true);
 assert.match(w.document.querySelector('#modal-body').textContent,/March 1–31/);
 assert.match(w.document.querySelector('#modal-body').textContent,/two days before/);
 const favorite=w.document.querySelector('[aria-label="Save park"]');
 // jsdom outside-only does not execute inline handlers; invoke the actual application action.
 assert.ok(favorite); w.toggleFavorite('Yosemite',{stopPropagation(){}});
 assert.ok(JSON.parse(w.localStorage.getItem('favoritedParks')).includes('Yosemite'));
 dom.window.close();
});

test('generated pages expose factual source content and no hidden FAQ claims', () => {
 for (const month of ['january','february','march','april','may','june','july','august','september','october','november','december']) {
  const dom=new JSDOM(read(month+'.html'));
  assert.equal(dom.window.document.querySelector('#route-guide').textContent.trim(),'');
  assert.equal(dom.window.document.querySelector('.park-directory'),null);
  dom.window.close();
 }
 for(const [id,p] of Object.entries(guidance)) {
  const dom=new JSDOM(read(id+'.html'));const d=dom.window.document;
  assert.match(d.querySelector('#route-guide').textContent,/Planning notes checked/);
  assert.ok(d.querySelector('#route-guide').textContent.includes(p.planningNote));
  assert.equal(d.querySelector('link[rel=canonical]').href,'https://nationalparkfinder.info/'+encodeURI(id));
  assert.ok(d.querySelector('script[src="data/parks-details.js?v=5.1.5"]'));
  assert.ok(d.querySelector('link[href="/recommendations.css?v=6.1.7"]'));
  assert.doesNotMatch(read(id+'.html'),/FAQPage|"@type": "Dataset"|manageable crowds|exact stargazing|genuine Reddit/);
  dom.window.close();
 }
});

test('special-character HTML route and navigation summaries stay aligned', async () => {
 const dom=load('/wrangell-st.-elias.html');const w=dom.window;
 await new Promise(r=>setTimeout(r,80));
 assert.match(w.document.querySelector('.modal-title').textContent,/Wrangell/);
 w.closeModal(true);
 w.selectMonth(1,true);
 w.selectMonth(1,true); // history restoration must not toggle the month off
 assert.equal(w.document.querySelector('#route-guide').textContent.trim(),'');
 assert.doesNotMatch(w.document.querySelector('#route-guide').textContent,/Wrangell/);
 assert.match(w.document.title,/January/);
 w.openModal(w.PARKS_SUMMARY.yosemite,true);
 assert.match(w.document.querySelector('#route-guide').textContent,/Half Dome/);
 assert.match(w.document.querySelector('meta[name=description]').content,/Yosemite/);
 dom.window.close();
});

test('monthly recommendations always sort by score and change with the month', () => {
 const dom=load('/september',{favoritedParks:['Gateway Arch']}); const w=dom.window;
 const ids=()=>[...w.document.querySelectorAll('.park-card')].map(c=>c.dataset.parkId);
 for(let month=1;month<=12;month++) {
  w.selectMonth(month,true);
  const cards=ids();
  const ratings=cards.map(id=>w.recommendationFor(w.PARKS_SUMMARY[id],month).score);
  assert.deepEqual(ratings,[...ratings].sort((a,b)=>b-a),`descending in ${month}`);
 }
 assert.equal(w.document.querySelector('#sort-select'),null);
 assert.equal(w.recommendationFor(w.PARKS_SUMMARY.yosemite,5).score,5);
 assert.equal(w.recommendationFor(w.PARKS_SUMMARY.yosemite,1).score,3.2);
 assert.equal(w.recommendationFor(w.PARKS_SUMMARY.yellowstone,7).score,4.4);
 w.selectMonth(9,true); const september=ids();
 w.selectMonth(10,true); assert.notDeepEqual(ids(),september);
 w.selectMonth(null,true);
 const ratings=ids().map(id=>w.recommendationFor(w.PARKS_SUMMARY[id]).score);
 assert.deepEqual(ratings,[...ratings].sort((a,b)=>b-a));
 dom.window.close();
});

test('saved view omits month ideas and pages have only the top month navigation', () => {
 const dom=load('/september',{favoritedParks:['glacier']}); const w=dom.window;
 w.selectSpecialMode('favorites');
 assert.equal(w.document.querySelector('#route-guide').textContent.trim(),'');
 assert.equal(w.document.querySelector('.footer-seo-links'),null);
 assert.equal(w.document.querySelector('#sort-select'),null);
 dom.window.close();
});

test('modal month comparison updates stars and closing returns to the chosen month', () => {
 const dom=load('/september');const w=dom.window;
 w.openModal(w.PARKS_SUMMARY.yosemite);
 w.setModalMonth('yosemite',5);
 assert.match(w.document.querySelector('.snapshot-rating').textContent,/5.0/);
 assert.match(w.document.querySelector('.guide-verdict').textContent,/May/);
 assert.equal(w.document.querySelector('.guide-months [aria-pressed="true"]').textContent,'May');
 assert.equal(w.location.pathname,'/yosemite');
 w.setModalMonth('yosemite',1);
 assert.match(w.document.querySelector('.snapshot-rating').textContent,/3.2/);
 assert.ok(w.document.querySelector('.season-caution'));
 w.closeModal();assert.equal(w.location.pathname,'/january');
 assert.equal(w.document.querySelector('main').inert,false);
 assert.equal(w.document.querySelector('#park-modal').getAttribute('role'),'dialog');
 dom.window.close();
});

test('all editorial judgments are bounded and landmark heroes have descriptive provenance', () => {
 for(const p of Object.values(guidance)) {
  assert.ok([3,4,4.5,5].includes(p.recommendation.experience),p.id);
  assert.ok(p.recommendation.peakMonths.every(m=>p.bestMonths.includes(m)),p.id);
  assert.ok(p.recommendation.headline && p.recommendation.reason,p.id);
  assert.ok(p.photo.alt && p.photo.position,p.id);
  assert.ok(existsSync(new URL('../assets/images/parks/cards/'+p.id+'.jpg',import.meta.url)),p.id);
 }
 assert.match(guidance.yellowstone.photo.title,/Grand Prismatic/);
 assert.match(guidance.yosemite.photo.title,/Tunnel View/);
 assert.match(guidance.arches.photo.title,/Delicate Arch/);
 assert.match(guidance.sequoia.photo.title,/General Sherman/);
 assert.match(read('about.html'),/not visitor reviews/);
});

test('saved parks retain month; park links retain context and allow native modified clicks',()=>{
 const dom=load('/november',{favoritedParks:['Yosemite']});const w=dom.window;
 w.selectSpecialMode('favorites');
 assert.equal(w.document.querySelector('#month-select').value,'11');
 const link=w.document.querySelector('.park-open');
 assert.equal(link.getAttribute('href'),'/yosemite?month=11');
 let prevented=false;
 w.followParkLink({button:0,ctrlKey:true,preventDefault(){prevented=true}},'yosemite');
 assert.equal(prevented,false);
 dom.window.close();
});
test('shared comparison round trips month and IDs without replacing favorites',async()=>{
 const dom=load('/november?compare=big-bend,congaree,invalid',{favoritedParks:['Yosemite']});const w=dom.window;
 assert.equal(w.document.querySelectorAll('.comparison-grid article').length,2);
 assert.match(w.document.querySelector('#comparison-title').textContent,/November/);
 let copied='';Object.defineProperty(w.navigator,'clipboard',{value:{writeText:async value=>{copied=value}}});
 await w.shareComparison();
 assert.equal(new URL(copied).searchParams.get('compare'),'big-bend,congaree');
 assert.deepEqual(JSON.parse(w.localStorage.getItem('favoritedParks')),['Yosemite']);
 w.toggleCompare('yosemite'); w.toggleCompare('yellowstone');
 assert.equal(new URL(w.location.href).searchParams.get('compare').split(',').length,3);
 w.clearComparison();assert.equal(w.document.querySelector('#compare-tray').classList.contains('hidden'),true);
 dom.window.close();
});
test('search offers a known park outside the selected season and time budget uses a maximum',()=>{
 const dom=load('/november'); const w=dom.window;
 const input=w.document.querySelector('#park-search');input.value='Yosemite';input.dispatchEvent(new w.Event('input'));
 // Search is debounced; render with explicit state in the same script context.
 w.eval("searchQuery='yosemite';renderParks()");
 assert.match(w.document.querySelector('#empty-state').textContent,/Yosemite/);
 w.clearDiscoveryFilters();w.setFilterValue('maxDays',1);
 const ids=[...w.document.querySelectorAll('.park-card')].map(c=>c.dataset.parkId);
 assert.ok(ids.length);assert.ok(ids.every(id=>w.PARKS_SUMMARY[id].minDays<=1));
 dom.window.close();
});


test('device appearance remains the default and manual choice persists',()=>{
 const dom=load('/november');const w=dom.window;
 assert.equal(w.localStorage.getItem('theme'),null);
 assert.equal(w.document.documentElement.dataset.theme,'light');
 w.setThemePreference('dark');
 assert.equal(w.localStorage.getItem('theme'),'dark');
 assert.equal(w.document.documentElement.dataset.theme,'dark');
 w.setThemePreference('system');
 assert.equal(w.localStorage.getItem('theme'),null);
 assert.equal(w.document.querySelector('[data-theme-choice="system"]').getAttribute('aria-pressed'),'true');
 const card=w.document.querySelector('.park-card');
 assert.match(card.querySelector('.card-rating').textContent,/★\s*4\.8/);
 assert.equal(card.querySelectorAll('.recommendation-stars').length,0);
 dom.window.close();
});
