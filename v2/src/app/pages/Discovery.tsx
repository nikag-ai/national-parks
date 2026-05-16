import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { parks, MONTHS, HUBS } from "../data/parks";
import { MonthBar } from "../components/MonthBar";
import { SearchBar } from "../components/SearchBar";
import { ParkCard } from "../components/ParkCard";
import { FilterPanel } from "../components/FilterPanel";
import { ParkDetailModal } from "../components/ParkDetailModal";
import { Hero } from "../components/Hero";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Park } from "../data/parks";

export function Discovery() {
  const { month } = useParams();
  const navigate = useNavigate();
  
  const initialMonth = useMemo(() => {
    if (!month) return null;
    const cleanMonth = month.replace(".html", "");
    const index = MONTHS.findIndex(m => m.toLowerCase() === cleanMonth.toLowerCase());
    return index !== -1 ? index : null;
  }, [month]);

  const [selectedMonth, setSelectedMonth] = useState<number | null>(initialMonth);
  
  // Sync URL when month changes via UI
  const handleMonthSelect = (index: number | null) => {
    setSelectedMonth(index);
    if (index === null) {
      navigate("/");
    } else {
      navigate(`/${MONTHS[index].toLowerCase()}`);
    }
  };

  // Sync state when URL changes (e.g. back button)
  useEffect(() => {
    setSelectedMonth(initialMonth);
  }, [initialMonth]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHub, setSelectedHub] = useLocalStorage("homeHub", "SFO");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempRange, setTempRange] = useState([30, 100]);
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);
  const [favorites, setFavorites] = useLocalStorage<Set<string>>("favoritedParks", new Set());
  const [visited, setVisited] = useLocalStorage<Set<string>>("visitedParks", new Set());
  const [hidden, setHidden] = useLocalStorage<Set<string>>("hiddenParks", new Set());
  const [activeFilter, setActiveFilter] = useState<"all" | "favorites" | "visited">("all");

  // Update metadata for SEO and Browser History
  useEffect(() => {
    if (selectedMonth !== null) {
      const monthName = MONTHS[selectedMonth];
      document.title = `Best National Parks to Visit in ${monthName} | National Park Finder`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Discover the best US National Parks to explore in ${monthName}. High-resolution itineraries, weather data, and travel logistics for the perfect ${monthName} getaway.`);
      }
    } else {
      document.title = "US National Park Finder | Explore by Month";
    }
  }, [selectedMonth]);

  const filteredParks = useMemo(() => {
    let filtered = parks.filter(park => !hidden.has(park.name));

    // Apply active filter
    if (activeFilter === "favorites") {
      filtered = filtered.filter(park => favorites.has(park.name));
    } else if (activeFilter === "visited") {
      filtered = filtered.filter(park => visited.has(park.name));
    }

    // Apply month filter
    if (selectedMonth !== null) {
      filtered = filtered.filter(park => park.bestMonths.includes(selectedMonth));
    }

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        park =>
          park.name.toLowerCase().includes(query) ||
          park.state.toLowerCase().includes(query)
      );
    }

    // Apply temperature filter
    filtered = filtered.filter(
      park =>
        park.temperature.max >= tempRange[0] &&
        park.temperature.min <= tempRange[1]
    );

    // Sort by composite score
    return filtered.sort((a, b) => b.compositeScore - a.compositeScore);
  }, [selectedMonth, searchQuery, tempRange, favorites, visited, hidden, activeFilter]);

  const toggleFavorite = (parkName: string) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(parkName)) {
        newSet.delete(parkName);
      } else {
        newSet.add(parkName);
      }
      return newSet;
    });
  };

  const toggleVisited = (parkName: string) => {
    setVisited(prev => {
      const newSet = new Set(prev);
      if (newSet.has(parkName)) {
        newSet.delete(parkName);
      } else {
        newSet.add(parkName);
      }
      return newSet;
    });
  };

  const toggleHidden = (parkName: string) => {
    setHidden(prev => {
      const newSet = new Set(prev);
      if (newSet.has(parkName)) {
        newSet.delete(parkName);
      } else {
        newSet.add(parkName);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
        <MonthBar
          selectedMonth={selectedMonth}
          onMonthSelect={handleMonthSelect}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          favoritesCount={favorites.size}
          visitedCount={visited.size}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedHub={selectedHub}
          onHubChange={setSelectedHub}
          onFilterClick={() => setIsFilterOpen(true)}
        />

        <div className="mt-12">
          <div className="flex items-baseline justify-between mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 
                className="text-4xl md:text-5xl tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {activeFilter === "favorites"
                  ? "Your Favorites"
                  : activeFilter === "visited"
                  ? "Places You've Been"
                  : selectedMonth !== null
                  ? `Perfect for ${MONTHS[selectedMonth]}`
                  : "Discover Your Next Adventure"}
              </h2>
              <p className="text-muted-foreground mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
                {filteredParks.length} {filteredParks.length === 1 ? "park" : "parks"} match your criteria
              </p>
            </motion.div>
          </div>

          {/* Organic Grid Layout */}
          <motion.div 
            className="grid gap-6 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredParks.map((park, index) => (
                <motion.div
                  key={park.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      delay: index * 0.05,
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1]
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.9,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ParkCard
                    park={park}
                    selectedHub={selectedHub}
                    isFavorite={favorites.has(park.name)}
                    isVisited={visited.has(park.name)}
                    onToggleFavorite={toggleFavorite}
                    onToggleVisited={toggleVisited}
                    onToggleHidden={toggleHidden}
                    onClick={() => setSelectedPark(park)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredParks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg" style={{ fontFamily: 'var(--font-sans)' }}>
                No parks match your filters. Try adjusting your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        tempRange={tempRange}
        onTempRangeChange={setTempRange}
      />

      <ParkDetailModal
        park={selectedPark}
        onClose={() => setSelectedPark(null)}
        selectedHub={selectedHub}
        isFavorite={selectedPark ? favorites.has(selectedPark.name) : false}
        isVisited={selectedPark ? visited.has(selectedPark.name) : false}
        onToggleFavorite={() => selectedPark && toggleFavorite(selectedPark.name)}
        onToggleVisited={() => selectedPark && toggleVisited(selectedPark.name)}
      />
    </div>
  );
}
