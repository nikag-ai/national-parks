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
// ============ Theme Selection ============
let currentTheme = localStorage.getItem('theme') || 'dark';
const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.getElementById('theme-light')?.classList.toggle('active', theme === 'light');
  document.getElementById('theme-dark')?.classList.toggle('active', theme === 'dark');
};
applyTheme(currentTheme);

document.getElementById('theme-light')?.addEventListener('click', () => applyTheme('light'));
document.getElementById('theme-dark')?.addEventListener('click', () => applyTheme('dark'));

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
  visitedParks.has(parkName) ? visitedParks.delete(parkName) : visitedParks.add(parkName);
  saveVisited(); closeAllMenus(); renderParks();
}

function toggleFavorite(parkName, e) {
  if (e) e.stopPropagation();
  favoritedParks.has(parkName) ? favoritedParks.delete(parkName) : favoritedParks.add(parkName);
  saveFavorites(); closeAllMenus(); renderParks();
}

function toggleHidden(parkName, e) {
  if (e) e.stopPropagation();
  hiddenParks.has(parkName) ? hiddenParks.delete(parkName) : hiddenParks.add(parkName);
  saveHidden(); closeAllMenus(); renderParks();
}

function closeAllMenus() {
  document.querySelectorAll('.overflow-menu.open').forEach(m => m.classList.remove('open'));
}
document.addEventListener('click', closeAllMenus);

function init() {
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
  } else {
    viewMode = 'all';
    selectedMonth = null;
    document.getElementById('chip-all')?.classList.add('active');
    renderParks();
  }

  if (preselectedPark) {
    setTimeout(() => openModal(preselectedPark, true), 50);
  }
}

// ============ Render Chips (months + special) ============
function renderChips() {
  // Special chips first
  const specialChips = [
    { id: 'chip-all',       label: 'All Parks',   mode: 'all' },
    { id: 'chip-favorites', label: '⭐ Favorites', mode: 'favorites' },
    { id: 'chip-visited',   label: '✓ Visited',   mode: 'visited'   },
    { id: 'chip-hidden',    label: '🙈 Hidden',   mode: 'hidden'    },
  ];

  specialChips.forEach(({ id, label, mode }) => {
    const chip = document.createElement('button');
    chip.className = 'month-chip special-chip';
    chip.textContent = label;
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
    document.getElementById(`chip-${selectedMonth}`)?.classList.add('active');
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
    html += `<span class="crowd-icon ${i <= score ? 'active' : ''}">👤</span>`;
  }
  html += '</div>';
  return html;
}

function renderStars(count) {
  const full = Math.floor(count), half = (count % 1) >= 0.3;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
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
    chips.push({ label: `🔍 "${searchQuery}"`, onClear: () => { 
      if (parkSearchInput) parkSearchInput.value = ''; 
      searchQuery = ''; 
      if (searchClearBtn) searchClearBtn.classList.remove('visible');
      renderParks(); 
    } });
  }
  
  if (selectedMonth) {
    chips.push({ label: `📅 ${MONTH_FULL[selectedMonth-1]}`, onClear: () => selectMonth(null) });
  }
  
  if (viewMode !== 'all') {
    const labels = { favorites: '⭐ Favorites', visited: '✓ Visited Only', hidden: '🙈 Hidden' };
    chips.push({ label: labels[viewMode], onClear: () => selectSpecialMode('all') });
  }
  
  if (!showVisited && viewMode !== 'visited') {
    chips.push({ label: '🚫 Hiding Visited', onClear: () => { 
      showVisited = true; 
      const toggle = document.getElementById('visited-toggle');
      if (toggle) toggle.checked = true;
      renderParks(); 
    } });
  }

  if (filterState.minRating > 0) {
    chips.push({ label: `⭐ ${filterState.minRating}+ Stars`, onClear: () => setFilterValue('minRating', 0) });
  }
  
  if (filterState.stargazing) {
    chips.push({ label: '🔭 Stargazing', onClear: () => setFilterValue('stargazing', false) });
  }
  
  if (filterState.minDays > filterBounds.minDays) {
    chips.push({ label: `🗓️ Min ${filterState.minDays} Days`, onClear: () => setFilterValue('minDays', filterBounds.minDays) });
  }

  if (filterState.maxDuration < filterBounds.maxDuration) {
    chips.push({ label: `⏲️ Max ${Math.floor(filterState.maxDuration/60)}h ${filterState.maxDuration%60}m`, onClear: () => setFilterValue('maxDuration', filterBounds.maxDuration) });
  }

  filterState.flights.forEach(f => {
    const labels = { 'no-flight': '🚙 Drive', 'direct': '✈️ Direct', '1-stop': '🛑 1 Stop', '2-stops': '🛑 2+ Stops' };
    chips.push({ label: labels[f], onClear: () => toggleFlightFilter(f) });
  });

  if (minTempFilter > 0 || maxTempFilter < 110) {
    chips.push({ label: `🌡️ ${minTempFilter}°F - ${maxTempFilter}°F`, onClear: () => {
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
          🔭 Stargazing Recommended
        </label>
      </div>

      <div class="filter-col">
        <label>Transit Stops (From SFO)</label>
        <div class="pill-group-vertical">
          <button class="pill ${filterState.flights.includes('no-flight')?'active':''}" onclick="toggleFlightFilter('no-flight')">🚙 Drive / No Flight</button>
          <button class="pill ${filterState.flights.includes('direct')?'active':''}" onclick="toggleFlightFilter('direct')">✈️ Direct Flight</button>
          <button class="pill ${filterState.flights.includes('1-stop')?'active':''}" onclick="toggleFlightFilter('1-stop')">🛑 1 Stop</button>
          <button class="pill ${filterState.flights.includes('2-stops')?'active':''}" onclick="toggleFlightFilter('2-stops')">🛑 2+ Stops</button>
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
      <button class="sort-btn ${sortBy==='score'    ? 'sort-active':''}" onclick="setSort('score')">⭐ Rating</button>
      <button class="sort-btn ${sortBy==='distance' ? 'sort-active':''}" onclick="setSort('distance')">✈️ Distance</button>
      <button class="sort-btn ${sortBy==='days'     ? 'sort-active':''}" onclick="setSort('days')">🗓️ Days</button>
      <button class="sort-btn ${sortBy==='stargazing'?'sort-active':''}" onclick="setSort('stargazing')">🔭 Stargazing</button>
    </div>
  `;

  sortParks(parks).forEach((park, idx) => {
    const isVisited  = visitedParks.has(park.name);
    const isFavorite = favoritedParks.has(park.name);
    const isHidden   = hiddenParks.has(park.name);
    const card       = document.createElement('div');

    let cardClass = 'park-card';
    if (isFavorite) cardClass += ' park-favorite';
    else if (isVisited) cardClass += ' park-visited';
    if (isHidden) cardClass += ' park-hidden';

    card.className = cardClass;
    const stagger = ('ontouchstart' in window) ? 0.02 : 0.04;
    card.style.animationDelay = `${idx * stagger}s`;
    card.addEventListener('click', () => openModal(park));

    const travelTime = getTravelTime(park);
    const hrs = Math.floor(travelTime / 60);
    const mins = travelTime % 60;
    const timeStr = hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`;

    const seasonalInfo = window.PARKS_SEASONAL?.[park.id]?.[selectedMonth];

    card.innerHTML = `
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
              ${isFavorite ? '❤️' : '🤍'}
            </button>
            <button class="card-action-btn ${isVisited ? 'active-tick' : ''}" 
              onclick="toggleVisited('${park.name}', event)"
              data-tooltip="${isVisited ? 'Unmark as Visited' : 'Mark as Visited'}">
              ${isVisited ? '✅' : '✔️'}
            </button>
            <button class="card-action-btn ${isHidden ? 'active-hide' : ''}" 
              onclick="toggleHidden('${park.name}', event)"
              data-tooltip="${isHidden ? 'Unhide Park' : 'Hide Park'}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="card-score-row">
        <span class="star-badge">
          ${renderStars(park.compositeScore)} <span class="score-num">${park.compositeScore}</span>
        </span>
        <span class="min-days-badge">🗓️ Min ${park.minDays} day${park.minDays>1?'s':''}</span>
      </div>

      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">📅 Best Months</span>
          <span class="info-value small-val">${formatBestMonths(park.bestMonths)}</span>
        </div>
        ${park.avoid && park.avoid.length > 0 ? `
        <div class="info-item">
          <span class="info-label">⚠️ Avoid</span>
          <span class="info-value small-val">${formatMonths(park.avoid)}</span>
        </div>` : ''}
        ${seasonalInfo && seasonalInfo.temp !== 'N/A' ? '<div class="info-item"><span class="info-label">🌡️ Temp in ' + MONTHS[selectedMonth - 1] + '</span><span class="info-value">' + seasonalInfo.temp + '</span></div>' : ''}
        ${selectedMonth && park.topActivity ? `
        <div class="info-item">
          <span class="info-label">🎯 Top Activity</span>
          <span class="info-value">${park.topActivity}</span>
        </div>` : ''}
      </div>

      <div class="card-footer">
        <div class="card-airport-row">
          ${(() => {
            const h = currentHomeHub;
            const d = park.driveTimes?.[h];
            if (d && d <= 360) {
              return `<span class="car">🚗</span> <span class="time-main"><strong>${timeStr}</strong> drive from ${h}</span>`;
            }
            const flight = travelTime - (park.gatewayExtraMinutes || 0);
            const fH = Math.floor(flight / 60); const fM = flight % 60;
            const fStr = fH > 0 ? `${fH}h ${fM}m` : `${fM}m`;
            return `
              <span class="plane">✈️</span>
              <span class="airport-code">${park.gatewayHub}</span>
              <span class="time-main">(${fStr}) + 🚗 ${Math.floor(park.gatewayExtraMinutes/60)}h ${park.gatewayExtraMinutes%60}m &bull; <strong>${timeStr}</strong></span>
            `;
          })()}
        </div>
      </div>
      <div class="card-cta">
        ${('ontouchstart' in window) ? 'Tap to explore ➝' : 'Click for details ➝'}
      </div>
    `;

    parkGrid.appendChild(card);
  });
}

function setSort(mode) {
  sortBy = mode;
  renderParks();
}

// ============ Modal ============
function openModal(park, preventHistory = false) {
  const details = window.PARKS_DETAILS?.[park.id];
  if (!details) return;

  if (!preventHistory) {
    window.history.pushState({ modal: park.id, prevMonth: selectedMonth }, '', `/${park.id}`);
    document.title = `${park.name} National Park | US National Park Finder`;
  }

  document.body.classList.add('modal-open');
  modal.classList.remove('hidden');

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
        <span class="reddit-post-icon">💬</span>
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
        ${isFavorite ? '❤️' : '🤍'}
      </button>
      <button class="modal-icon-btn ${isVisited ? 'active-tick' : ''}" 
        onclick="toggleVisited('${park.name}', event); openModal(window.PARKS_SUMMARY['${park.id}'])"
        data-tooltip="${isVisited ? 'Unmark as Visited' : 'Mark as Visited'}">
        ${isVisited ? '✅' : '✔️'}
      </button>
      <button class="modal-icon-btn ${isHidden ? 'active-hide' : ''}" 
        onclick="toggleHidden('${park.name}', event); openModal(window.PARKS_SUMMARY['${park.id}'])"
        data-tooltip="${isHidden ? 'Unhide Park' : 'Hide Park'}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </button>
    </div>
    <div class="modal-header">
      <div class="modal-title-row">
        <div>
          <h2 class="modal-title">
            ${isFavorite?'⭐ ':''}${park.name} <span class="modal-state-inline">${park.state}</span>
          </h2>
          <div class="modal-subtitle">
            ${(() => {
              const h = currentHomeHub;
              const d = park.driveTimes?.[h];
              if (d && d <= 360) {
                return `<span class="modal-airport-inline">🚗 <strong>${timeStr}</strong> drive from ${h}</span>`;
              }
              const flight = travelTime - (park.gatewayExtraMinutes || 0);
              const fH = Math.floor(flight / 60); const fM = flight % 60;
              const fStr = fH > 0 ? `${fH}h ${fM}m` : `${fM}m`;
              const gH = Math.floor(park.gatewayExtraMinutes/60);
              const gM = park.gatewayExtraMinutes%60;
              const gStr = gH > 0 ? `${gH}h ${gM}m` : `${gM}m`;
              return `<span class="modal-airport-inline">✈️ <strong>${park.gatewayHub}</strong> (${fStr}) + 🚗 ${gStr} &bull; <strong>${timeStr} from ${h}</strong></span>`;
            })()}
            <span class="sep">&bull;</span>
            <span class="modal-min-days">🗓️ Min ${park.minDays} days</span>
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
          <div class="seasonal-best-label">✨ Seasonal Best</div>
          <div class="seasonal-verdict-text">${details.seasonalVerdict.best}</div>
        </div>
        <div class="caution-col">
          <div class="seasonal-caution-label">⚠️ Seasonal Caution</div>
          <div class="seasonal-verdict-text">${details.seasonalVerdict.avoid}</div>
        </div>
      </div>
    </div>` : ''}

    <div class="modal-section"><h3 class="modal-section-title">✨ Top Activities</h3><div class="activities-list">${activitiesHtml}</div></div>

    ${seasonalInfo && selectedMonth ? `
    <div class="monthly-banner">
      <div class="monthly-banner-header">📅 Visiting in ${MONTH_FULL[selectedMonth-1]}</div>
      <div class="monthly-metrics">
        <div class="monthly-metric">
          <span class="label">Average Temp</span>
          <span class="value">${seasonalInfo.temp}</span>
        </div>
        <div class="monthly-metric" style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 20px;">
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
      <h3 class="modal-section-title">🌅 Sun & Stars</h3>
      <div style="color:var(--text-dim);font-size:0.9rem;margin-bottom:12px;line-height:1.5;">${details.sunriseSunset}</div>
      ${details.stargazing ? `
      <div class="stargazing-card">
        <div class="stargazing-icon">🔭</div>
        <div class="stargazing-info">
          <h4>Stargazing: ${details.stargazing.isFriendly?'Highly Recommended':'Limited'}</h4>
          <p><strong>Best Spots:</strong> ${details.stargazing.spots}</p>
          <p>${details.stargazing.description}</p>
        </div>
      </div>` : ''}
    </div>

    ${funFactsHtml?`<div class="modal-section"><h3 class="modal-section-title">💡 Fun Facts</h3><div class="fun-facts-list">${funFactsHtml}</div></div>`:''}
    ${hacksHtml?`<div class="modal-section"><h3 class="modal-section-title">🎒 Travel Hacks</h3><div class="hacks-list">${hacksHtml}</div></div>`:''}
    ${(dosHtml||dontsHtml)?`<div class="modal-section"><h3 class="modal-section-title">✅ Dos & Don'ts</h3><div class="dos-donts-grid"><div class="dos-col"><h4>✓ Do</h4><div class="dos-list">${dosHtml}</div></div><div class="donts-col"><h4>× Don't</h4><div class="donts-list">${dontsHtml}</div></div></div></div>`:''}
    <div class="modal-section"><h3 class="modal-section-title">🗺️ Sample Itinerary</h3><div style="margin-top:16px;">${itineraryHtml}</div></div>

    ${redditPostsHtml ? `
    <div class="modal-section">
      <h3 class="modal-section-title">💬 Reddit Community Advice</h3>
      <div class="reddit-posts-list">${redditPostsHtml}</div>
    </div>` : ''}

    <div class="modal-section modal-links-section" style="margin-bottom:0; border-bottom:none;">
      <h3 class="modal-section-title">🔗 Resources</h3>${linksHtml}
    </div>
  `;
}

function closeModal(preventHistory = false) {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  
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
}

function closeFeatureModal() {
  if (!featureModal) return;
  featureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

if (featureRequestBtn) {
  featureRequestBtn.addEventListener('click', openFeatureModal);
}

if (featureModalCloseBtn) {
  featureModalCloseBtn.addEventListener('click', closeFeatureModal);
}

if (featureModalBackdrop) {
  featureModalBackdrop.addEventListener('click', closeFeatureModal);
}

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape' && featureModal && !featureModal.classList.contains('hidden')) {
    closeFeatureModal(); 
  }
});
