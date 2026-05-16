import { motion } from "motion/react";
import { Heart, MapPin } from "lucide-react";
import { MONTHS } from "../data/parks";

interface MonthBarProps {
  selectedMonth: number | null;
  onMonthSelect: (month: number | null) => void;
  activeFilter: "all" | "favorites" | "visited";
  onFilterChange: (filter: "all" | "favorites" | "visited") => void;
  favoritesCount: number;
  visitedCount: number;
}

export function MonthBar({
  selectedMonth,
  onMonthSelect,
  activeFilter,
  onFilterChange,
  favoritesCount,
  visitedCount,
}: MonthBarProps) {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 px-4 py-4 min-w-max">
        {/* Special Filters */}
        <button
          onClick={() => {
            onMonthSelect(null);
            onFilterChange("all");
          }}
          className={`px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
            activeFilter === "all" && selectedMonth === null
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-muted/50 text-foreground hover:bg-muted"
          }`}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          All Parks
        </button>

        <button
          onClick={() => {
            onMonthSelect(null);
            onFilterChange("favorites");
          }}
          className={`px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
            activeFilter === "favorites"
              ? "bg-accent text-accent-foreground shadow-lg"
              : "bg-muted/50 text-foreground hover:bg-muted"
          }`}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <Heart className="w-4 h-4" />
          Favorites {favoritesCount > 0 && `(${favoritesCount})`}
        </button>

        <button
          onClick={() => {
            onMonthSelect(null);
            onFilterChange("visited");
          }}
          className={`px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
            activeFilter === "visited"
              ? "bg-secondary text-secondary-foreground shadow-lg"
              : "bg-muted/50 text-foreground hover:bg-muted"
          }`}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <MapPin className="w-4 h-4" />
          Visited {visitedCount > 0 && `(${visitedCount})`}
        </button>

        <div className="w-px bg-border mx-2" />

        {/* Month Chips */}
        {MONTHS.map((month, index) => (
          <motion.button
            key={month}
            onClick={() => {
              onMonthSelect(selectedMonth === index ? null : index);
              onFilterChange("all");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap ${
              selectedMonth === index
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted/50 text-foreground hover:bg-muted"
            }`}
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {month}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
