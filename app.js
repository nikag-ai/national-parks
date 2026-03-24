// ============ Initialization ============
const PARKS = window.PARKS_DATA || [];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTH_FULL = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// ============ Composite Score ============
function calculateCompositeScore(park) {
  const score = (park.popularity * 0.4) + (park.uniqueness * 0.4) + (park.sfoAccessibility * 0.2);
  return Math.max(Math.min((score / 100) * 5, 5), 1);
}
PARKS.forEach(p => { p.compositeScore = parseFloat(calculateCompositeScore(p).toFixed(1)); });

// ============ State ============
let selectedMonth    = null;
let viewMode         = 'all';   // 'all' | 'favorites' | 'visited'
let sortBy           = 'score'; // 'score' | 'flight' | 'days'
let visitedParks     = new Set(JSON.parse(localStorage.getItem('visitedParks')   || '[]'));
let favoritedParks   = new Set(JSON.parse(localStorage.getItem('favoritedParks') || '[]'));
let hiddenParks      = new Set(JSON.parse(localStorage.getItem('hiddenParks')    || '[]'));

// ============ Filters ============
let showFilterPanel = false;
let filterBounds = { minDuration: 0, maxDuration: 1000, minDays: 1, maxDays: 14 };
let filterState = JSON.parse(localStorage.getItem('filterState')) || {
  maxDuration: null,
  minDays: null,
  maxDays: null,
  minRating: 0, // 0, 3, 4
  flights: [], // 'no-flight', 'direct', '1-stop', '2-stops'
  stargazing: false
};

function saveFilterState() { localStorage.setItem('filterState', JSON.stringify(filterState)); }

let showVisited      = localStorage.getItem('showVisited') !== 'false';

// ============ DOM ============
const chipContainer = document.querySelector('.month-chips');
const parkGrid      = document.getElementById('park-grid');
const emptyState    = document.getElementById('empty-state');
const statsBar      = document.getElementById('stats-bar');
const modal         = document.getElementById('park-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBody     = document.getElementById('modal-body');
const filterPanel   = document.getElementById('filter-panel');
const visitedToggle = document.getElementById('visited-toggle');
const toggleWrap    = document.querySelector('.visited-toggle-wrap');

// ============ Persistence ============
function saveVisited()   { localStorage.setItem('visitedParks',   JSON.stringify([...visitedParks])); }
function saveFavorites() { localStorage.setItem('favoritedParks', JSON.stringify([...favoritedParks])); }
function saveHidden()    { localStorage.setItem('hiddenParks',    JSON.stringify([...hiddenParks])); }

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
  if (visitedToggle) {
    visitedToggle.checked = showVisited;
    visitedToggle.addEventListener('change', () => { 
      showVisited = visitedToggle.checked; 
      localStorage.setItem('showVisited', showVisited);
      renderParks(); 
    });
  }
  
  // Default to "All Parks" on load
  viewMode = 'all';
  selectedMonth = null;
  document.getElementById('chip-all')?.classList.add('active');
  renderParks();
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
  
  // Show/hide visited toggle
  if (toggleWrap) toggleWrap.style.display = (viewMode === 'visited') ? 'none' : '';
  renderParks();
}

function selectMonth(month) {
  viewMode = 'all';
  selectedMonth = selectedMonth === month ? null : month;
  // Clear ALL chips first, then activate the right one by ID (avoids index offset from special chips)
  document.querySelectorAll('.month-chip').forEach(c => c.classList.remove('active'));
  
  if (selectedMonth) {
    document.getElementById(`chip-${selectedMonth}`)?.classList.add('active');
  } else {
    document.getElementById('chip-all')?.classList.add('active');
  }
  
  if (toggleWrap) toggleWrap.style.display = '';
  renderParks();
}

// ============ Formatting Helpers ============
function formatBestMonths(months) {
  if (!months || months.length === 0) return "";
  if (months.length === 12) return "Year-round";
  const ranges = [];
  let start = months[0], prev = months[0];
  for (let i = 1; i < months.length; i++) {
    if (months[i] === prev + 1) { prev = months[i]; }
    else { ranges.push([start, prev]); start = months[i]; prev = months[i]; }
  }
  ranges.push([start, prev]);
  return ranges.map(([s,e]) => s===e ? MONTHS[s-1] : `${MONTHS[s-1]}–${MONTHS[e-1]}`).join(', ');
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
      return (a.flightMinutes || 999) - (b.flightMinutes || 999);
    } else if (sortBy === 'days') {
      return (a.minDays || 99) - (b.minDays || 99);
    } else if (sortBy === 'stargazing') {
      const aStar = a.stargazing && a.stargazing.isFriendly ? 1 : 0;
      const bStar = b.stargazing && b.stargazing.isFriendly ? 1 : 0;
      if (bStar !== aStar) return bStar - aStar;
      return b.compositeScore - a.compositeScore; // secondary sort
    }
    // default: score
    return b.compositeScore - a.compositeScore;
  });
}


// ============ Filter Logic ============
function toggleFilterPanel() {
  showFilterPanel = !showFilterPanel;
  if (!showFilterPanel) filterPanel.classList.add('hidden');
  else renderFilterUI();
}

function updateFilterBounds(baseParks) {
  if (!baseParks.length) return;
  filterBounds.minDuration = Math.min(...baseParks.map(p => p.flightMinutes || 0));
  filterBounds.maxDuration = Math.max(...baseParks.map(p => p.flightMinutes || 0));
  filterBounds.minDays = Math.min(...baseParks.map(p => p.minDays || 1));
  filterBounds.maxDays = Math.max(...baseParks.map(p => p.minDays || 1));
  
  // Clean up state if out of bounds from previous
  if (filterState.maxDuration === null || filterState.maxDuration > filterBounds.maxDuration) filterState.maxDuration = filterBounds.maxDuration;
  if (filterState.minDays === null || filterState.minDays < filterBounds.minDays) filterState.minDays = filterBounds.minDays;
  if (filterState.maxDays === null || filterState.maxDays > filterBounds.maxDays) filterState.maxDays = filterBounds.maxDays;
}

function getFlightType(park) {
  if (!park.flight || park.flight.toLowerCase().includes('drive') || park.flight.toLowerCase().includes('ferry') || park.flight.toLowerCase().includes('boat')) return 'no-flight';
  const f = park.flight.toLowerCase();
  if (f.includes('direct')) return 'direct';
  if (f.includes('1 stop')) return '1-stop';
  return '2-stops';
}

function applyFilters(baseParks) {
  return baseParks.filter(p => {
    // Duration
    if (filterState.maxDuration !== null && (p.flightMinutes || 0) > filterState.maxDuration) return false;
    // Days Range (Min required)
    if (filterState.minDays !== null && (p.minDays || 1) < filterState.minDays) return false;
    // Rating
    if (filterState.minRating > 0 && p.compositeScore < filterState.minRating) return false;
    // Stargazing
    if (filterState.stargazing && !(p.stargazing && p.stargazing.isFriendly)) return false;
    // Flight Types
    if (filterState.flights.length > 0) {
      const type = getFlightType(p);
      if (!filterState.flights.includes(type)) return false;
    }
    return true;
  });
}

function resetFilters() {
  filterState = { maxDuration: filterBounds.maxDuration, minDays: filterBounds.minDays, maxDays: filterBounds.maxDays, minRating: 0, flights: [], stargazing: false };
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
      <button class="clear-filters-btn" onclick="resetFilters()">Clear Filters</button>
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
      </div>

    </div>
  `;
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
    modeLabel = `${parks.length} Parks Displayed ${hiddenCount > 0 ? '<span style="font-size:0.8rem;color:var(--text-dim);font-weight:400;">(' + hiddenCount + ' hidden by Visited toggle)</span>' : ''}`;
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

// --- APPLY FILTERS ---
  const rawCount = parks.length;
  updateFilterBounds(parks);
  parks = applyFilters(parks);
  renderFilterUI();
  
  if (parks.length !== rawCount) {
    modeLabel = `Showing ${parks.length} of ${rawCount} parks (Filtered)`;
  }
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
    card.style.animationDelay = `${idx * 0.04}s`;
    card.addEventListener('click', () => openModal(park));

    const monthData = selectedMonth && park.monthlyData[selectedMonth]
      ? park.monthlyData[selectedMonth]
      : null;

    const ap = parseAirport(park.airport);

    card.innerHTML = `
      <div class="card-header">
        <div class="card-title-col">
          <div class="park-name">
            ${isFavorite ? '<span class="fav-star-inline">⭐</span>' : ''}${park.name}
          </div>
          <div class="park-meta-row">
            <span class="park-state">${park.state}</span>
            ${isVisited  ? '<span class="visited-badge">✓ Visited</span>'   : ''}
          </div>
        </div>
        <div class="card-right-col">
          <div class="overflow-wrap" onclick="event.stopPropagation()">
            <button class="overflow-btn" title="More options"
              onclick="this.nextElementSibling.classList.toggle('open')">⋯</button>
            <div class="overflow-menu">
              <button class="overflow-item ${isVisited  ? 'active-item'   :''}"
                onclick="toggleVisited('${park.name}', event)">
                ${isVisited ? '✓ Mark Unvisited' : '+ Mark Visited'}
              </button>
              <button class="overflow-item ${isFavorite ? 'active-item fav-active' :''}"
                onclick="toggleFavorite('${park.name}', event)">
                ${isFavorite ? '⭐ Unfavorite' : '☆ Add to Favorites'}
              </button>
              <div class="menu-divider" style="height:1px;background:var(--border);margin:4px 0;"></div>
              <button class="overflow-item" style="color: #ef4444;"
                onclick="toggleHidden('${park.name}', event)">
                ${isHidden ? '👁️ Unhide Park' : '🙈 Hide Park'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card-score-row">
        <span class="star-badge" title="Score: ${park.compositeScore}/5">
          ${renderStars(park.compositeScore)} <span class="score-num">${park.compositeScore}</span>
        </span>
        <span class="min-days-badge">🗓️ Min ${park.minDays} day${park.minDays>1?'s':''}</span>
      </div>

      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">📅 Best Months</span>
          <span class="info-value small-val">${formatBestMonths(park.bestMonths)}</span>
        </div>
        ${monthData ? '<div class="info-item"><span class="info-label">🌡️ Temp in ' + MONTHS[selectedMonth - 1] + '</span><span class="info-value">' + monthData.temp + '</span></div>' : ''}
        <div class="info-item" ${monthData ? 'style="grid-column: span 2;"' : ''}>
          <span class="info-label">⛔ Avoid</span>
          <span class="info-value small-val">${park.avoid && park.avoid.length ? formatBestMonths(park.avoid.map(Number)) : 'None'}</span>
        </div>
      </div>

      <div class="card-footer">
        <div class="card-airport-row">
          <span class="plane">✈️</span>
          <span class="airport-code">${ap.code}</span>
          ${ap.detail ? `<span class="airport-detail">${ap.detail}</span>` : ''}
          ${park.flight ? `<span class="flight-time-inline">&bull; 🕒 ${park.flight}</span>` : ''}
        </div>
        ${monthData && park.transport ? `<div class="transport-tag">🚌 ${park.transport}</div>` : ''}
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
function openModal(park) {
  document.body.classList.add('modal-open');
  modal.classList.remove('hidden');

  const isVisited  = visitedParks.has(park.name);
  const isFavorite = favoritedParks.has(park.name);
  const isHidden   = hiddenParks.has(park.name);
  const starStr    = renderStars(park.compositeScore);
  const scorePct   = (park.compositeScore / 5) * 100;

  // Buttons in modal header
  const btnsHtml = `
    <button class="modal-action-btn ${isFavorite ? 'fav-active' : ''}" onclick="toggleFavorite('${park.name}')">
      ${isFavorite ? '⭐ Unfavorite' : '☆ Favorite'}
    </button>
    <button class="modal-action-btn ${isVisited ? 'visited-active' : ''}" onclick="toggleVisited('${park.name}')">
      ${isVisited ? '✓ Visited' : 'Mark Visited'}
    </button>
    <button class="modal-action-btn ${isHidden ? 'hidden-active' : ''}" onclick="toggleHidden('${park.name}')" style="color:#ef4444;border-color:rgba(239,68,68,0.3);">
      ${isHidden ? '👁️ Unhide' : '🙈 Hide'}
    </button>
  `;
  const activitiesHtml  = park.topActivities.map(a => `<span class="activity-tag">${a}</span>`).join('');
  const itineraryHtml   = park.itinerary.map(i => `<div class="itinerary-step"><strong>${i.day}</strong><p>${i.plan}</p></div>`).join('');
  const hacksHtml       = (park.travelHacks||[]).map(h => `<div class="hack-item">${h}</div>`).join('');
  const dos             = (park.dosAndDonts||[]).filter(i => i.type==="do");
  const donts           = (park.dosAndDonts||[]).filter(i => i.type==="dont");
  const dosHtml         = dos.map(d => `<div class="do-item">${d.text}</div>`).join('');
  const dontsHtml       = donts.map(d => `<div class="dont-item">${d.text}</div>`).join('');
  const funFactsHtml    = (park.funFacts||[]).map(f => `<div class="fun-fact-item">${f}</div>`).join('');

  const monthData    = selectedMonth && park.monthlyData[selectedMonth] ? park.monthlyData[selectedMonth] : null;
  const monthNameFn  = selectedMonth ? MONTH_FULL[selectedMonth - 1] : null;

  const links = park.links || {};
  const linksHtml = `<div class="resource-links">
    ${links.nps          ? `<a href="${links.nps}"          target="_blank" class="resource-link resource-link-nps">🏛️ NPS Official</a>` : ''}
    ${links.lodging      ? `<a href="${links.lodging}"      target="_blank" class="resource-link resource-link-lodging">🛏️ Lodging</a>` : ''}
    ${links.dining       ? `<a href="${links.dining}"       target="_blank" class="resource-link resource-link-dining">🍽️ Dining</a>` : ''}
    ${links.activities   ? `<a href="${links.activities}"   target="_blank" class="resource-link resource-link-activities">🧗 Activities</a>` : ''}
    ${links.roadConditions ? `<a href="${links.roadConditions}" target="_blank" class="resource-link resource-link-road">🚧 Road Conditions</a>` : ''}
  </div>`;

  const ap = parseAirport(park.airport);

  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-title-row">
        <div>
          <h2 class="modal-title">${isFavorite?'⭐ ':''}${park.name} NP ${isVisited?'<span class="modal-visited-tag">✓ Visited</span>':''}</h2>
          <p class="modal-subtitle">${park.state} &bull; ✈️ <strong>${ap.code}</strong> ${ap.detail} &bull; 🗓️ Min ${park.minDays} days</p>
          ${park.flight ? `<p class="modal-flight">${park.flight}</p>` : ''}
        </div>
        <div class="modal-header-right">
          <div class="modal-rating-detail">
            <div style="color:var(--amber);font-size:1.4rem;font-weight:700;">${starStr} <span style="font-size:1rem;color:var(--text);">${park.compositeScore}</span></div>
            <div class="composite-score">Pop: ${park.popularity} | Unique: ${park.uniqueness} | SFO: ${park.sfoAccessibility}</div>
            <div class="score-bar-bg"><div class="score-bar-fill" style="width:${scorePct}%"></div></div>
          </div>
          <div class="modal-action-btns">
            <button class="modal-action-btn ${isVisited?'visited-on':''}"
              onclick="toggleVisited('${park.name}',event);openModal(window.PARKS_DATA.find(p=>p.name==='${park.name}'))">
              ${isVisited?'✓ Visited':'+ Mark Visited'}
            </button>
            <button class="modal-action-btn ${isFavorite?'fav-on':''}"
              onclick="toggleFavorite('${park.name}',event);openModal(window.PARKS_DATA.find(p=>p.name==='${park.name}'))">
              ${isFavorite?'⭐ Favorited':'☆ Favorite'}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Resource Links -->
    <div class="modal-section modal-links-section">
      <h3 class="modal-section-title">🔗 Resources</h3>${linksHtml}
    </div>

    <!-- Monthly Banner (only if month selected) -->
    ${monthData ? `
    <div class="monthly-banner">
      <div class="monthly-banner-header">📅 Visiting in ${monthNameFn}</div>
      <div class="monthly-metrics">
        <div class="monthly-metric" style="flex:1;min-width:150px;"><span class="label">Average Temp</span><span class="value">${monthData.temp}</span></div>
        <div class="monthly-metric" style="flex:2;min-width:250px;"><span class="label">Reservations & Permits</span><span class="value">${monthData.reservations}</span></div>
      </div>
      <div class="reddit-sentiment" style="margin-top:12px;">
        <div class="reddit-sentiment-header"><svg width="16" height="16" viewBox="0 0 20 20" fill="#ff4500"><circle cx="10" cy="10" r="10"/><ellipse cx="10" cy="9" rx="5" ry="3.5" fill="#fff" opacity=".15"/><circle cx="7" cy="9" r="1" fill="#fff"/><circle cx="13" cy="9" r="1" fill="#fff"/><path d="M7 12.5c.8.8 5.2.8 6 0" stroke="#fff" stroke-width="1" fill="none" stroke-linecap="round"/></svg> r/NationalParks on ${monthNameFn} at ${park.name}</div>
        <blockquote>"${monthData.reddit}"</blockquote>
      </div>
    </div>` : ''}

    <!-- Sun & Stars -->
    <div class="modal-section">
      <h3 class="modal-section-title">🌅 Sun & Stars</h3>
      <div style="color:var(--text-dim);font-size:0.9rem;margin-bottom:12px;line-height:1.5;">${park.sunriseSunset}</div>
      <div class="stargazing-card">
        <div class="stargazing-icon">🔭</div>
        <div class="stargazing-info">
          <h4>Stargazing: ${park.stargazing.isFriendly?'Highly Recommended':'Limited'}</h4>
          <p><strong>Best Spots:</strong> ${park.stargazing.spots}</p>
          <p>${park.stargazing.description}</p>
        </div>
      </div>
    </div>

    <!-- Fun Facts -->
    ${funFactsHtml?`<div class="modal-section"><h3 class="modal-section-title">💡 Fun Facts</h3><div class="fun-facts-list">${funFactsHtml}</div></div>`:''}

    <!-- Travel Hacks -->
    ${hacksHtml?`<div class="modal-section"><h3 class="modal-section-title">🎒 Travel Hacks</h3><div class="hacks-list">${hacksHtml}</div></div>`:''}

    <!-- Dos & Donts -->
    ${(dosHtml||dontsHtml)?`<div class="modal-section"><h3 class="modal-section-title">✅ Dos & Don'ts</h3><div class="dos-donts-grid"><div class="dos-col"><h4>✓ Do</h4><div class="dos-list">${dosHtml}</div></div><div class="donts-col"><h4>× Don't</h4><div class="donts-list">${dontsHtml}</div></div></div></div>`:''}

    <!-- Top Activities -->
    <div class="modal-section"><h3 class="modal-section-title">✨ Top Activities</h3><div class="activities-list">${activitiesHtml}</div></div>

    <!-- Itinerary -->
    <div class="modal-section"><h3 class="modal-section-title">🗺️ Sample Itinerary (${park.days})</h3><div style="margin-top:16px;">${itineraryHtml}</div></div>

    <!-- Reddit Posts -->
    ${park.redditPosts&&park.redditPosts.length?`
    <div class="modal-section" style="margin-bottom:0;">
      <h3 class="modal-section-title"><svg width="18" height="18" viewBox="0 0 20 20" fill="#ff4500"><circle cx="10" cy="10" r="10"/><ellipse cx="10" cy="9" rx="5" ry="3.5" fill="#fff" opacity=".15"/><circle cx="7" cy="9" r="1" fill="#fff"/><circle cx="13" cy="9" r="1" fill="#fff"/><path d="M7 12.5c.8.8 5.2.8 6 0" stroke="#fff" stroke-width="1" fill="none" stroke-linecap="round"/></svg> Top Reddit Discussions</h3>
      <div class="reddit-posts-list">
        ${park.redditPosts.map(post=>`
        <a href="${post.url}" target="_blank" rel="noopener" class="reddit-post-card">
          <div class="reddit-post-top"><span class="reddit-post-sub">${post.sub}</span><svg class="reddit-post-external" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>
          <div class="reddit-post-title">${post.title}</div>
          <blockquote class="reddit-post-quote">"${post.quote}"</blockquote>
        </a>`).join('')}
      </div>
    </div>`:''}
  `;
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target===modal||e.target.classList.contains('modal-backdrop')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key==='Escape'&&!modal.classList.contains('hidden')) closeModal(); });

init();
