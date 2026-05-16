import { motion } from "motion/react";
import { Heart, MapPin, EyeOff, Plane, Star, Compass, Tent, Eye } from "lucide-react";
import { Button } from "./ui/button";
import type { Park } from "../data/parks";

interface ParkCardProps {
  park: Park;
  selectedHub: string;
  isFavorite: boolean;
  isVisited: boolean;
  onToggleFavorite: (parkName: string) => void;
  onToggleVisited: (parkName: string) => void;
  onToggleHidden: (parkName: string) => void;
  onClick: () => void;
}

export function ParkCard({
  park,
  selectedHub,
  isFavorite,
  isVisited,
  onToggleFavorite,
  onToggleVisited,
  onToggleHidden,
  onClick,
}: ParkCardProps) {
  const flightTime = park.flightTime[selectedHub as keyof typeof park.flightTime];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container with Organic Overlay */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={park.image}
          alt={park.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        />
        
        {/* Gradient Overlay with Organic Shape */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />
        
        {/* Composite Score Badge */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
            {park.compositeScore}
          </span>
        </div>

        {/* Quick Action Buttons */}
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(park.name);
            }}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current text-red-500" : ""}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              onToggleVisited(park.name);
            }}
          >
            <MapPin className={`w-4 h-4 ${isVisited ? "fill-current text-blue-500" : ""}`} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shadow-lg backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              onToggleHidden(park.name);
            }}
          >
            <EyeOff className="w-4 h-4" />
          </Button>
        </div>

        {/* Park Name & State */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3
            className="text-3xl text-white mb-1"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {park.name}
          </h3>
          <p className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
            {park.state}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground line-clamp-2" style={{ fontFamily: 'var(--font-sans)' }}>
          {park.description}
        </p>

        {/* Logistics Row */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Plane className="w-4 h-4" />
            <span style={{ fontFamily: 'var(--font-sans)' }}>
              {flightTime}h from {selectedHub}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Compass className="w-4 h-4" />
            <span style={{ fontFamily: 'var(--font-sans)' }}>
              {park.temperature.min}°-{park.temperature.max}°F
            </span>
          </div>
        </div>

        {/* Features Icons */}
        <div className="flex gap-3 pt-2 border-t border-border">
          {park.features.stargazing && (
            <div className="flex items-center gap-1.5 text-primary">
              <Star className="w-4 h-4" />
              <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Stargazing</span>
            </div>
          )}
          {park.features.hiking && (
            <div className="flex items-center gap-1.5 text-primary">
              <Compass className="w-4 h-4" />
              <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Hiking</span>
            </div>
          )}
          {park.features.camping && (
            <div className="flex items-center gap-1.5 text-primary">
              <Tent className="w-4 h-4" />
              <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Camping</span>
            </div>
          )}
          {park.features.wildlife && (
            <div className="flex items-center gap-1.5 text-primary">
              <Eye className="w-4 h-4" />
              <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Wildlife</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
