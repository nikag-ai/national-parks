import { motion } from "motion/react";
import { Heart, MapPin, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import type { Park } from "../data/parks";

interface ParkCardProps {
  park: Park;
  isFavorite: boolean;
  isVisited: boolean;
  onToggleFavorite: (parkName: string) => void;
  onToggleVisited: (parkName: string) => void;
  onToggleHidden: (parkName: string) => void;
  onClick: () => void;
}

export function ParkCard({
  park,
  isFavorite,
  isVisited,
  onToggleFavorite,
  onToggleVisited,
  onToggleHidden,
  onClick,
}: ParkCardProps) {

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
        
        {/* Quick Action Buttons */}
        <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            aria-label="Toggle favorite"
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
            aria-label="Toggle visited"
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
            aria-label="Hide park"
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

        <p className="text-sm text-muted-foreground">{park.minDays} day{park.minDays === 1 ? "" : "s"} suggested, excluding travel (editorial)</p>
        <div className="flex flex-wrap gap-2">{park.activities.map(a => <span key={a} className="text-xs bg-muted rounded-full px-3 py-1">{a}</span>)}</div>
      </div>
    </motion.div>
  );
}
