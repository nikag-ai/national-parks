// ============ Initialization ============
const PARKS = Object.values(window.PARKS_SUMMARY || {});
const LOGISTICS = window.PARKS_LOGISTICS || {};
const MAJOR_HUBS = window.MAJOR_HUBS || [];

function calculateCompositeScore(park) {
  const score = (park.popularity * 0.4) + (park.uniqueness * 0.4) + (park.sfoAccessibility * 0.2);
  return Math.max(Math.min((score / 100) * 5, 5), 1);
}
PARKS.forEach(p => { p.compositeScore = parseFloat(calculateCompositeScore(p).toFixed(1)); });

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
let currentHomeHub   = localStorage.getItem('homeHub') || 'SFO';
let viewMode         = 'all';
let sortBy           = 'score';
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
function saveFilterState() { localStorage.setItem('filterState', JSON.stringify(filterState)); }
let showVisited = localStorage.getItem('showVisited') !== 'false';
let showFilterPanel = false;

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
const startPointSelect = document.getElementById('start-point');
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

// ============ Logistics Engine ============
function getTravelTime(park) {
  const hub = currentHomeHub;
  const parkId = park.id;
  
  if (LOGISTICS[parkId] && LOGISTICS[parkId][hub] !== undefined) {
    return LOGISTICS[parkId][hub];
  }

  // Fallback for safety (though matrix should be complete)
  return 120 + (park.gatewayExtraMinutes || 0);
}

// Initial filter bounds based on all parks
let filterBounds = { minDuration: 0, maxDuration: 0, minDays: 0, maxDays: 0 };
function initFilterBounds() {
  if (!PARKS.length) return;
  const times = PARKS.map(p => getTravelTime(p));
  filterBounds.minDuration = Math.min(...times);
  filterBounds.maxDuration = Math.max(...times);
  filterBounds.minDays = Math.min(...PARKS.map(p => p.minDays || 1));
  filterBounds.maxDays = Math.max(...PARKS.map(p => p.minDays || 1));

  // Auto-correct filterState if it's now out of range
  if (filterState.maxDuration === null || filterState.maxDuration < filterBounds.minDuration) {
    filterState.maxDuration = filterBounds.maxDuration;
    saveFilterState();
  }
}
initFilterBounds();
// ============ Theme Selection & Dynamic Styles ============
let currentTheme = localStorage.getItem('theme') || 'dark';
const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Desktop theme buttons
  document.getElementById('theme-light')?.classList.toggle('active', theme === 'light');
  document.getElementById('theme-dark')?.classList.toggle('active', theme === 'dark');
};
window.applyTheme = applyTheme;
applyTheme(currentTheme);

document.getElementById('theme-light')?.addEventListener('click', () => applyTheme('light'));
document.getElementById('theme-dark')?.addEventListener('click', () => applyTheme('dark'));

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
      padding: 24px 24px 36px !important;
      background: var(--surface) !important;
      box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.4) !important;
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 12px !important;
      margin: 0 !important;
      z-index: 1000 !important;
      transform: translateY(100%) !important;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease !important;
      opacity: 0 !important;
      pointer-events: none !important;
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
      margin: -12px auto 12px auto;
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
`;
document.head.appendChild(dynamicStyles);

// ============ Search ============
let searchQuery      = '';
let minTempFilter    = 0;
let maxTempFilter    = 110;

function getParkHighTemp(parkId, month) {
  const data = window.PARKS_SEASONAL?.[parkId]?.[month];
  if (!data || !data.temp || data.temp === 'N/A') return null;
  const match = data.temp.match(/(\d+)°F/);
  return match ? parseInt(match[1]) : null;
}
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
  if (typeof gtag !== 'undefined') gtag('event', 'park_favorited_toggled', { park_name: parkName, action: isAdding ? 'favorited' : 'unfavorited' });
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
  
  // Populate Hubs Dropdown
  if (startPointSelect) {
    startPointSelect.innerHTML = MAJOR_HUBS.map(hub => 
      `<option value="${hub.code}" ${hub.code === currentHomeHub ? 'selected' : ''}>${hub.code}</option>`
    ).join('');
    
    startPointSelect.addEventListener('change', (e) => {
      currentHomeHub = e.target.value;
      localStorage.setItem('homeHub', currentHomeHub);
      initFilterBounds(); // Re-calculate bounds for the new hub
      renderParks();
    });
  }

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
  const match = path.match(/\/([a-z\-]+)(?:\.html)?$/i);
  let preselectedMonth = null;
  let preselectedPark = null;
  if (match) {
    const slug = match[1].toLowerCase();
    const monthIndex = MONTH_FULL.findIndex(m => m.toLowerCase() === slug);
    if (monthIndex !== -1) {
      preselectedMonth = monthIndex + 1;
    } else if (window.PARKS_SUMMARY && window.PARKS_SUMMARY[slug]) {
      preselectedPark = window.PARKS_SUMMARY[slug];
    }
  }

  if (preselectedMonth) {
    selectMonth(preselectedMonth, true);
  } else if (!preselectedPark) {
    // Auto-select current month for immediate relevance (especially on mobile)
    const currentMonth = new Date().getMonth() + 1; // 1-indexed
    selectMonth(currentMonth, true);
  }

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

// ============ Render Chips (months + special) ============
function renderChips() {
  // Special chips first
  const specialChips = [
    { id: 'chip-all',       label: 'All Parks',   mode: 'all' },
    { id: 'chip-favorites', label: '<svg class="icon" style="margin-right: 4px; color: var(--amber); fill: var(--amber);"><use href="#icon-star" xlink:href="#icon-star"></use></svg>Favorites', mode: 'favorites' },
    { id: 'chip-visited',   label: '<svg class="icon" style="margin-right: 4px; color: var(--green);"><use href="#icon-check-filled" xlink:href="#icon-check-filled"></use></svg>Visited',   mode: 'visited'   },
    { id: 'chip-hidden',    label: '<svg class="icon" style="margin-right: 4px;"><use href="#icon-eye-off" xlink:href="#icon-eye-off"></use></svg>Hidden',   mode: 'hidden'    },
  ];

  specialChips.forEach(({ id, label, mode }) => {
    const chip = document.createElement('button');
    chip.className = 'month-chip special-chip';
    chip.innerHTML = label;
    chip.id = id;
    if (viewMode === 'all' && mode === 'all' && !selectedMonth) chip.classList.add('active');
    chip.addEventListener('click', () => selectSpecialMode(mode));
    chipContainer.appendChild(chip);
  });

  // Divider
  const sep = document.createElement('span');
  sep.className = 'chip-sep';
  sep.textContent = '|';
  chipContainer.appendChild(sep);

  // Month chips
  MONTHS.forEach((m, i) => {
    const chip = document.createElement('button');
    chip.className = 'month-chip';
    chip.textContent = m;
    chip.id = `chip-${i + 1}`;
    chip.setAttribute('aria-label', `Filter by ${MONTH_FULL[i]}`);
    chip.addEventListener('click', () => selectMonth(i + 1));
    chipContainer.appendChild(chip);
  });
}

function selectSpecialMode(mode) {
  // Clear all chips
  document.querySelectorAll('.month-chip').forEach(c => c.classList.remove('active'));

  if (viewMode === mode && mode !== 'all') {
    // Deselect (if you clicked visited/favorites again)
    viewMode = 'all';
    selectedMonth = null;
    document.getElementById('chip-all')?.classList.add('active');
  } else {
    // Select the new mode
    viewMode = mode;
    selectedMonth = null;
    document.getElementById(`chip-${mode}`)?.classList.add('active');
  }
  
  window.history.pushState({ month: null }, '', '/');
  document.title = 'US National Park Finder | Explore by Month';
  
  // Show/hide visited toggle
  if (toggleWrap) toggleWrap.style.display = (viewMode === 'visited') ? 'none' : '';
  renderParks();
}

function selectMonth(month, preventHistory = false) {
  viewMode = 'all';
  selectedMonth = selectedMonth === month ? null : month;
  // Clear ALL chips first, then activate the right one by ID (avoids index offset from special chips)
  document.querySelectorAll('.month-chip').forEach(c => c.classList.remove('active'));
  
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
    if (!preventHistory) {
      const ms = MONTH_FULL[selectedMonth - 1].toLowerCase();
      window.history.pushState({ month: selectedMonth }, '', `/${ms}`);
      document.title = `Where to go in ${MONTH_FULL[selectedMonth - 1]}: National Parks Guide | US National Park Finder`;
    }
  } else {
    document.getElementById('chip-all')?.classList.add('active');
    if (!preventHistory) {
      window.history.pushState({ month: null }, '', '/');
      document.title = 'US National Park Finder | Explore by Month';
    }
  }
  
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

function formatCrowdLevel(score) {
  if (!score) return '';
  let html = '<div class="modal-crowd-icons">';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="crowd-icon ${i <= score ? 'active' : ''}"><svg class="icon"><use href="#icon-user" xlink:href="#icon-user"></use></svg></span>`;
  }
  html += '</div>';
  return html;
}

function renderStars(count) {
  const full = Math.floor(count), half = (count % 1) >= 0.3;
  let s = '';
  for (let i = 0; i < full; i++) {
    s += `<svg class="icon star-icon" style="color: var(--amber); fill: var(--amber);"><use href="#icon-star" xlink:href="#icon-star"></use></svg>`;
  }
  if (half) {
    s += `<svg class="icon star-icon" style="color: var(--amber); fill: var(--amber);"><use href="#icon-star-half" xlink:href="#icon-star-half"></use></svg>`;
  }
  return s;
}

function parseAirport(str) {
  if (!str) return { code: '', detail: '' };
  const firstSpace = str.indexOf(' ');
  if (firstSpace === -1) return { code: str, detail: '' };
  return { code: str.slice(0, firstSpace), detail: str.slice(firstSpace).trim() };
}

function sortParks(parks) {
  return [...parks].sort((a, b) => {
    const aFav = favoritedParks.has(a.name) ? 1 : 0;
    const bFav = favoritedParks.has(b.name) ? 1 : 0;
    // Favorites always float to top
    if (bFav !== aFav) return bFav - aFav;

    if (sortBy === 'distance') {
      return getTravelTime(a) - getTravelTime(b);
    } else if (sortBy === 'days') {
      return (a.minDays || 99) - (b.minDays || 99);
    } else if (sortBy === 'stargazing') {
      // Note: stargazing info moved to details, using composite as fallback for summary
      return b.compositeScore - a.compositeScore;
    }
    // default: score
    return b.compositeScore - a.compositeScore;
  });
}


// ============ Filter Logic ============
function toggleFilterPanel() {
  const panel = document.getElementById('filter-panel');
  showFilterPanel = !showFilterPanel;
  panel?.classList.toggle('hidden', !showFilterPanel);
  if (showFilterPanel) renderFilterUI();
}

function updateFilterBounds(baseParks) {
  // Logic moved to initFilterBounds to keep them static.
  // We no longer clip the user's filterState here because it 
  // causes "random" filters to appear when switching months.
}

function getFlightType(park) {
  if (!park.flight || park.flight.toLowerCase().includes('drive') || park.flight.toLowerCase().includes('ferry') || park.flight.toLowerCase().includes('boat')) return 'no-flight';
  const f = park.flight.toLowerCase();
  if (f.includes('direct')) return 'direct';
  if (f.includes('1 stop')) return '1-stop';
  return '2-stops';
}

function renderFilterChips() {
  const container = document.getElementById('active-filters');
  if (!container) return;
  container.innerHTML = '';
  
  const chips = [];
  
  if (searchQuery) {
    chips.push({ label: `<svg class="icon"><use href="#icon-search" xlink:href="#icon-search"></use></svg> "${searchQuery}"`, onClear: () => { 
      if (parkSearchInput) parkSearchInput.value = ''; 
      searchQuery = ''; 
      if (searchClearBtn) searchClearBtn.classList.remove('visible');
      renderParks(); 
    } });
  }
  
  if (selectedMonth) {
    chips.push({ label: `<svg class="icon"><use href="#icon-calendar" xlink:href="#icon-calendar"></use></svg> ${MONTH_FULL[selectedMonth-1]}`, onClear: () => selectMonth(null) });
  }
  
  if (viewMode !== 'all') {
    const labels = { 
      favorites: '<svg class="icon" style="color:var(--amber); fill:var(--amber);"><use href="#icon-star" xlink:href="#icon-star"></use></svg> Favorites', 
      visited: '<svg class="icon" style="color:var(--green);"><use href="#icon-check-filled" xlink:href="#icon-check-filled"></use></svg> Visited Only', 
      hidden: '<svg class="icon"><use href="#icon-eye-off" xlink:href="#icon-eye-off"></use></svg> Hidden' 
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

  if (filterState.minRating > 0) {
    chips.push({ label: `<svg class="icon" style="color:var(--amber); fill:var(--amber);"><use href="#icon-star" xlink:href="#icon-star"></use></svg> ${filterState.minRating}+ Stars`, onClear: () => setFilterValue('minRating', 0) });
  }
  
  if (filterState.stargazing) {
    chips.push({ label: '<svg class="icon"><use href="#icon-telescope" xlink:href="#icon-telescope"></use></svg> Stargazing', onClear: () => setFilterValue('stargazing', false) });
  }
  
  if (filterState.minDays > filterBounds.minDays) {
    chips.push({ label: `<svg class="icon"><use href="#icon-calendar" xlink:href="#icon-calendar"></use></svg> Min ${filterState.minDays} Days`, onClear: () => setFilterValue('minDays', filterBounds.minDays) });
  }

  if (filterState.maxDuration < filterBounds.maxDuration) {
    chips.push({ label: `<svg class="icon"><use href="#icon-clock" xlink:href="#icon-clock"></use></svg> Max ${Math.floor(filterState.maxDuration/60)}h ${filterState.maxDuration%60}m`, onClear: () => setFilterValue('maxDuration', filterBounds.maxDuration) });
  }

  filterState.flights.forEach(f => {
    const labels = { 
      'no-flight': '<svg class="icon"><use href="#icon-car" xlink:href="#icon-car"></use></svg> Drive', 
      'direct': '<svg class="icon"><use href="#icon-plane" xlink:href="#icon-plane"></use></svg> Direct', 
      '1-stop': '<svg class="icon"><use href="#icon-stop" xlink:href="#icon-stop"></use></svg> 1 Stop', 
      '2-stops': '<svg class="icon"><use href="#icon-stop" xlink:href="#icon-stop"></use></svg> 2+ Stops' 
    };
    chips.push({ label: labels[f], onClear: () => toggleFlightFilter(f) });
  });

  if (minTempFilter > 0 || maxTempFilter < 110) {
    chips.push({ label: `<svg class="icon"><use href="#icon-thermometer" xlink:href="#icon-thermometer"></use></svg> ${minTempFilter}°F - ${maxTempFilter}°F`, onClear: () => {
      minTempFilter = 0; 
      maxTempFilter = 110;
      const tMin = document.getElementById('temp-min');
      const tMax = document.getElementById('temp-max');
      if (tMin) tMin.value = "0";
      if (tMax) tMax.value = "110";
      // Update logic and re-render
      updateTempFilterLogic(true);
    }});
  }

  if (chips.length === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.style.display = 'flex';
  chips.forEach(chip => {
    const div = document.createElement('div');
    div.className = 'filter-chip';
    div.innerHTML = `<span>${chip.label}</span><button class="chip-remove" aria-label="Remove filter">×</button>`;
    div.querySelector('.chip-remove').onclick = (e) => {
      e.stopPropagation();
      chip.onClear();
    };
    container.appendChild(div);
  });
}

function getFlightType(park) {
  if (currentHomeHub === park.gatewayHub) {
    return park.gatewayExtraMinutes <= 120 ? 'no-flight' : 'direct';
  }
  return '1-stop';
}

function applyFilters(baseParks) {
  return baseParks.filter(p => {
    // Duration
    const travelTime = getTravelTime(p);
    if (filterState.maxDuration !== null && travelTime > filterState.maxDuration) return false;
    // Days Range (Min required)
    if (filterState.minDays !== null && (p.minDays || 1) < filterState.minDays) return false;
    // Rating
    if (filterState.minRating > 0 && p.compositeScore < filterState.minRating) return false;
    // Stargazing
    if (filterState.stargazing && !p.stargazing) return false;
    
    // Flight Types
    if (filterState.flights.length > 0) {
      const type = getFlightType(p);
      if (!filterState.flights.includes(type)) return false;
    }

    // Temperature Filter
    if (selectedMonth && (minTempFilter > 0 || maxTempFilter < 110)) {
      const highTemp = getParkHighTemp(p.id, selectedMonth);
      if (highTemp === null || highTemp < minTempFilter || highTemp > maxTempFilter) return false;
    }

    return true;
  });
}

function resetFilters() {
  filterState = { maxDuration: filterBounds.maxDuration, minDays: filterBounds.minDays, maxDays: filterBounds.maxDays, minRating: 0, flights: [], stargazing: false };
  minTempFilter = 0;
  maxTempFilter = 110;
  const tMin = document.getElementById('temp-min');
  const tMax = document.getElementById('temp-max');
  if (tMin) tMin.value = "0";
  if (tMax) tMax.value = "110";
  // Sync UI and trigger re-render
  syncTempSliderTrack();
  saveFilterState();
  renderParks();
}

function setFilterValue(key, val, shouldRender=true) {
  filterState[key] = val; saveFilterState();
  if(shouldRender) {
    // If range sliders are dragging widely, we shouldn't rerender instantly to avoid lag.
    // For now, render Parks which triggers re-render.
    renderParks();
  }
}
function toggleFlightFilter(type) {
  if (filterState.flights.includes(type)) filterState.flights = filterState.flights.filter(t => t!==type);
  else filterState.flights.push(type);
  saveFilterState(); renderParks();
}

function renderFilterUI() {
  if (!showFilterPanel) return;
  filterPanel.classList.remove('hidden');
  
  filterPanel.innerHTML = `
    <div class="filter-header">
      <h3>Refine Results</h3>
      <div style="display:flex; gap:12px;">
        <button class="clear-filters-btn" onclick="resetFilters()">Clear All</button>
        <button class="filter-close-x" onclick="toggleFilterPanel()" aria-label="Close filters">×</button>
      </div>
    </div>
    <div class="filter-body">
      
      <div class="filter-col">
        <label>Total Travel Time: <= ${Math.round((filterState.maxDuration||filterBounds.maxDuration)/60)}h ${(filterState.maxDuration||filterBounds.maxDuration)%60}m</label>
        <input type="range" min="${filterBounds.minDuration}" max="${filterBounds.maxDuration}" step="30" value="${filterState.maxDuration||filterBounds.maxDuration}" 
          onchange="setFilterValue('maxDuration', parseInt(this.value))"
          oninput="this.previousElementSibling.innerText = 'Total Travel Time: <= ' + Math.floor(this.value/60) + 'h ' + (this.value%60) + 'm'">
        
        <label style="margin-top:16px;">Suggested Days: &ge; ${filterState.minDays||filterBounds.minDays} days</label>
        <input type="range" min="${filterBounds.minDays}" max="${filterBounds.maxDays}" step="1" value="${filterState.minDays||filterBounds.minDays}" 
             onchange="setFilterValue('minDays', parseInt(this.value))"
             oninput="this.previousElementSibling.innerText = 'Suggested Days: &ge; ' + this.value + ' days'">

        ${selectedMonth ? `
        <div class="filter-group" style="margin-top:24px;">
          <div class="filter-header">
            <label>Temperature: <span id="temp-range-label" style="color:var(--amber); font-weight:bold;">${minTempFilter}°F - ${maxTempFilter}°F</span></label>
          </div>
          <div class="temp-slider-wrapper" style="margin-top:8px;">
            <div class="slider-track" id="slider-track"></div>
            <input type="range" id="temp-min" min="0" max="110" value="${minTempFilter}" step="1" oninput="updateTempFilterLogic(true)" onmousedown="this.style.zIndex=10" onmouseup="this.style.zIndex=2" ontouchstart="this.style.zIndex=10" ontouchend="this.style.zIndex=2">
            <input type="range" id="temp-max" min="0" max="110" value="${maxTempFilter}" step="1" oninput="updateTempFilterLogic(false)" onmousedown="this.style.zIndex=10" onmouseup="this.style.zIndex=2" ontouchstart="this.style.zIndex=10" ontouchend="this.style.zIndex=2">
          </div>
          <div class="filter-hint" style="font-size:11px; margin-top:12px;">Filters parks for ${MONTH_FULL[selectedMonth-1]}</div>
        </div>
        ` : '<div class="filter-hint" style="margin-top:24px;">Select a month to filter by temperature</div>'}
      </div>

      <div class="filter-col">
        <label>Star Rating</label>
        <div class="pill-group">
          <button class="pill ${filterState.minRating===0?'active':''}" onclick="setFilterValue('minRating', 0)">Any</button>
          <button class="pill ${filterState.minRating===3?'active':''}" onclick="setFilterValue('minRating', 3)">3+ Stars</button>
          <button class="pill ${filterState.minRating===4?'active':''}" onclick="setFilterValue('minRating', 4)">4+ Stars</button>
        </div>

        <label style="margin-top:20px;">Features</label>
        <label class="check-label">
          <input type="checkbox" ${filterState.stargazing ? 'checked':''} onchange="setFilterValue('stargazing', this.checked)">
          <svg class="icon" style="margin-right: 4px;"><use href="#icon-telescope" xlink:href="#icon-telescope"></use></svg> Stargazing Recommended
        </label>
      </div>

      <div class="filter-col">
        <label>Transit Stops (From SFO)</label>
        <div class="pill-group-vertical">
          <button class="pill ${filterState.flights.includes('no-flight')?'active':''}" onclick="toggleFlightFilter('no-flight')"><svg class="icon" style="margin-right:6px;"><use href="#icon-car" xlink:href="#icon-car"></use></svg>Drive / No Flight</button>
          <button class="pill ${filterState.flights.includes('direct')?'active':''}" onclick="toggleFlightFilter('direct')"><svg class="icon" style="margin-right:6px;"><use href="#icon-plane" xlink:href="#icon-plane"></use></svg>Direct Flight</button>
          <button class="pill ${filterState.flights.includes('1-stop')?'active':''}" onclick="toggleFlightFilter('1-stop')"><svg class="icon" style="margin-right:6px;"><use href="#icon-stop" xlink:href="#icon-stop"></use></svg>1 Stop</button>
          <button class="pill ${filterState.flights.includes('2-stops')?'active':''}" onclick="toggleFlightFilter('2-stops')"><svg class="icon" style="margin-right:6px;"><use href="#icon-stop" xlink:href="#icon-stop"></use></svg>2+ Stops</button>
        </div>

        <label style="margin-top:20px;">Visibility</label>
        <label class="check-label">
          <input type="checkbox" id="visited-toggle-filter" ${showVisited ? 'checked' : ''} onchange="toggleVisitedFilterGlobal(this.checked)">
          Show Visited Parks
        </label>
      </div>

    </div>
  `;
  syncTempSliderTrack();
  initSliderTouchHandlers();
}

function initSliderTouchHandlers() {
  const tempMin = document.getElementById('temp-min');
  const tempMax = document.getElementById('temp-max');
  const wrapper = document.querySelector('.temp-slider-wrapper');
  if (!tempMin || !tempMax || !wrapper) return;

  wrapper.addEventListener('touchstart', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const pct = touchX / rect.width;
    const clickedVal = pct * 110;

    const distMin = Math.abs(clickedVal - parseFloat(tempMin.value));
    const distMax = Math.abs(clickedVal - parseFloat(tempMax.value));

    if (distMin < distMax) {
      tempMin.style.zIndex = '10';
      tempMax.style.zIndex = '2';
    } else {
      tempMax.style.zIndex = '10';
      tempMin.style.zIndex = '2';
    }
  }, { passive: true });
}

function updateTempFilterLogic(isMin) {
  const tMin = document.getElementById('temp-min');
  const tMax = document.getElementById('temp-max');
  if (!tMin || !tMax) return;

  let min = parseInt(tMin.value);
  let max = parseInt(tMax.value);

  if (min > max - 2) {
    if (isMin) tMin.value = (max - 2).toString();
    else tMax.value = (min + 2).toString();
    min = parseInt(tMin.value);
    max = parseInt(tMax.value);
  }

  minTempFilter = min;
  maxTempFilter = max;
  const label = document.getElementById('temp-range-label');
  if (label) label.textContent = `${min}°F - ${max}°F`;
  syncTempSliderTrack();
  renderParks();
}

function syncTempSliderTrack() {
  const track = document.getElementById('slider-track');
  if (track) {
    const p1 = (minTempFilter / 110) * 100;
    const p2 = (maxTempFilter / 110) * 100;
    track.style.background = `linear-gradient(to right, #334155 ${p1}%, #fbbf24 ${p1}%, #fbbf24 ${p2}%, #334155 ${p2}%)`;
  }
}

// ============ Render Parks ============

function renderParks() {
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
    modeLabel = `${parks.length} parks ideal in <strong>${MONTH_FULL[selectedMonth - 1]}</strong>`;
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
  
  if (parks.length !== rawCount || searchQuery) {
    modeLabel = `Showing ${parks.length} of ${rawCount} parks`;
  }
  
  renderFilterChips();
  // ---------------------

  emptyState.classList.add('hidden');

// Stats bar
  statsBar.innerHTML = `
    <div style="display:flex; align-items:center; gap: 16px;">
      <span class="count">${modeLabel}</span>
      <button class="filter-toggle-btn ${parks.length !== rawCount ? 'has-active-filters' : ''}" onclick="toggleFilterPanel()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path></svg>
        Filters
      </button>
    </div>
    <div class="sort-controls">
      <span class="sort-label">Sort:</span>
      <button class="sort-btn ${sortBy==='score'    ? 'sort-active':''}" onclick="setSort('score')"><svg class="icon" style="margin-right:4px; color:var(--amber); fill:var(--amber);"><use href="#icon-star" xlink:href="#icon-star"></use></svg>Rating</button>
      <button class="sort-btn ${sortBy==='distance' ? 'sort-active':''}" onclick="setSort('distance')"><svg class="icon" style="margin-right:4px;"><use href="#icon-plane" xlink:href="#icon-plane"></use></svg>Distance</button>
      <button class="sort-btn ${sortBy==='days'     ? 'sort-active':''}" onclick="setSort('days')"><svg class="icon" style="margin-right:4px;"><use href="#icon-calendar" xlink:href="#icon-calendar"></use></svg>Days</button>
      <button class="sort-btn ${sortBy==='stargazing'?'sort-active':''}" onclick="setSort('stargazing')"><svg class="icon" style="margin-right:4px;"><use href="#icon-telescope" xlink:href="#icon-telescope"></use></svg>Stargazing</button>
    </div>
  `;

  const sorted = sortParks(parks);
  const isMobile = window.innerWidth <= 600;

  // ============ Lazy Loading Setup ============
  const BATCH_SIZE = isMobile ? 10 : sorted.length; // Desktop shows all, mobile lazy loads
  let loadedCount = 0;

  function renderBatch() {
    const end = Math.min(loadedCount + BATCH_SIZE, sorted.length);
    for (let idx = loadedCount; idx < end; idx++) {
      const park = sorted[idx];
      const isHero = (selectedMonth && idx === 0 && viewMode === 'all');

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
    const stagger = isMobile ? 0.02 : 0.04;
    card.style.animationDelay = `${idx * stagger}s`;
    card.addEventListener('click', () => openModal(park));

    const travelTime = getTravelTime(park);
    const hrs = Math.floor(travelTime / 60);
    const mins = travelTime % 60;
    const timeStr = hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;

    const seasonalInfo = window.PARKS_SEASONAL?.[park.id]?.[selectedMonth];

    card.innerHTML = `
      ${isHero ? `<div class="floating-hero-badge"><svg class="icon" style="margin-right:4px;"><use href="#icon-trophy" xlink:href="#icon-trophy"></use></svg>Top Pick for ${MONTH_FULL[selectedMonth - 1]}</div>` : ''}
      <div class="card-header">
        <div class="card-title-col">
          <div class="park-name">
            ${park.name}<span class="park-state-inline">${park.state}</span>
          </div>
        </div>
        <div class="card-right-col">
          <div class="card-actions">
            <button class="card-action-btn ${isFavorite ? 'active-heart' : ''}" 
              onclick="toggleFavorite('${park.name}', event)"
              data-tooltip="${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}">
              <svg class="icon"><use href="${isFavorite ? '#icon-heart-filled' : '#icon-heart'}" xlink:href="${isFavorite ? '#icon-heart-filled' : '#icon-heart'}"></use></svg>
            </button>
            <button class="card-action-btn ${isVisited ? 'active-tick' : ''}" 
              onclick="toggleVisited('${park.name}', event)"
              data-tooltip="${isVisited ? 'Unmark as Visited' : 'Mark as Visited'}">
              <svg class="icon"><use href="${isVisited ? '#icon-check-filled' : '#icon-check'}" xlink:href="${isVisited ? '#icon-check-filled' : '#icon-check'}"></use></svg>
            </button>
            <button class="card-action-btn ${isHidden ? 'active-hide' : ''}" 
              onclick="toggleHidden('${park.name}', event)"
              data-tooltip="${isHidden ? 'Unhide Park' : 'Hide Park'}">
              <svg class="icon"><use href="${isHidden ? '#icon-eye-off' : '#icon-eye'}" xlink:href="${isHidden ? '#icon-eye-off' : '#icon-eye'}"></use></svg>
            </button>
          </div>
        </div>
      </div>

      <div class="card-score-row">
        <span class="star-badge">
          ${isMobile ? `<svg class="icon star-icon" style="color: var(--amber); fill: var(--amber);"><use href="#icon-star" xlink:href="#icon-star"></use></svg> <span class="score-num">${park.compositeScore}</span>` : `${renderStars(park.compositeScore)} <span class="score-num">${park.compositeScore}</span>`}
        </span>
        ${park.topActivity ? `<span class="compact-activity"><svg class="icon" style="margin-right:3px;"><use href="#icon-target" xlink:href="#icon-target"></use></svg>${park.topActivity}</span>` : ''}
        <span class="min-days-badge"><svg class="icon" style="margin-right:3px;"><use href="#icon-calendar" xlink:href="#icon-calendar"></use></svg>Min ${park.minDays} day${park.minDays>1?'s':''}</span>
      </div>

      <div class="card-details">
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label"><svg class="icon" style="margin-right:4px;"><use href="#icon-calendar" xlink:href="#icon-calendar"></use></svg>Best Months</span>
            <span class="info-value small-val">${formatBestMonths(park.bestMonths)}</span>
          </div>
          ${park.avoid && park.avoid.length > 0 ? `
          <div class="info-item">
            <span class="info-label"><svg class="icon" style="margin-right:4px;"><use href="#icon-warning" xlink:href="#icon-warning"></use></svg>Avoid</span>
            <span class="info-value small-val">${formatMonths(park.avoid)}</span>
          </div>` : ''}
          ${seasonalInfo && seasonalInfo.temp !== 'N/A' ? '<div class="info-item"><span class="info-label"><svg class="icon" style="margin-right:4px;"><use href="#icon-thermometer" xlink:href="#icon-thermometer"></use></svg>Temp in ' + MONTHS[selectedMonth - 1] + '</span><span class="info-value">' + seasonalInfo.temp + '</span></div>' : ''}
          ${park.topActivity ? `
          <div class="info-item">
            <span class="info-label"><svg class="icon" style="margin-right:4px;"><use href="#icon-target" xlink:href="#icon-target"></use></svg>Top Activity</span>
            <span class="info-value">${park.topActivity}</span>
          </div>` : ''}
        </div>

        <div class="card-footer">
          <div class="card-airport-row">
            ${(() => {
              const h = currentHomeHub;
              const d = park.driveTimes?.[h];
              if (d && d <= 360) {
                return `<span class="car"><svg class="icon"><use href="#icon-car" xlink:href="#icon-car"></use></svg></span> <span class="time-main"><strong>${timeStr}</strong> drive from ${h}</span>`;
              }
              const flight = travelTime - (park.gatewayExtraMinutes || 0);
              const fH = Math.floor(flight / 60); const fM = flight % 60;
              const fStr = fH > 0 ? `${fH}h ${fM}m` : `${fM}m`;
              return `
                <span class="plane"><svg class="icon"><use href="#icon-plane" xlink:href="#icon-plane"></use></svg></span>
                <span class="airport-code">${park.gatewayHub}</span>
                <span class="time-main">(${fStr}) + <svg class="icon"><use href="#icon-car" xlink:href="#icon-car"></use></svg> ${Math.floor(park.gatewayExtraMinutes/60)}h ${park.gatewayExtraMinutes%60}m &bull; <strong>${timeStr}</strong></span>
              `;
            })()}
          </div>
        </div>
      </div>
      <div class="card-cta">
        ${isMobile ? 'Tap to explore ➝' : 'Click for details ➝'}
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
    observer.observe(sentinel);
  }
}

function setSort(mode) {
  sortBy = mode;
  renderParks();
}

// ============ Modal Accessibility Tree Toggle ============
function updateAriaHidden() {
  const isParkModalOpen = modal && !modal.classList.contains('hidden');
  const isFeatureModalOpen = featureModal && !featureModal.classList.contains('hidden');
  const anyOpen = isParkModalOpen || isFeatureModalOpen;
  
  const wrappers = document.querySelectorAll('header, .search-container, #month-bar, main, footer');
  wrappers.forEach(el => {
    if (anyOpen) {
      el.setAttribute('aria-hidden', 'true');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
}

// ============ Modal ============
function openModal(park, preventHistory = false) {
  const details = window.PARKS_DETAILS?.[park.id];
  if (!details) return;

  if (!preventHistory) {
    window.history.pushState({ modal: park.id, prevMonth: selectedMonth }, '', `/${park.id}`);
    document.title = `${park.name} National Park | US National Park Finder`;
  }
  if (typeof gtag !== 'undefined') gtag('event', 'park_modal_opened', { park_name: park.name, park_id: park.id, month: selectedMonth ? MONTH_FULL[selectedMonth - 1] : 'all' });

  document.body.classList.add('modal-open');
  modal.classList.remove('hidden');
  updateAriaHidden();

  const isVisited  = visitedParks.has(park.name);
  const isFavorite = favoritedParks.has(park.name);
  const isHidden   = hiddenParks.has(park.name);
  const starStr    = renderStars(park.compositeScore);
  const scorePct   = (park.compositeScore / 5) * 100;

  const activitiesHtml  = (details.topActivities||[]).map(a => `<span class="activity-tag">${a}</span>`).join('');
  const itineraryHtml   = (details.itinerary||[]).map(i => `<div class="itinerary-step"><strong>${i.day}</strong><p>${i.plan}</p></div>`).join('');
  const hacksHtml       = (details.travelHacks||[]).map(h => `<div class="hack-item">${h}</div>`).join('');
  const dos             = (details.dosAndDonts||[]).filter(i => i.type==="do");
  const donts           = (details.dosAndDonts||[]).filter(i => i.type==="dont");
  const dosHtml         = dos.map(d => `<div class="do-item">${d.text}</div>`).join('');
  const dontsHtml       = donts.map(d => `<div class="dont-item">${d.text}</div>`).join('');
  const funFactsHtml    = (details.funFacts||[]).map(f => `<div class="fun-fact-item">${f}</div>`).join('');

  const seasonalInfo = window.PARKS_SEASONAL?.[park.id]?.[selectedMonth];
  const monthNameFn  = selectedMonth ? MONTH_FULL[selectedMonth - 1] : null;

  const redditPostsHtml = (details.redditPosts||[]).map(p => `
    <div class="reddit-post-card">
      <div class="reddit-post-top">
        <span class="reddit-post-sub">${p.sub}</span>
        <span class="reddit-post-icon"><svg class="icon"><use href="#icon-comment" xlink:href="#icon-comment"></use></svg></span>
      </div>
      <div class="reddit-post-title">${p.title}</div>
      ${p.quote ? `<div class="reddit-post-quote">${p.quote}</div>` : ''}
    </div>
  `).join('');

  const links = details.links || {};
  const linkLabelMap = {
    nps: '🏛️ NPS Official',
    wikipedia: '📖 Wikipedia',
    reddit: '🤖 Reddit',
    guide: '🗺️ Field Guide',
    lodging: '🛌 Lodging',
    dining: '🍽️ Dining',
    activities: '🧗 Activities',
    conditions: '🚧 Road Conditions',
    roadConditions: '🚧 Road Conditions'
  };

  const linksHtml = `<div class="resource-links">
    ${Object.entries(links).map(([key, url]) => `
      <a href="${url}" target="_blank" class="resource-link resource-link-${key}">
        ${linkLabelMap[key] || (key.charAt(0).toUpperCase() + key.slice(1))}
      </a>
    `).join('')}
  </div>`;

  const travelTime = getTravelTime(park);
  const hrs = Math.floor(travelTime / 60);
  const mins = travelTime % 60;
  const timeStr = hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;

  modalBody.innerHTML = `
    <div class="modal-icon-actions">
      <button class="modal-icon-btn ${isFavorite ? 'active-heart' : ''}" 
        onclick="toggleFavorite('${park.name}', event); openModal(window.PARKS_SUMMARY['${park.id}'])"
        data-tooltip="${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}">
        <svg class="icon"><use href="${isFavorite ? '#icon-heart-filled' : '#icon-heart'}" xlink:href="${isFavorite ? '#icon-heart-filled' : '#icon-heart'}"></use></svg>
      </button>
      <button class="modal-icon-btn ${isVisited ? 'active-tick' : ''}" 
        onclick="toggleVisited('${park.name}', event); openModal(window.PARKS_SUMMARY['${park.id}'])"
        data-tooltip="${isVisited ? 'Unmark as Visited' : 'Mark as Visited'}">
        <svg class="icon"><use href="${isVisited ? '#icon-check-filled' : '#icon-check'}" xlink:href="${isVisited ? '#icon-check-filled' : '#icon-check'}"></use></svg>
      </button>
      <button class="modal-icon-btn ${isHidden ? 'active-hide' : ''}" 
        onclick="toggleHidden('${park.name}', event); openModal(window.PARKS_SUMMARY['${park.id}'])"
        data-tooltip="${isHidden ? 'Unhide Park' : 'Hide Park'}">
        <svg class="icon"><use href="${isHidden ? '#icon-eye-off' : '#icon-eye'}" xlink:href="${isHidden ? '#icon-eye-off' : '#icon-eye'}"></use></svg>
      </button>
    </div>
    <div class="modal-header">
      <div class="modal-title-row">
        <div>
          <h2 class="modal-title">
            ${isFavorite ? '<svg class="icon star-icon" style="color: var(--amber); fill: var(--amber);"><use href="#icon-star" xlink:href="#icon-star"></use></svg> ' : ''}${park.name} <span class="modal-state-inline">${park.state}</span>
          </h2>
          <div class="modal-subtitle">
            ${(() => {
              const h = currentHomeHub;
              const d = park.driveTimes?.[h];
              if (d && d <= 360) {
                return `<span class="modal-airport-inline"><svg class="icon"><use href="#icon-car" xlink:href="#icon-car"></use></svg> <strong>${timeStr}</strong> drive from ${h}</span>`;
              }
              const flight = travelTime - (park.gatewayExtraMinutes || 0);
              const fH = Math.floor(flight / 60); const fM = flight % 60;
              const fStr = fH > 0 ? `${fH}h ${fM}m` : `${fM}m`;
              const gH = Math.floor(park.gatewayExtraMinutes/60);
              const gM = park.gatewayExtraMinutes%60;
              const gStr = gH > 0 ? `${gH}h ${gM}m` : `${gM}m`;
              return `<span class="modal-airport-inline"><svg class="icon"><use href="#icon-plane" xlink:href="#icon-plane"></use></svg> <strong>${park.gatewayHub}</strong> (${fStr}) + <svg class="icon"><use href="#icon-car" xlink:href="#icon-car"></use></svg> ${gStr} &bull; <strong>${timeStr} from ${h}</strong></span>`;
            })()}
            <span class="sep">&bull;</span>
            <span class="modal-min-days"><svg class="icon"><use href="#icon-calendar" xlink:href="#icon-calendar"></use></svg> Min ${park.minDays} days</span>
          </div>
        </div>
        <div class="modal-header-right">
          <div class="modal-rating-detail">
            <div class="modal-star-row">${starStr} <span class="modal-score-num">${park.compositeScore}</span></div>
            <div class="composite-score">Pop: ${park.popularity} | Unique: ${park.uniqueness}</div>
            <div class="score-bar-bg"><div class="score-bar-fill" style="width:${scorePct}%"></div></div>
          </div>
        </div>
      </div>
    </div>

    ${details.seasonalVerdict ? `
    <div class="modal-section seasonal-verdict-container">
      <div class="seasonal-verdict-grid">
        <div>
          <div class="seasonal-best-label"><svg class="icon"><use href="#icon-feature-lights" xlink:href="#icon-feature-lights"></use></svg> Seasonal Best</div>
          <div class="seasonal-verdict-text">${details.seasonalVerdict.best}</div>
        </div>
        <div class="caution-col">
          <div class="seasonal-caution-label"><svg class="icon"><use href="#icon-warning" xlink:href="#icon-warning"></use></svg> Seasonal Caution</div>
          <div class="seasonal-verdict-text">${details.seasonalVerdict.avoid}</div>
        </div>
      </div>
    </div>` : ''}

    <div class="modal-section"><h3 class="modal-section-title"><svg class="icon"><use href="#icon-feature-lights" xlink:href="#icon-feature-lights"></use></svg> Top Activities</h3><div class="activities-list">${activitiesHtml}</div></div>

    ${seasonalInfo && selectedMonth ? `
    <div class="monthly-banner">
      <div class="monthly-banner-header"><svg class="icon"><use href="#icon-calendar" xlink:href="#icon-calendar"></use></svg> Visiting in ${MONTH_FULL[selectedMonth-1]}</div>
      <div class="monthly-metrics">
        <div class="monthly-metric">
          <span class="label">Average Temp</span>
          <span class="value">${seasonalInfo.temp}</span>
        </div>
        <div class="monthly-metric">
          <span class="label">Crowd Level</span>
          <div style="display:flex; align-items:center; gap:10px; margin-top:4px;">
            ${formatCrowdLevel(seasonalInfo.crowdScore)}
            <span style="font-size:0.8rem; opacity:0.8; font-weight:600; text-transform:uppercase;">${(() => {
              const s = seasonalInfo.crowdScore;
              if (s <= 1) return 'Peaceful';
              if (s <= 2) return 'Moderate';
              if (s <= 3) return 'Busy';
              if (s <= 4) return 'Very Busy';
              return 'Extreme';
            })()}</span>
          </div>
        </div>
      </div>
      <div class="reddit-sentiment" style="margin-top:12px;">
        <div class="reddit-sentiment-header">r/NationalParks Advice for ${MONTH_FULL[selectedMonth-1]}</div>
        <blockquote>"${seasonalInfo.reddit}"</blockquote>
      </div>
    </div>` : ''}

    <div class="modal-section">
      <h3 class="modal-section-title"><svg class="icon"><use href="#icon-sunset" xlink:href="#icon-sunset"></use></svg> Sun & Stars</h3>
      <div style="color:var(--text-dim);font-size:0.9rem;margin-bottom:12px;line-height:1.5;">${details.sunriseSunset}</div>
      ${details.stargazing ? `
      <div class="stargazing-card">
        <div class="stargazing-icon"><svg class="icon" style="width:1.5em; height:1.5em;"><use href="#icon-telescope" xlink:href="#icon-telescope"></use></svg></div>
        <div class="stargazing-info">
          <h4>Stargazing: ${details.stargazing.isFriendly?'Highly Recommended':'Limited'}</h4>
          <p><strong>Best Spots:</strong> ${details.stargazing.spots}</p>
          <p>${details.stargazing.description}</p>
        </div>
      </div>` : ''}
    </div>

    ${funFactsHtml?`<div class="modal-section"><h3 class="modal-section-title"><svg class="icon"><use href="#icon-info" xlink:href="#icon-info"></use></svg> Fun Facts</h3><div class="fun-facts-list">${funFactsHtml}</div></div>`:''}
    ${hacksHtml?`<div class="modal-section"><h3 class="modal-section-title"><svg class="icon"><use href="#icon-backpack" xlink:href="#icon-backpack"></use></svg> Travel Hacks</h3><div class="hacks-list">${hacksHtml}</div></div>`:''}
    ${(dosHtml||dontsHtml)?`<div class="modal-section"><h3 class="modal-section-title"><svg class="icon"><use href="#icon-check-filled" xlink:href="#icon-check-filled"></use></svg> Dos & Don'ts</h3><div class="dos-donts-grid"><div class="dos-col"><h4><svg class="icon" style="color:var(--green);"><use href="#icon-check" xlink:href="#icon-check"></use></svg> Do</h4><div class="dos-list">${dosHtml}</div></div><div class="donts-col"><h4><svg class="icon" style="color:var(--rose);"><use href="#icon-close" xlink:href="#icon-close"></use></svg> Don't</h4><div class="donts-list">${dontsHtml}</div></div></div></div>`:''}
    <div class="modal-section"><h3 class="modal-section-title"><svg class="icon"><use href="#icon-map" xlink:href="#icon-map"></use></svg> Sample Itinerary</h3><div style="margin-top:16px;">${itineraryHtml}</div></div>

    ${redditPostsHtml ? `
    <div class="modal-section">
      <h3 class="modal-section-title"><svg class="icon"><use href="#icon-comment" xlink:href="#icon-comment"></use></svg> Reddit Community Advice</h3>
      <div class="reddit-posts-list">${redditPostsHtml}</div>
    </div>` : ''}

    <div class="modal-section modal-links-section" style="margin-bottom:0; border-bottom:none;">
      <h3 class="modal-section-title"><svg class="icon"><use href="#icon-link" xlink:href="#icon-link"></use></svg> Resources</h3>${linksHtml}
    </div>
  `;
}

function closeModal(preventHistory = false) {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  updateAriaHidden();
  
  if (preventHistory !== true) {
    if (selectedMonth) {
      const ms = MONTH_FULL[selectedMonth - 1].toLowerCase();
      window.history.pushState({ month: selectedMonth }, '', `/${ms}`);
      document.title = `Where to go in ${MONTH_FULL[selectedMonth - 1]}: National Parks Guide | US National Park Finder`;
    } else {
      window.history.pushState({ month: null }, '', '/');
      document.title = 'US National Park Finder | Explore by Month';
    }
  }
}

modalCloseBtn.addEventListener('click', () => closeModal(false));
modal.addEventListener('click', e => { if (e.target===modal||e.target.classList.contains('modal-backdrop')) closeModal(false); });
document.addEventListener('keydown', e => { if (e.key==='Escape'&&!modal.classList.contains('hidden')) closeModal(false); });

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.modal) {
    const park = window.PARKS_SUMMARY[e.state.modal];
    if (park) openModal(park, true);
  } else {
    closeModal(true);
    if (e.state && e.state.month) {
      selectMonth(e.state.month, true);
    } else {
      selectMonth(null, true);
    }
  }
});

init();

// ============ Share & Bookmark UX ============
const shareBtn = document.getElementById('share-btn');

async function handleShare() {
  const shareData = {
    title: 'National Park Finder',
    text: 'Check out this awesome interactive US National Park Finder!',
    url: window.location.href
  };

  if (typeof gtag !== 'undefined') gtag('event', 'share_clicked', { method: navigator.share ? 'native_share' : 'clipboard', url: window.location.href });

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
      showToast('📋 Link copied to clipboard!');
    }
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('Share failed:', err);
    }
  }
}

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

if (shareBtn) {
  shareBtn.addEventListener('click', handleShare);
  
  // Bookmark Hint
  shareBtn.addEventListener('mouseenter', () => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const cmd = isMac ? '⌘ + D' : 'Ctrl + D';
    shareBtn.setAttribute('title', `Click to Share • Press ${cmd} to Bookmark`);
  });
}

// ============ Feature Request UX ============
const featureRequestBtn = document.getElementById('header-request-btn');
const featureModal = document.getElementById('feature-request-modal');
const featureModalCloseBtn = document.getElementById('feature-modal-close-btn');
const featureModalBackdrop = document.getElementById('feature-modal-backdrop');

function openFeatureModal() {
  if (!featureModal) return;
  featureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  updateAriaHidden();
  if (typeof gtag !== 'undefined') gtag('event', 'feature_request_opened', { page: window.location.pathname });
}

function closeFeatureModal() {
  if (!featureModal) return;
  featureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  updateAriaHidden();
}

if (featureRequestBtn) {
  featureRequestBtn.addEventListener('click', openFeatureModal);
}

if (featureModalCloseBtn) {
  featureModalCloseBtn.addEventListener('click', closeFeatureModal);
}

if (featureModal) {
  featureModal.addEventListener('click', (e) => {
    if (e.target === featureModal || e.target === featureModalBackdrop) {
      closeFeatureModal();
    }
  });
}

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape' && featureModal && !featureModal.classList.contains('hidden')) {
    closeFeatureModal(); 
  }
});
