// ============ Initialization ============
const PARKS = Object.values(window.PARKS_SUMMARY || {});

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTH_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const STATE_NAMES = {
  "AK": "Alaska", "AL": "Alabama", "AR": "Arkansas", "AZ": "Arizona", "CA": "California", 
  "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia", 
  "HI": "Hawaii", "IA": "Iowa", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", 
  "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "MA": "Massachusetts", "MD": "Maryland", 
  "ME": "Maine", "MI": "Michigan", "MN": "Minnesota", "MO": "Missouri", "MS": "Mississippi", 
  "MT": "Montana", "NC": "North Carolina", "ND": "North Dakota", "NE": "Nebraska", "NH": "New Hampshire", 
  "NJ": "New Jersey", "NM": "New Mexico", "NV": "Nevada", "NY": "New York", "OH": "Ohio", 
  "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina", 
  "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VA": "Virginia", 
  "VT": "Vermont", "WA": "Washington", "WI": "Wisconsin", "WV": "West Virginia", "WY": "Wyoming",
  "AS": "American Samoa", "VI": "Virgin Islands", "GU": "Guam", "MP": "Northern Mariana Islands", "PR": "Puerto Rico"
};

// ============ State & DOM ============
let selectedMonth    = null;
let viewMode         = 'all';
let visitedParks     = new Set(JSON.parse(localStorage.getItem('visitedParks')   || '[]'));
let favoritedParks   = new Set(JSON.parse(localStorage.getItem('favoritedParks') || '[]'));
let hiddenParks      = new Set(JSON.parse(localStorage.getItem('hiddenParks')    || '[]'));

let filterState = JSON.parse(localStorage.getItem('filterState')) || {
  maxDuration: null,
  minDays: null,
  maxDays: null,
  minRating: 0,
  flights: [],
  stargazing: false
};
// Old travel/rating filters were based on unsupported data.
filterState = { maxDays: filterState.maxDays ?? null, state: filterState.state || '', stargazing: false };
function saveFilterState() { localStorage.setItem('filterState', JSON.stringify(filterState)); }
let showVisited = localStorage.getItem('showVisited') !== 'false';
let showFilterPanel = false;
let comparedParks = new Set();
let comparisonOpen = false;
let lastListingScroll = 0;

const chipContainer    = document.querySelector('.month-chips');
const parkSearchInput  = document.getElementById('park-search');
const searchClearBtn   = document.getElementById('search-clear');
const parkGrid         = document.getElementById('park-grid');
const emptyState       = document.getElementById('empty-state');
const statsBar         = document.getElementById('stats-bar');
const modal            = document.getElementById('park-modal');
const modalCloseBtn    = document.getElementById('modal-close-btn');
const modalBody        = document.getElementById('modal-body');
const filterPanel      = document.getElementById('filter-panel');
const visitedToggle    = document.getElementById('visited-toggle');
const toggleWrap       = document.querySelector('.visited-toggle-wrap');
const scrollLeftBtn    = document.getElementById('scroll-left');
const scrollRightBtn   = document.getElementById('scroll-right');

// ============ Scroll Arrow Indicators ============
function updateScrollArrows() {
  if (!chipContainer || !scrollLeftBtn || !scrollRightBtn) return;
  const { scrollLeft, scrollWidth, clientWidth } = chipContainer;
  const atLeft = scrollLeft <= 4;
  const atRight = scrollLeft + clientWidth >= scrollWidth - 4;
  scrollLeftBtn.classList.toggle('hidden', atLeft);
  scrollRightBtn.classList.toggle('hidden', atRight);
}

if (chipContainer) {
  chipContainer.addEventListener('scroll', updateScrollArrows, { passive: true });
  window.addEventListener('resize', updateScrollArrows);
  // Initial check after chips render
  setTimeout(updateScrollArrows, 100);
}

if (scrollLeftBtn) {
  scrollLeftBtn.addEventListener('click', () => {
    chipContainer.scrollBy({ left: -150, behavior: 'smooth' });
  });
}

if (scrollRightBtn) {
  scrollRightBtn.addEventListener('click', () => {
    chipContainer.scrollBy({ left: 150, behavior: 'smooth' });
  });
}

// Unknown travel times must remain unknown, never a made-up fallback.
function getTravelTime() { return null; }
let filterBounds = { minDays: 1, maxDays: 1 };
function initFilterBounds() {
  filterBounds.minDays = Math.min(...PARKS.map(p => p.minDays));
  filterBounds.maxDays = Math.max(...PARKS.map(p => p.minDays));
}
initFilterBounds();
// ============ Theme Selection & Dynamic Styles ============
const deviceTheme = window.matchMedia?.('(prefers-color-scheme: dark)');
function themePreference() { const saved=localStorage.getItem('theme'); return saved==='dark'||saved==='light' ? saved : 'system'; }
function updateThemeUI() {
  const preference=themePreference();
  const theme=preference==='system' ? (deviceTheme?.matches ? 'dark' : 'light') : preference;
  document.documentElement.setAttribute('data-theme',theme);
  document.documentElement.style.colorScheme=theme;
  document.getElementById('theme-light')?.classList.toggle('active',theme==='light');
  document.getElementById('theme-dark')?.classList.toggle('active',theme==='dark');
  document.querySelectorAll('[data-theme-choice]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.themeChoice===preference)));
}
function setThemePreference(preference) {
  if (!['system','light','dark'].includes(preference)) return;
  if(preference==='system') localStorage.removeItem('theme'); else localStorage.setItem('theme',preference);
  updateThemeUI();
}
const applyTheme = setThemePreference;
window.applyTheme=applyTheme;
window.setThemePreference=setThemePreference;
updateThemeUI();
deviceTheme?.addEventListener?.('change',()=>{ if(themePreference()==='system') updateThemeUI(); });
document.getElementById('theme-light')?.addEventListener('click',()=>setThemePreference('light'));
document.getElementById('theme-dark')?.addEventListener('click',()=>setThemePreference('dark'));

// Dynamic styles injection for modern SVG icons, modal toolbar layout, and mobile bottom sheet drawer
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
  /* Modern SVG icon styling */
  svg.icon {
    width: 1.15em;
    height: 1.15em;
    vertical-align: middle;
    display: inline-block;
    transition: transform 0.2s ease, fill 0.2s ease;
  }
  
  /* Rating stars style */
  svg.icon.star-icon {
    width: 1.25em;
    height: 1.25em;
    margin-right: 1px;
    filter: drop-shadow(0 1px 2px rgba(245, 166, 35, 0.25));
  }
  
  /* Vertical toolbar in modal header */
  .modal-icon-actions {
    position: absolute !important;
    top: 68px !important;
    right: 20px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 12px !important;
    z-index: 100 !important;
    margin: 0 !important;
  }

  /* Blurred backdrop for mobile drawer */
  .mobile-menu-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10, 12, 18, 0.6);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  body.mobile-menu-open {
    overflow: hidden;
  }
  
  body.mobile-menu-open .mobile-menu-backdrop {
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 600px) {
    /* Style header actions as a premium bottom sheet drawer */
    .header-actions {
      display: flex !important;
      position: fixed !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      top: auto !important;
      border-radius: 24px 24px 0 0 !important;
      border: none !important;
      border-top: 1px solid var(--border) !important;
      padding: 20px 16px 24px !important;
      background: var(--surface) !important;
      box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.4) !important;
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 8px !important;
      margin: 0 !important;
      z-index: 1000 !important;
      transform: translateY(100%) !important;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease !important;
      opacity: 0 !important;
      pointer-events: none !important;
      max-height: 85vh !important;
      overflow-y: auto !important;
    }
    
    .header-actions.mobile-open {
      transform: translateY(0) !important;
      opacity: 1 !important;
      pointer-events: auto !important;
    }
    
    /* Close option / handle bar on the bottom sheet drawer */
    .header-actions::before {
      content: '';
      display: block;
      width: 40px;
      height: 4px;
      background: var(--border);
      border-radius: 2px;
      margin: -10px auto 10px auto;
      opacity: 0.6;
    }
    
    /* Ensure the mobile theme buttons are styled neatly */
    .mobile-theme-row {
      margin-bottom: 8px;
    }
    
    .mobile-theme-row .header-btn {
      flex: 1;
      justify-content: center;
    }
    
    .mobile-theme-row .header-btn.active {
      background: var(--accent) !important;
      color: white !important;
      box-shadow: 0 2px 8px var(--accent-glow) !important;
    }
  }

  /* Position and style the prepended SVG search icon */
  .search-icon-svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    color: rgba(255, 255, 255, 0.4);
    pointer-events: none;
    transition: color 0.2s ease;
    z-index: 2;
  }
  
  /* When search input has focus, make search icon active color */
  .search-input-wrapper:focus-within .search-icon-svg {
    color: var(--accent);
  }
  
  /* Adjust input padding to make room for the left search icon */
  .search-input {
    padding-left: 50px !important;
  }
  
  /* Light theme overrides */
  [data-theme="light"] .search-icon-svg {
    color: var(--text-dim) !important;
    opacity: 0.7;
  }
  [data-theme="light"] .search-input-wrapper:focus-within .search-icon-svg {
    color: var(--accent) !important;
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    .search-icon-svg {
      left: 16px;
      width: 16px;
      height: 16px;
    }
    .search-input {
      padding-left: 42px !important;
    }
  }

  /* Redesigned Premium Card Layout */
  .park-card {
    padding: 0 !important;
    overflow: hidden !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 0 !important;
  }
  
  .card-media {
    position: relative !important;
    width: 100% !important;
    height: 180px !important;
    overflow: hidden !important;
  }
  
  .card-thumbnail {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    transition: transform 0.5s ease !important;
  }
  
  .park-card:hover .card-thumbnail {
    transform: scale(1.08) !important;
  }
  
  
  
  .card-favorite-btn {
    position: absolute !important;
    top: 12px !important;
    right: 12px !important;
    z-index: 10 !important;
    background: rgba(10, 12, 18, 0.6) !important;
    backdrop-filter: blur(4px) !important;
    -webkit-backdrop-filter: blur(4px) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    color: white !important;
    margin: 0 !important;
  }
  
  [data-theme="light"] .card-favorite-btn {
    background: rgba(255, 255, 255, 0.7) !important;
    border-color: rgba(0, 0, 0, 0.1) !important;
    color: var(--text) !important;
  }
  
  .card-favorite-btn:hover {
    background: rgba(10, 12, 18, 0.8) !important;
    transform: scale(1.1) !important;
  }
  
  [data-theme="light"] .card-favorite-btn:hover {
    background: rgba(255, 255, 255, 0.9) !important;
  }
  
  .card-media .floating-hero-badge {
    top: 12px !important;
    margin-top: 0 !important;
  }
  
  .card-body {
    padding: 8px 16px 12px !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
    flex-grow: 1 !important;
  }
  
  .card-title-row {
    display: flex !important;
    justify-content: space-between !important;
    align-items: baseline !important;
    width: 100% !important;
    gap: 8px !important;
  }
  
  .park-name {
    font-size: 1.15rem !important;
    margin: 0 !important;
    font-weight: 700 !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    flex-grow: 1 !important;
  }
  
  .park-state-inline {
    font-size: 0.9rem !important;
    color: var(--text-dim) !important;
    font-weight: 500 !important;
    margin-left: 2px !important;
  }
  
  .card-meta-row {
    display: flex !important;
    flex-wrap: wrap !important;
    align-items: center !important;
    gap: 6px !important;
  }
  
  .card-rating {
    display: inline-flex !important;
    align-items: center !important;
    gap: 3px !important;
    color: var(--text) !important;
    font-weight: 600 !important;
    font-size: 0.9rem !important;
    flex-shrink: 0 !important;
  }
  
  .card-rating svg {
    color: var(--amber) !important;
    fill: var(--amber) !important;
    width: 14px !important;
    height: 14px !important;
  }
  
  .card-meta-row {
    display: flex !important;
    gap: 8px !important;
    flex-wrap: nowrap !important;
    overflow: hidden !important;
    align-items: center !important;
    width: 100% !important;
    height: 28px !important;
  }

  .card-pill {
    background: #25293d !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    padding: 4px 10px !important;
    border-radius: 100px !important;
    font-size: 0.75rem !important;
    font-weight: 600 !important;
    color: var(--text) !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }
  
  [data-theme="light"] .card-pill {
    background: #e2e8f0 !important;
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
  }
  
  .card-pill-activity {
    color: var(--accent) !important;
    background: var(--accent-glow) !important;
    border-color: rgba(108, 140, 255, 0.2) !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }
  
  .card-pill-transit {
    display: inline-flex !important;
    align-items: center !important;
    gap: 4px !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }
  
  .card-pill-transit svg {
    width: 12px !important;
    height: 12px !important;
    fill: none !important;
    stroke: currentColor !important;
    vertical-align: middle !important;
  }
`;
document.head.insertBefore(dynamicStyles, document.querySelector('link[href*="recommendations.css"]'));

// ============ Search ============
let searchQuery      = '';
const searchContainer = document.querySelector('.search-container');
if (parkSearchInput) {
  parkSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    if (searchClearBtn) {
      searchClearBtn.classList.toggle('visible', searchQuery.length > 0);
    }
    renderParks();
  });

  parkSearchInput.addEventListener('focus', () => {
    searchContainer?.classList.add('searching');
  });

  parkSearchInput.addEventListener('blur', () => {
    searchContainer?.classList.remove('searching');
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    parkSearchInput.value = '';
    searchQuery = '';
    searchClearBtn.classList.remove('visible');
    parkSearchInput.focus();
    renderParks();
  });
}


function saveVisited()   { localStorage.setItem('visitedParks',   JSON.stringify([...visitedParks])); }
function saveFavorites() { localStorage.setItem('favoritedParks', JSON.stringify([...favoritedParks])); }
function saveHidden()    { localStorage.setItem('hiddenParks',    JSON.stringify([...hiddenParks])); }

function toggleVisitedFilterGlobal(checked) {
  showVisited = checked;
  localStorage.setItem('showVisited', checked);
  renderParks();
}

function toggleVisited(parkName, e) {
  if (e) e.stopPropagation();
  const isAdding = !visitedParks.has(parkName);
  visitedParks.has(parkName) ? visitedParks.delete(parkName) : visitedParks.add(parkName);
  if (typeof gtag !== 'undefined') gtag('event', 'park_visited_toggled', { park_name: parkName, action: isAdding ? 'marked_visited' : 'unmarked_visited' });
  saveVisited(); closeAllMenus(); renderParks();
}

function toggleFavorite(parkName, e) {
  if (e) e.stopPropagation();
  const isAdding = !favoritedParks.has(parkName);
  favoritedParks.has(parkName) ? favoritedParks.delete(parkName) : favoritedParks.add(parkName);
  trackAction('park_favorited_toggled', { park_name: parkName, action: isAdding ? 'favorited' : 'unfavorited' });
  saveFavorites(); closeAllMenus(); renderParks();
}

function toggleHidden(parkName, e) {
  if (e) e.stopPropagation();
  const isAdding = !hiddenParks.has(parkName);
  hiddenParks.has(parkName) ? hiddenParks.delete(parkName) : hiddenParks.add(parkName);
  if (typeof gtag !== 'undefined') gtag('event', 'park_hidden_toggled', { park_name: parkName, action: isAdding ? 'hidden' : 'unhidden' });
  saveHidden(); closeAllMenus(); renderParks();
}

function closeAllMenus() {
  document.querySelectorAll('.overflow-menu.open').forEach(m => m.classList.remove('open'));
}
document.addEventListener('click', closeAllMenus);

// ============ Search Bar Emojis Cleanup & SVG Prepender ============
function setupSearchInputEmoji() {
  const searchInput = document.getElementById('park-search');
  const searchWrapper = document.querySelector('.search-input-wrapper');
  if (searchInput && searchWrapper) {
    // 1. Remove emoji from placeholder
    let placeholder = searchInput.getAttribute('placeholder') || '';
    if (placeholder.includes('🔍')) {
      placeholder = placeholder.replace(/🔍\s*/g, '');
      searchInput.setAttribute('placeholder', placeholder);
    }

    // 2. Prepend SVG search icon if not already present
    if (!searchWrapper.querySelector('.search-icon-svg')) {
      const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgIcon.setAttribute('class', 'search-icon-svg');
      svgIcon.setAttribute('viewBox', '0 0 24 24');
      svgIcon.setAttribute('fill', 'none');
      svgIcon.setAttribute('stroke', 'currentColor');
      svgIcon.setAttribute('stroke-width', '2');
      svgIcon.setAttribute('stroke-linecap', 'round');
      svgIcon.setAttribute('stroke-linejoin', 'round');
      svgIcon.innerHTML = `<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>`;
      searchWrapper.insertBefore(svgIcon, searchInput);
    }
  }
}

function init() {
  setupSearchInputEmoji();
  renderChips();
  
  if (visitedToggle) {
    visitedToggle.checked = showVisited;
    visitedToggle.addEventListener('change', () => { 
      showVisited = visitedToggle.checked; 
      localStorage.setItem('showVisited', showVisited);
      renderParks(); 
    });
  }
  
  // Check URL for month
  const path = window.location.pathname;
  const match = path.match(/\/([^/]+)\/?$/);
  let preselectedMonth = null;
  let preselectedPark = null;
  if (match) {
    let slug;
    try { slug = decodeURIComponent(match[1]).replace(/\.html$/i, '').toLowerCase(); } catch { slug = match[1].toLowerCase(); }
    const monthIndex = MONTH_FULL.findIndex(m => m.toLowerCase() === slug);
    if (monthIndex !== -1) {
      preselectedMonth = monthIndex + 1;
    } else if (window.PARKS_SUMMARY && window.PARKS_SUMMARY[slug]) {
      preselectedPark = window.PARKS_SUMMARY[slug];
    }
  }

  const params = new URLSearchParams(window.location.search);
  if (params.has('month')) {
    const m = Number(params.get('month'));
    preselectedMonth = Number.isInteger(m) && m>=1 && m<=12 ? m : null;
  }
  if (preselectedMonth) {
    selectMonth(preselectedMonth, true);
  } else {
    // Auto-select current month for immediate relevance (especially on mobile)
    const currentMonth = params.get('month') === 'all' ? null : new Date().getMonth() + 1; // 1-indexed
    selectMonth(currentMonth, true);
  }

  const shared = (params.get('compare') || '').split(',').filter(id=>window.PARKS_SUMMARY[id]).slice(0,3);
  comparedParks = new Set(shared); comparisonOpen = shared.length >= 2;
  if (['favorites','visited','hidden'].includes(params.get('view'))) viewMode=params.get('view');
  renderParks();
  if (shared.length >= 2) trackAction('comparison_link_opened', {park_count:shared.length});
  window.history.replaceState({month:selectedMonth,view:viewMode,compare:[...comparedParks],comparisonOpen},'',window.location.href);
  if (preselectedPark) {
    setTimeout(() => openModal(preselectedPark, true), 50);
  }
}

// ============ Mobile Menu Toggle & Bottom-Sheet Drawer ============
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const headerActions = document.getElementById('header-actions');

// Create mobile menu backdrop dynamically
let menuBackdrop = document.querySelector('.mobile-menu-backdrop');
if (!menuBackdrop) {
  menuBackdrop = document.createElement('div');
  menuBackdrop.className = 'mobile-menu-backdrop';
  document.body.appendChild(menuBackdrop);
}

function closeMobileMenu() {
  if (headerActions) headerActions.classList.remove('mobile-open');
  if (mobileMenuToggle) {
    mobileMenuToggle.classList.remove('open');
    mobileMenuToggle.textContent = '⋯';
  }
  const headerEl = mobileMenuToggle?.closest('header');
  if (headerEl) headerEl.classList.remove('menu-open');
  document.body.classList.remove('mobile-menu-open');
}

if (mobileMenuToggle && headerActions) {
  mobileMenuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = headerActions.classList.toggle('mobile-open');
    mobileMenuToggle.classList.toggle('open', isOpen);
    mobileMenuToggle.textContent = isOpen ? '✕' : '⋯';
    const headerEl = mobileMenuToggle.closest('header');
    if (headerEl) {
      headerEl.classList.toggle('menu-open', isOpen);
    }
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  });

  // Close menu when clicking the backdrop
  menuBackdrop.addEventListener('click', (e) => {
    closeMobileMenu();
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!headerActions.contains(e.target) && e.target !== mobileMenuToggle && e.target !== menuBackdrop) {
      closeMobileMenu();
    }
  });
}

// ============ Render Chips (months only — special modes moved to view-tabs) ============
function renderChips() {
  const all=document.createElement('button'); all.className='month-chip'; all.id='chip-all'; all.textContent='All months'; all.onclick=()=>{selectMonth(null,true);syncBrowseURL()}; chipContainer.appendChild(all);
  // Month chips only (special chips moved to static HTML view-tabs)
  MONTHS.forEach((m, i) => {
    const chip = document.createElement('button');
    chip.className = 'month-chip';
    chip.textContent = m;
    chip.id = `chip-${i + 1}`;
    chip.setAttribute('aria-label', `Filter by ${MONTH_FULL[i]}`);
    chip.addEventListener('click', () => selectMonth(i + 1));
    chipContainer.appendChild(chip);
    document.getElementById('month-select')?.insertAdjacentHTML('beforeend',`<option value="${i+1}">${MONTH_FULL[i]}</option>`);
  });
}

// ============ View Tab Bindings ============
function updateViewTabs(activeMode) {
  document.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.getElementById(`tab-${activeMode}`);
  if (activeTab) activeTab.classList.add('active');
}

document.querySelectorAll('.view-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const mode = tab.getAttribute('data-mode');
    selectSpecialMode(mode);
  });
});

function selectSpecialMode(mode) {
  viewMode = mode;
  searchQuery = ''; if (parkSearchInput) parkSearchInput.value = '';
  searchClearBtn?.classList.remove('visible');
  updateViewTabs(mode);
  syncBrowseURL();
  renderParks();
}

function syncBrowseURL(replace = false) {
  const url = new URL(window.location.href);
  url.pathname = selectedMonth ? '/' + MONTH_FULL[selectedMonth-1].toLowerCase() : '/';
  url.search = '';
  if (!selectedMonth) url.searchParams.set('month','all');
  if (viewMode !== 'all') url.searchParams.set('view',viewMode);
  if (comparedParks.size) url.searchParams.set('compare',[...comparedParks].join(','));
  window.history[replace ? 'replaceState' : 'pushState']({month:selectedMonth,view:viewMode,compare:[...comparedParks],comparisonOpen}, '', url.pathname + url.search);
}

function parkHref(park) {
  return '/' + encodeURIComponent(park.id) + '?month=' + (selectedMonth || 'all');
}

function followParkLink(event, id) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault(); openModal(window.PARKS_SUMMARY[id]);
}

function trackAction(name, properties = {}) {
  if (typeof gtag === 'undefined') return;
  gtag('event', name, {month:selectedMonth ? MONTH_FULL[selectedMonth-1] : 'all',...properties});
  const usefulAction = name === 'comparison_changed' ||
    name === 'seasonal_guide_compare_clicked' ||
    name === 'official_planning_clicked' ||
    (name === 'park_favorited_toggled' && properties.action === 'favorited');
  if (!usefulAction) return;
  try {
    if (sessionStorage.getItem('npf_useful_planning')) return;
    sessionStorage.setItem('npf_useful_planning', '1');
  } catch (_) { /* Still record the action if session storage is unavailable. */ }
  gtag('event', 'useful_planning', {month:selectedMonth ? MONTH_FULL[selectedMonth-1] : 'all',triggering_action:name});
}

function selectMonth(month, preventHistory = false) {
  selectedMonth = !preventHistory && selectedMonth === month ? null : month;
  // Update view tabs — always set Explore as active when selecting a month
  updateViewTabs(viewMode);
  // Clear ALL month chips first, then activate the right one
  document.querySelectorAll('.month-chip').forEach(c => { const active=c.id === (selectedMonth ? `chip-${selectedMonth}` : 'chip-all'); c.classList.toggle('active',active); c.setAttribute('aria-pressed',String(active)); });
  
  if (selectedMonth) {
    const activeChip = document.getElementById(`chip-${selectedMonth}`);
    activeChip?.classList.add('active');
    // Scroll the chip into view (centered) so it's obvious which month is selected
    if (activeChip && chipContainer) {
      setTimeout(() => {
        const chipLeft = activeChip.offsetLeft;
        const chipWidth = activeChip.offsetWidth;
        const containerWidth = chipContainer.offsetWidth;
        chipContainer.scrollTo({
          left: chipLeft - (containerWidth / 2) + (chipWidth / 2),
          behavior: 'smooth'
        });
      }, 50);
    }
  }
  if (!preventHistory) { syncBrowseURL(); trackAction('month_selected'); }
  const monthSelect = document.getElementById('month-select');
  if (monthSelect) monthSelect.value = selectedMonth || '';
  if (toggleWrap) toggleWrap.style.display = '';
  renderParks();
}

// ============ Formatting Helpers ============
function formatMonths(months) {
  if (!months || months.length === 0) return "";
  if (months.length === 12) return "Year-round";
  const sorted = [...months].sort((a,b) => a-b);
  const ranges = [];
  let start = sorted[0], prev = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === prev + 1) { prev = sorted[i]; }
    else { ranges.push([start, prev]); start = sorted[i]; prev = sorted[i]; }
  }
  ranges.push([start, prev]);
  return ranges.map(([s,e]) => s===e ? MONTHS[s-1] : `${MONTHS[s-1]}–${MONTHS[e-1]}`).join(', ');
}function formatBestMonths(months) { return formatMonths(months); }

function sortParks(parks) {
  return [...parks].sort((a, b) => {
    const difference = recommendationFor(b).score - recommendationFor(a).score;
    if (difference) return difference;
    return a.name.localeCompare(b.name);
  });
}

// Editorial judgments, never a visitor-review aggregate or a live conditions score.
function recommendationFor(park, month = selectedMonth) {
  const r = park.recommendation;
  const seasonal = !month ? null : r.peakMonths.includes(month) ? 5 : park.bestMonths.includes(month) ? 4 : 2;
  return {
    score: seasonal == null ? r.experience : Math.round((seasonal * 0.6 + r.experience * 0.4) * 10) / 10,
    seasonal,
    label: seasonal === 5 ? 'Standout month' : seasonal === 4 ? 'Good month to go' : seasonal === 2 ? 'Special-interest season' : 'Year-round inspiration'
  };
}

function scoreStars(score) {
  return `<span class="recommendation-stars" aria-hidden="true"><span>★★★★★</span><span class="filled-stars" style="width:${score / 5 * 100}%">★★★★★</span></span>`;
}

function showRatingMethod() {
  const dialog = document.getElementById('rating-method-dialog');
  const trigger = document.querySelector('.rating-method');
  if (!dialog || !trigger) return;
  if (dialog.open) { closeRatingMethod(); return; }
  dialog.show();
  trigger.setAttribute('aria-expanded', 'true');
  const rect = trigger.getBoundingClientRect();
  const width = dialog.getBoundingClientRect().width;
  const height = dialog.getBoundingClientRect().height;
  const left = Math.max(16, Math.min(rect.right - width, window.innerWidth - width - 16));
  const below = rect.bottom + 10;
  const top = below + height <= window.innerHeight - 16 ? below : Math.max(16, rect.top - height - 10);
  dialog.style.left = `${left}px`;
  dialog.style.top = `${top}px`;
  document.addEventListener('pointerdown', dismissRatingMethodOutside);
  document.addEventListener('keydown', dismissRatingMethodOnEscape);
}

function closeRatingMethod() {
  const dialog = document.getElementById('rating-method-dialog');
  if (dialog?.open) dialog.close();
  document.querySelector('.rating-method')?.setAttribute('aria-expanded', 'false');
  document.removeEventListener('pointerdown', dismissRatingMethodOutside);
  document.removeEventListener('keydown', dismissRatingMethodOnEscape);
}

function dismissRatingMethodOutside(event) {
  if (!event.target.closest('#rating-method-dialog, .rating-method')) closeRatingMethod();
}

function dismissRatingMethodOnEscape(event) {
  if (event.key === 'Escape') closeRatingMethod();
}

// ============ Filter Logic ============
function toggleFilterPanel() {
  const panel = document.getElementById('filter-panel');
  showFilterPanel = !showFilterPanel;
  panel?.classList.toggle('hidden', !showFilterPanel);
  document.getElementById('refine-button')?.setAttribute('aria-expanded',String(showFilterPanel));
  if (showFilterPanel) {
    renderFilterUI();
    document.addEventListener('pointerdown', dismissFilterPanelOutside);
    document.addEventListener('keydown', dismissFilterPanelOnEscape);
  } else {
    document.removeEventListener('pointerdown', dismissFilterPanelOutside);
    document.removeEventListener('keydown', dismissFilterPanelOnEscape);
  }
}

function dismissFilterPanelOutside(event) {
  if (!event.target.closest('#filter-panel, #refine-button')) toggleFilterPanel();
}

function dismissFilterPanelOnEscape(event) {
  if (event.key === 'Escape') toggleFilterPanel();
}

function updateFilterBounds(baseParks) {
  // Logic moved to initFilterBounds to keep them static.
  // We no longer clip the user's filterState here because it 
  // causes "random" filters to appear when switching months.
}



function renderFilterChips() {
  const container = document.getElementById('active-filters');
  if (!container) return;
  container.innerHTML = '';
  
  const chips = [];
  
  if (searchQuery) {
    chips.push({ label: `<svg class="icon"><use href="#icon-search" xlink:href="#icon-search"></use></svg> "${escapeHtml(searchQuery)}"`, onClear: () => {
      if (parkSearchInput) parkSearchInput.value = ''; 
      searchQuery = ''; 
      if (searchClearBtn) searchClearBtn.classList.remove('visible');
      renderParks(); 
    } });
  }
  
  
  if (viewMode !== 'all') {
    const labels = { 
      favorites: '<svg class="icon" aria-hidden="true"><use href="#icon-heart"></use></svg> Saved',
      visited: '<svg class="icon" aria-hidden="true"><use href="#icon-check"></use></svg> Visited',
      hidden: '<svg class="icon" aria-hidden="true"><use href="#icon-eye-off"></use></svg> Hidden'
    };
    chips.push({ label: labels[viewMode], onClear: () => selectSpecialMode('all') });
  }
  
  if (!showVisited && viewMode !== 'visited') {
    chips.push({ label: '<svg class="icon"><use href="#icon-slash" xlink:href="#icon-slash"></use></svg> Hiding Visited', onClear: () => { 
      showVisited = true; 
      const toggle = document.getElementById('visited-toggle');
      if (toggle) toggle.checked = true;
      renderParks(); 
    } });
  }

  if (filterState.stargazing) {
    chips.push({ label: '<svg class="icon"><use href="#icon-telescope" xlink:href="#icon-telescope"></use></svg> NPS night-sky destination', onClear: () => setFilterValue('stargazing', false) });
  }
  
  if (filterState.maxDays) chips.push({label:`Up to ${filterState.maxDays} days in park`,onClear:()=>setFilterValue('maxDays',null)});
  if (filterState.state) chips.push({label:escapeHtml(STATE_NAMES[filterState.state] || filterState.state),onClear:()=>setFilterValue('state','')});

  if (chips.length === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.style.display = 'flex';
  chips.forEach(chip => {
    const div = document.createElement('div');
    div.className = 'filter-chip';
    div.innerHTML = `<span>${chip.label}</span><button class="chip-remove" aria-label="Remove filter"><svg class="icon" aria-hidden="true"><use href="#icon-close"></use></svg></button>`;
    div.querySelector('.chip-remove').onclick = (e) => {
      e.stopPropagation();
      chip.onClear();
    };
    container.appendChild(div);
  });
}



function applyFilters(baseParks) {
  return baseParks.filter(p =>
    (filterState.maxDays == null || p.minDays <= filterState.maxDays) &&
    (!filterState.state || p.state.split(' / ').includes(filterState.state)) &&
    (!filterState.stargazing || p.stargazing));
}

function resetFilters() {
  filterState = { maxDays: null, state: '', stargazing: false };
  saveFilterState();
  renderParks();
  renderFilterUI();
}

function setFilterValue(key, val, shouldRender=true) {
  filterState[key] = val; saveFilterState();
  if(shouldRender) {
    // If range sliders are dragging widely, we shouldn't rerender instantly to avoid lag.
    // For now, render Parks which triggers re-render.
    renderParks();
  }
}
function renderFilterUI() {
  if (!showFilterPanel) return;
  filterPanel.classList.remove('hidden');
  filterPanel.innerHTML = `
    <div class="filter-header"><h3>Filters</h3>
      <button class="clear-filters-btn" onclick="resetFilters()">Clear filters</button>
      <button class="filter-close-x" onclick="toggleFilterPanel()" aria-label="Close filters"><svg class="icon" aria-hidden="true"><use href="#icon-close"></use></svg></button>
    </div>
    <div class="filter-body">
      <div class="filter-field">
        <label for="days-budget">Trip length</label>
        <select id="days-budget" onchange="setFilterValue('maxDays',this.value ? Number(this.value) : null)"><option value="">Any trip length</option>${[1,2,3,4,7].map(d=>`<option value="${d}" ${filterState.maxDays===d?'selected':''}>Up to ${d} day${d===1?'':'s'}</option>`).join('')}</select>
      </div>
      <div class="filter-field">
        <label for="state-filter">State or territory</label>
        <select id="state-filter" onchange="setFilterValue('state',this.value)"><option value="">Anywhere</option>${[...new Set(PARKS.flatMap(p=>p.state.split(' / ')))].sort((a,b)=>(STATE_NAMES[a]||a).localeCompare(STATE_NAMES[b]||b)).map(st=>`<option value="${st}" ${filterState.state===st?'selected':''}>${STATE_NAMES[st]||st}</option>`).join('')}</select>
      </div>
      <label class="filter-option"><input type="checkbox" ${filterState.stargazing ? 'checked' : ''} onchange="setFilterValue('stargazing', this.checked)"><span>NPS night-sky parks</span></label>
      <label class="filter-option"><input type="checkbox" ${showVisited ? 'checked' : ''} onchange="toggleVisitedFilterGlobal(this.checked)"><span>Show visited parks</span></label>
    </div>
    <p class="filter-footnote">Suggested days exclude travel. Check NPS for current night access.</p>`;
}

let parkListObserver = null;
function renderParks() {
  closeRatingMethod();
  parkListObserver?.disconnect();
  updateRouteGuide();
  const title = viewMode==='favorites' ? 'Your saved parks' : viewMode==='visited' ? 'Your visited parks' : viewMode==='hidden' ? 'Hidden parks' : selectedMonth ? 'Best parks in ' + MONTH_FULL[selectedMonth-1] : 'Explore all national parks';
  document.getElementById('discovery-title').textContent = title;
  document.getElementById('saved-count').textContent = favoritedParks.size;
  document.getElementById('saved-nav').setAttribute('aria-pressed',String(viewMode==='favorites'));
  parkGrid.innerHTML = '';
  statsBar.innerHTML = '';

  let parks = [];
  let modeLabel = '';

  if (viewMode === 'all' && !selectedMonth) {
    parks = PARKS.filter(p => !hiddenParks.has(p.name));
    let hiddenCount = 0;
    if (!showVisited) {
      let lenBefore = parks.length;
      parks = parks.filter(p => !visitedParks.has(p.name));
      hiddenCount = lenBefore - parks.length;
    }
    modeLabel = `${parks.length} Parks Displayed`;
  } else if (viewMode === 'favorites') {
    parks = PARKS.filter(p => favoritedParks.has(p.name) && !hiddenParks.has(p.name));
    modeLabel = `⭐ ${parks.length} Favorited Park${parks.length !== 1 ? 's' : ''}`;
  } else if (viewMode === 'visited') {
    parks = PARKS.filter(p => visitedParks.has(p.name) && !hiddenParks.has(p.name));
    modeLabel = `✓ ${parks.length} Visited Park${parks.length !== 1 ? 's' : ''}`;
  } else if (viewMode === 'hidden') {
    parks = PARKS.filter(p => hiddenParks.has(p.name));
    modeLabel = `🙈 ${parks.length} Hidden Park${parks.length !== 1 ? 's' : ''}`;
  } else if (selectedMonth) {
    parks = PARKS.filter(p => p.bestMonths.includes(selectedMonth) && !hiddenParks.has(p.name));
    if (!showVisited) parks = parks.filter(p => !visitedParks.has(p.name));
    modeLabel = `${parks.length} parks suggested for <strong>${MONTH_FULL[selectedMonth - 1]}</strong>`;
  } else {
    emptyState.classList.remove('hidden');
    return;
  }

  // --- Search Filter ---
  if (searchQuery) {
    parks = parks.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(searchQuery);
      const stateMatch = p.state.toLowerCase().includes(searchQuery);
      
      const states = p.state.split(' / ');
      const fullNameMatch = states.some(st => {
        const full = STATE_NAMES[st.trim()] || "";
        return full.toLowerCase().includes(searchQuery);
      });
      
      return nameMatch || stateMatch || fullNameMatch;
    });
  }

// --- APPLY FILTERS ---
  const rawCount = parks.length;
  // updateFilterBounds(parks); // Removed to keep bounds static across all views
  parks = applyFilters(parks);
  // renderFilterUI(); // REMOVED: Re-rendering full UI here kills slider focus/continuity
  
  modeLabel = `${parks.length} park${parks.length===1?'':'s'}${viewMode==='favorites' ? ' saved on this browser' : selectedMonth && viewMode==='all' ? ' to consider' : ''}`;
  
  renderFilterChips();
  // ---------------------

  emptyState.classList.toggle('hidden', parks.length > 0);
  if (!parks.length) {
    const excluded = searchQuery ? PARKS.filter(p => p.name.toLowerCase().includes(searchQuery) && !parks.includes(p)).slice(0,3) : [];
    const freshShortlist = viewMode === 'favorites' && favoritedParks.size === 0;
    const freshVisited = viewMode === 'visited' && visitedParks.size === 0;
    const freshHidden = viewMode === 'hidden' && hiddenParks.size === 0;
    const emptyTitle = freshShortlist ? 'Your shortlist starts here' : freshVisited ? 'No visited parks yet' : freshHidden ? 'No hidden parks' : excluded.length ? 'No matching parks here' : viewMode === 'favorites' ? 'No saved parks match these filters' : 'No parks match these filters';
    const emptyHelp = freshShortlist ? 'Tap the heart on any park to save it for later.' : freshVisited ? 'Mark parks you have explored to keep track of your travels.' : freshHidden ? 'Parks you hide will appear here.' : excluded.length ? 'These parks are outside your current results.' : 'Try another month or clear your filters.';
    const emptyIcon = freshShortlist ? '#icon-heart' : freshVisited ? '#icon-check' : '#icon-search';
    emptyState.innerHTML = `<div class="empty-state-inner"><span class="empty-symbol" aria-hidden="true"><svg class="icon"><use href="${emptyIcon}"></use></svg></span><h2>${emptyTitle}</h2><p>${emptyHelp}</p>${excluded.map(p=>`<div class="search-recovery"><strong>${escapeHtml(p.name)}</strong><span>${selectedMonth && !p.bestMonths.includes(selectedMonth) ? 'Outside our '+MONTH_FULL[selectedMonth-1]+' shortlist, which does not mean it is closed.' : 'Excluded by your current filters or collection.'}</span><a href="${parkHref(p)}" onclick="followParkLink(event,'${p.id}')">View ${escapeHtml(p.name)} anyway →</a></div>`).join('')}<button class="empty-action" onclick="clearDiscoveryFilters()">${freshShortlist || freshVisited || freshHidden ? 'Browse parks':'Show all parks'} <span aria-hidden="true">→</span></button></div>`;
  }
  statsBar.innerHTML = `<span class="count" aria-live="polite">${modeLabel}</span><button type="button" class="rating-method" aria-haspopup="dialog" aria-controls="rating-method-dialog" aria-expanded="false" onclick="showRatingMethod()">Rating method ↗</button>`;
  renderComparison();
  const sorted = sortParks(parks);
  const isMobile = window.innerWidth <= 600;

  // ============ Lazy Loading Setup ============
  const BATCH_SIZE = isMobile ? 10 : sorted.length; // Desktop shows all, mobile lazy loads
  let loadedCount = 0;

  function renderBatch() {
    const end = Math.min(loadedCount + BATCH_SIZE, sorted.length);
    for (let idx = loadedCount; idx < end; idx++) {
      const park = sorted[idx];
      const rating = recommendationFor(park);

      const isVisited  = visitedParks.has(park.name);
      const isFavorite = favoritedParks.has(park.name);
      const isHidden   = hiddenParks.has(park.name);
      const card       = document.createElement('div');

    let cardClass = 'park-card';
    if (isFavorite) cardClass += ' park-favorite';
    else if (isVisited) cardClass += ' park-visited';
    if (isHidden) cardClass += ' park-hidden';
    // Add compact class on mobile for progressive disclosure
    if (isMobile) cardClass += ' park-card-compact';

    card.className = cardClass;
    card.dataset.parkId = park.id;
    card.addEventListener('click', event => { if (!event.target.closest('a,button,input,label,select')) openModal(park); });


    card.innerHTML = `
      <div class="card-media">
        <img src="${park.cardThumbnail}?v=4" alt="${escapeHtml(park.photo.alt)}" style="object-position:${park.photo.position}" class="card-thumbnail card-img" loading="${idx < 3 ? 'eager' : 'lazy'}">
        <button class="card-action-btn card-favorite-btn ${isFavorite ? 'active-heart' : ''}" 
          onclick="toggleFavorite('${park.name}', event)"
          data-tooltip="${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}"
          aria-label="${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}">
          <svg class="icon"><use href="${isFavorite ? '#icon-heart-filled' : '#icon-heart'}" xlink:href="${isFavorite ? '#icon-heart-filled' : '#icon-heart'}"></use></svg>
        </button>
      </div>

      <div class="card-body">
        <div class="card-eyebrow">${escapeHtml(park.state.split(' / ').map(st=>STATE_NAMES[st.trim()] || st).join(' · '))}</div>
        <div class="card-title-row"><h3 class="park-name"><a class="park-open" href="${parkHref(park)}" onclick="followParkLink(event,'${park.id}')">${escapeHtml(park.name)}</a></h3><span class="card-rating" aria-label="Editorial rating ${rating.score.toFixed(1)} out of 5${selectedMonth ? ' for ' + MONTH_FULL[selectedMonth-1] : ''}">★ ${rating.score.toFixed(1)}</span></div>
        <p class="card-hook">${escapeHtml(park.recommendation.headline)}</p>
        <div class="card-meta-row">
          <span class="card-pill">${park.minDays} day${park.minDays > 1 ? 's' : ''} suggested</span>
          <span class="season-pill ${rating.seasonal === 5 ? 'season-standout' : ''}">${selectedMonth ? rating.label : formatMonths(park.bestMonths)}</span>
        </div>
        <p class="card-reason">${escapeHtml(park.recommendation.reason)}</p>
        <p class="card-planning"><strong>Plan ahead:</strong> ${escapeHtml(planningPreview(park))}</p>
        <div class="card-bottom"><a class="card-explore" href="${parkHref(park)}" onclick="followParkLink(event,'${park.id}')">View park →</a><button class="compare-toggle" aria-pressed="${comparedParks.has(park.id)}" aria-label="Compare ${escapeHtml(park.name)}" onclick="toggleCompare('${park.id}')">${comparedParks.has(park.id)?'✓ Selected':'+ Compare'}</button></div>
      </div>
    `;

    const sentinel = parkGrid.querySelector('.load-more-sentinel');
    if (sentinel) {
      parkGrid.insertBefore(card, sentinel);
    } else {
      parkGrid.appendChild(card);
    }
  }
    loadedCount = end;
  }

  // Render first batch
  renderBatch();

  // Setup IntersectionObserver for lazy loading on mobile
  if (isMobile && loadedCount < sorted.length) {
    const sentinel = document.createElement('div');
    sentinel.className = 'load-more-sentinel';
    sentinel.innerHTML = '<div class="load-more-spinner">Loading more parks...</div>';
    parkGrid.appendChild(sentinel);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loadedCount < sorted.length) {
        renderBatch();
        if (loadedCount >= sorted.length) {
          sentinel.remove();
          observer.disconnect();
        }
      }
    }, { rootMargin: '200px' });
    parkListObserver = observer;
    observer.observe(sentinel);
  }
}

// ============ Modal Accessibility Tree Toggle ============
function updateAriaHidden() {
  const isParkModalOpen = modal && !modal.classList.contains('hidden');
  const anyOpen = isParkModalOpen;
  
  const wrappers = document.querySelectorAll('.discovery-controls, #compare-tray, .app-nav, .header-actions, header, .search-container, .view-tabs-container, .month-filter-label, #month-bar, main, footer');
  wrappers.forEach(el => {
    el.inert = anyOpen;
    if (anyOpen) {
      el.setAttribute('aria-hidden', 'true');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
}

// ============ Modal ============
let lastOpenedParkId = null;
function openModal(park, preventHistory = false) {
  const details = window.PARKS_DETAILS?.[park.id];
  if (!details) return;

  if (!preventHistory) {
    window.history.pushState({ modal: park.id, prevMonth: selectedMonth,view:viewMode,compare:[...comparedParks] }, '', parkHref(park));
    document.title = `${park.name} National Park`;
  }
  if ((modal.classList.contains('hidden') || lastOpenedParkId !== park.id) && typeof gtag !== 'undefined') gtag('event', 'park_modal_opened', { park_name: park.name, park_id: park.id, month: selectedMonth ? MONTH_FULL[selectedMonth - 1] : 'all' });

  const wasClosed = modal.classList.contains('hidden');
  if (wasClosed) lastListingScroll = window.scrollY;
  lastOpenedParkId = park.id;
  document.body.classList.add('modal-open');
  modal.classList.remove('hidden');
  updateAriaHidden();

  const isVisited  = visitedParks.has(park.name);
  const isFavorite = favoritedParks.has(park.name);
  const isHidden   = hiddenParks.has(park.name);
  updateRouteGuide(park);
  const esc = escapeHtml;
  const sources = details.sources.map(source => `<li><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a></li>`).join('');
  const rating = recommendationFor(park);
  const monthName = selectedMonth ? MONTH_FULL[selectedMonth-1] : null;
  const r = park.recommendation;
  modalBody.innerHTML = `
    <div class="modal-hero-banner guide-hero">
      <img class="guide-hero-image" src="${esc(park.thumbnail)}?v=4" alt="${esc(details.photo.alt)}" style="object-position:${details.photo.position}">
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-actions">
        <button class="modal-icon-btn ${isFavorite ? 'active-heart' : ''}" onclick="toggleFavorite('${park.name}', event); openModal(window.PARKS_SUMMARY['${park.id}'], true)" data-tooltip="${isFavorite ? 'Remove from saved' : 'Save park'}" aria-label="${isFavorite ? 'Remove from saved' : 'Save park'}"><svg class="icon"><use href="#icon-heart"></use></svg></button>
        <button class="modal-icon-btn ${isVisited ? 'active-tick' : ''}" onclick="toggleVisited('${park.name}', event); openModal(window.PARKS_SUMMARY['${park.id}'], true)" data-tooltip="${isVisited ? 'Mark as not visited' : 'Mark visited'}" aria-label="${isVisited ? 'Mark as not visited' : 'Mark visited'}"><svg class="icon"><use href="#icon-check"></use></svg></button>
        <button class="modal-icon-btn ${isHidden ? 'active-hide' : ''}" onclick="toggleHidden('${park.name}', event); openModal(window.PARKS_SUMMARY['${park.id}'], true)" data-tooltip="${isHidden ? 'Show park again' : 'Hide park'}" aria-label="${isHidden ? 'Show park again' : 'Hide park'}"><svg class="icon"><use href="#icon-eye-off"></use></svg></button>
      </div>
      <div class="guide-hero-title">
        <span class="guide-kicker">${esc(park.state.split(' / ').map(st=>STATE_NAMES[st.trim()] || st).join(' · '))} · National Park</span>
        <h2 class="modal-title" id="park-guide-title">${esc(park.name)}</h2>
        <p>${esc(r.headline)}</p>
      </div>
    </div>
    <div class="modal-body-container recommendation-guide">
      <div class="guide-snapshot">
        <div class="snapshot-rating"><span class="snapshot-label">${monthName ? esc(monthName) + ' pick' : 'Our recommendation'}</span><div><strong>★ ${rating.score.toFixed(1)}<small>/5</small></strong></div><span class="snapshot-caption">Editorial rating</span></div>
        <div><span class="snapshot-label">Plan for</span><strong>${park.minDays} day${park.minDays===1?'':'s'}</strong><span class="snapshot-caption">Suggested time in the park</span></div>
        <div><span class="snapshot-label">${monthName ? 'Seasonal fit' : 'When to go'}</span><strong class="snapshot-season">${monthName ? rating.label : formatMonths(park.bestMonths)}</strong><span class="snapshot-caption">${monthName ? esc(monthName) + ' · general sightseeing' : 'Our suggested months'}</span></div>
      </div>
      <div class="guide-columns">
        <div class="guide-main">
          <div class="guide-primary-actions"><button onclick="toggleFavorite('${park.name}',event); openModal(window.PARKS_SUMMARY['${park.id}'],true)">${isFavorite?'♥ Saved':'♡ Save park'}</button><a href="${esc(details.sources[0].url)}" target="_blank" rel="noopener noreferrer" onclick="trackAction('official_planning_clicked',{park_id:'${park.id}'})">Official planning ↗</a><a href="https://www.reddit.com/search/?q=${encodeURIComponent(park.name + ' National Park')}" target="_blank" rel="noopener noreferrer" onclick="trackAction('reddit_discussions_clicked',{park_id:'${park.id}'})">Discuss on Reddit ↗</a></div>
          <section class="guide-panel guide-verdict"><span class="guide-kicker">THE SHORT VERSION</span><h3>${monthName ? 'Why consider it in ' + esc(monthName) : 'Why go'}</h3><p>${esc(r.reason)}</p>${rating.seasonal === 2 ? '<p class="season-caution">Outside our general sightseeing shortlist this month. Check activity-specific access before choosing your dates.</p>' : ''}</section>
          <section class="guide-panel"><h3><svg class="icon"><use href="#icon-map"></use></svg> What you’ll come for</h3><p>${esc(details.description)}</p><div class="guide-activities">${details.activities.map(a=>`<span>${esc(a)}</span>`).join('')}</div></section>
          <section class="guide-panel guide-planning"><h3><svg class="icon"><use href="#icon-lightbulb"></use></svg> Know before you go</h3><p>${esc(details.planningNote)}</p>${details.permitNote ? `<details class="guide-disclosure"><summary>Half Dome permits</summary><p>${esc(details.permitNote)}</p></details>` : ''}<a class="official-guide-link" href="${esc(details.sources[0].url)}" target="_blank" rel="noopener noreferrer">Open the official NPS guide ↗</a></section>
        </div>
        <aside class="guide-aside">
          <section class="guide-panel guide-calendar"><h3><svg class="icon"><use href="#icon-calendar"></use></svg> Choose your month</h3><div class="guide-months">${MONTHS.map((m,i)=>`<button class="${r.peakMonths.includes(i+1) ? 'peak' : park.bestMonths.includes(i+1) ? 'suggested' : ''} ${selectedMonth===i+1?'selected':''}" aria-label="View ${esc(park.name)} in ${MONTH_FULL[i]}" aria-pressed="${selectedMonth===i+1}" onclick="setModalMonth('${park.id}',${i+1})">${m}</button>`).join('')}</div><p class="calendar-key"><span class="key-peak"></span> Standout <span class="key-good"></span> Good option</p><p class="guide-small">Tap a month to compare its rating.</p><details class="guide-disclosure"><summary>Weather &amp; seasonal access</summary><p>${esc(details.weatherNote)}</p><p class="guide-small">${esc(details.suggestionBasis)}</p></details></section>
          <section class="guide-panel guide-score"><h3>About this rating</h3><p class="guide-small">Our recommendation for a general sightseeing trip, based on seasonal fit and distinctive park experiences.</p><details class="guide-disclosure"><summary>How this score works</summary><div class="score-breakdown"><span>Seasonal fit · 60%</span><strong>${rating.seasonal == null ? 'Choose a month' : rating.seasonal + '/5'}</strong><span>Park experience · 40%</span><strong>${r.experience}/5</strong></div><p class="guide-small">Both are editorial judgments informed by NPS descriptions and seasonal guidance. ${monthName ? 'Weighted score rounded to one decimal.' : 'Without a month, we show the park-experience score alone.'} This is not a visitor-review average. Equal scores sort alphabetically.</p><a href="/about.html#ratings" target="_blank" rel="noopener">Full rating method ↗</a></details></section>
          ${details.nightSkyNote ? `<details class="guide-panel guide-disclosure"><summary>After dark</summary><p>${esc(details.nightSkyNote)}</p><p class="guide-small">NPS night-sky source checked ${esc(details.nightSkyReviewedAt)}. Check current access and conditions.</p></details>` : ''}
        </aside>
      </div>
      <details class="guide-panel guide-disclosure guide-sources"><summary>Sources, photo credit &amp; last checked</summary><p class="guide-small">Planning notes checked ${esc(details.reviewedAt)}. Check NPS for current conditions and rules. Suggested trip lengths are editorial starting points and exclude travel.</p><ul class="source-links">${sources}</ul><p class="guide-small">Photo: ${esc(details.photo.title)}. ${esc(details.photo.credit)}. <a href="${esc(details.photo.sourceUrl)}" target="_blank" rel="noopener noreferrer">Source image ↗</a></p><p class="guide-small">Independent guide. Not affiliated with the National Park Service.</p></details>
    </div>`;
  if (wasClosed) {
    modal.querySelector('.modal-content').scrollTop = 0;
    modalCloseBtn.focus({preventScroll:true});
  }
}

function setModalMonth(id, month) {
  trackAction('detail_month_changed',{park_id:id,selected_month:month});
  selectMonth(month, true);
  history.replaceState({modal:id,prevMonth:month,view:viewMode,compare:[...comparedParks]},'',parkHref(window.PARKS_SUMMARY[id]));
  openModal(window.PARKS_SUMMARY[id], true);
  modalBody.querySelector('.guide-months .selected').focus({preventScroll:true});
}

function updateRouteGuide(park = null) {
  const el = document.getElementById('route-guide');
  const monthGuide = document.getElementById('month-guide');
  if (monthGuide?.dataset.month) monthGuide.hidden = !(viewMode === 'all' && selectedMonth === Number(monthGuide.dataset.month));
  const details = park && window.PARKS_DETAILS[park.id];
  let title = 'National parks by month';
  let description = 'Explore 63 US national parks with editorial month suggestions and source-linked NPS planning notes.';
  if (details) {
    title = `${park.name} planning guide`;
    description = details.description;
    if (el) el.innerHTML = viewMode === 'all' ? `<h2>${escapeHtml(park.name)} planning guide</h2><p>${escapeHtml(details.description)}</p><p>${escapeHtml(details.planningNote)}</p>${details.permitNote ? `<p>${escapeHtml(details.permitNote)}</p>` : ''}<p>${escapeHtml(details.weatherNote)}</p><p>Planning notes checked ${details.reviewedAt}. Conditions and rules can change.</p><ul>${details.sources.map(s=>`<li><a href="${escapeHtml(s.url)}">${escapeHtml(s.label)}</a></li>`).join('')}</ul>` : '';
  } else if (selectedMonth && viewMode === 'all') {
    const month = MONTH_FULL[selectedMonth-1];
    title = `Best national parks in ${month}`;
    const monthDescriptions = {
      March: 'Compare Everglades, Zion, and Saguaro for a March trip, with dry-season, spring-canyon, and short-desert options plus official planning links.',
      November: 'Compare Saguaro, Death Valley, and Mammoth Cave for a November trip, with honest trip-length tradeoffs and official park planning links.'
    };
    description = monthDescriptions[month] || `Explore an editorial shortlist of US national parks for ${month}, with official planning sources.`;
    if (el) el.innerHTML = '';
  } else if (el) el.innerHTML = '';
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  const canonical = 'https://nationalparkfinder.info' + window.location.pathname;
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonical);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
}

function closeModal(preventHistory = false) {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  updateAriaHidden();
  const previousCard = [...parkGrid.querySelectorAll('.park-card')].find(card => card.dataset.parkId === lastOpenedParkId);
  (previousCard?.querySelector('.park-open') || parkSearchInput)?.focus({preventScroll:true});
  
  if (preventHistory !== true) syncBrowseURL();
  window.scrollTo({top:lastListingScroll,behavior:'instant'});
  updateRouteGuide();
}

modalCloseBtn.addEventListener('click', () => closeModal(false));
modal.addEventListener('click', e => { if (e.target===modal||e.target.classList.contains('modal-backdrop')) closeModal(false); });
document.addEventListener('keydown', e => {
  if (modal.classList.contains('hidden')) return;
  if (e.key === 'Escape') closeModal(false);
  if (e.key === 'Tab') {
    const focusable = [...modal.querySelectorAll('button, a[href], summary')].filter(el => el.getClientRects().length);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }
});

window.addEventListener('popstate', (e) => {
  const state=e.state || {};
  comparedParks=new Set((state.compare || []).filter(id=>window.PARKS_SUMMARY[id]).slice(0,3));
  comparisonOpen=Boolean(state.comparisonOpen);
  viewMode=state.view || 'all';
  if (state.modal) {
    selectedMonth=state.prevMonth ?? null;
    renderParks();
    const park=window.PARKS_SUMMARY[state.modal]; if(park) openModal(park,true);
  } else {
    closeModal(true); selectMonth(state.month ?? null,true);
  }
});

init();

// ============ Share & Bookmark UX ============
const shareBtn = document.getElementById('share-btn');
const shareBtnMobile = document.getElementById('share-btn-mobile');

async function handleShare() { await shareURL(window.location.href,'National parks by month','share_completed'); }

function showToast(message) {
  let toast = document.querySelector('.toast-container');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-container';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3000);
}

const allShareBtns = [shareBtn, shareBtnMobile].filter(Boolean);
allShareBtns.forEach(btn => {
  btn.addEventListener('click', handleShare);
  
  // Bookmark Hint
  btn.addEventListener('mouseenter', () => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const cmd = isMac ? '⌘ + D' : 'Ctrl + D';
    btn.setAttribute('title', `Click to Share • Press ${cmd} to Bookmark`);
  });
});


window.toggleSidebarCard = function(id) {
  const card = document.getElementById(id);
  if (card) {
    card.classList.toggle('collapsed');
  }
};

// A short excerpt of the same sourced planning note used in the guide.
function planningPreview(park) {
  const note = window.PARKS_DETAILS[park.id]?.planningNote || '';
  return note.match(/^.*?[.!?](?:\s|$)/)?.[0].trim() || note;
}
function clearDiscoveryFilters() {
  searchQuery=''; parkSearchInput.value=''; searchClearBtn.classList.remove('visible');
  filterState={maxDays:null,state:'',stargazing:false}; saveFilterState(); viewMode='all';
  selectMonth(null,true); syncBrowseURL(); renderFilterUI();
}
function toggleCompare(id) {
  if (!window.PARKS_SUMMARY[id]) return;
  if (comparedParks.has(id)) comparedParks.delete(id);
  else if (comparedParks.size < 3) comparedParks.add(id);
  else return showToast('Compare up to 3 parks. Remove one to add another.');
  if (comparedParks.size<2) comparisonOpen=false;
  syncBrowseURL(true); renderParks();
  parkGrid.querySelector(`[data-park-id="${id}"] .compare-toggle`)?.focus({preventScroll:true});
  trackAction('comparison_changed',{park_count:comparedParks.size});
}
function clearComparison() { comparedParks.clear(); comparisonOpen=false; syncBrowseURL(true); renderParks(); }
function showComparison() {
  comparisonOpen=!comparisonOpen; syncBrowseURL(true); renderComparison();
  if(comparisonOpen) document.getElementById('comparison-title')?.focus();
}
function renderComparison() {
  const parks=[...comparedParks].map(id=>window.PARKS_SUMMARY[id]).filter(Boolean);
  const tray=document.getElementById('compare-tray'), panel=document.getElementById('comparison-panel');
  tray.classList.toggle('hidden',!parks.length);
  document.body.classList.toggle('has-comparison',!!parks.length);
  tray.innerHTML=parks.length ? `<span>${parks.length}/3 parks selected</span><button onclick="showComparison()" ${parks.length<2?'disabled':''}>${comparisonOpen?'Close comparison':'Compare parks'}</button><button onclick="clearComparison()">Clear</button>` : '';
  panel.classList.toggle('hidden',!comparisonOpen || parks.length<2);
  panel.innerHTML=comparisonOpen && parks.length>=2 ? `<div class="comparison-heading"><div><h2 id="comparison-title" tabindex="-1">Compare ${selectedMonth?MONTH_FULL[selectedMonth-1]+' picks':'parks'}</h2><p>Editorial ratings · suggested time excludes travel</p></div><button onclick="shareComparison()">Share comparison ↗</button></div><div class="comparison-grid" style="--columns:${parks.length}">${parks.map(p=>{const r=recommendationFor(p);return `<article><h3><a href="${parkHref(p)}" onclick="followParkLink(event,'${p.id}')">${escapeHtml(p.name)}</a></h3><p>★ ${r.score.toFixed(1)}/5 · ${escapeHtml(r.label)}</p><dl><dt>Suggested time</dt><dd>${p.minDays} day${p.minDays===1?'':'s'}</dd><dt>Why go</dt><dd>${escapeHtml(p.recommendation.reason)}</dd><dt>Plan ahead</dt><dd>${escapeHtml(window.PARKS_DETAILS[p.id].planningNote)}</dd></dl><button onclick="toggleCompare('${p.id}')" aria-label="Remove ${escapeHtml(p.name)} from comparison">Remove</button></article>`}).join('')}</div>` : '';
}
async function shareComparison() {
  const url=new URL(selectedMonth?'/'+MONTH_FULL[selectedMonth-1].toLowerCase():'/',location.origin);
  if(!selectedMonth) url.searchParams.set('month','all');
  url.searchParams.set('compare',[...comparedParks].join(','));
  await shareURL(url.href,'Compare national parks','comparison_shared');
}
async function shareURL(url,title,eventName) {
  try {
    if(navigator.share) await navigator.share({title,url});
    else { await navigator.clipboard.writeText(url); showToast('Link copied'); }
    trackAction(eventName,{method:navigator.share?'native_share':'clipboard'});
  } catch(error) { if(error.name!=='AbortError') showToast('Could not share. Copy the address from your browser.'); }
}

// Menus dismiss like transient UI, including for keyboard users.
const collectionsMenu = document.querySelector('.collections-menu');
document.addEventListener('click', event => {
  if (collectionsMenu?.open && !collectionsMenu.contains(event.target)) collectionsMenu.open = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && collectionsMenu?.open) {
    collectionsMenu.open = false;
    collectionsMenu.querySelector('summary').focus();
  }
});
collectionsMenu?.addEventListener('focusout', event => {
  if (event.relatedTarget && !collectionsMenu.contains(event.relatedTarget)) collectionsMenu.open = false;
});
collectionsMenu?.addEventListener('click', event => {
  if (event.target.closest('button,a')) collectionsMenu.open = false;
});
