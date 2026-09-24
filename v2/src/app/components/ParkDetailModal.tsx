import { X, Heart, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import type { Park } from "../data/parks";
import { MONTHS } from "../data/parks";

interface ParkDetailModalProps {
  park: Park | null;
  onClose: () => void;
  isFavorite: boolean;
  isVisited: boolean;
  onToggleFavorite: () => void;
  onToggleVisited: () => void;
}

export function ParkDetailModal({
  park,
  onClose,
  isFavorite,
  isVisited,
  onToggleFavorite,
  onToggleVisited,
}: ParkDetailModalProps) {
  if (!park) return null;


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-foreground/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-background rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Image Section */}
          <div className="relative h-[40vh] overflow-hidden">
            <img
              src={park.image}
              alt={park.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

            {/* Close Button */}
            <Button
              variant="secondary"
              size="icon"
              aria-label="Close park details"
              onClick={onClose}
              className="absolute top-6 right-6 rounded-full shadow-lg backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Quick Actions */}
            <div className="absolute top-6 left-6 flex gap-3">
              <Button
                variant="secondary"
                size="icon"
                aria-label="Toggle favorite"
                onClick={onToggleFavorite}
                className="rounded-full shadow-lg backdrop-blur-sm"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-current text-red-500" : ""}`} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                aria-label="Toggle visited"
                onClick={onToggleVisited}
                className="rounded-full shadow-lg backdrop-blur-sm"
              >
                <MapPin className={`w-5 h-5 ${isVisited ? "fill-current text-blue-500" : ""}`} />
              </Button>
            </div>

            {/* Title Section */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h1
                    className="text-5xl md:text-6xl text-foreground mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {park.name}
                  </h1>
                  <p className="text-xl text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    {park.state}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="overflow-y-auto max-h-[50vh] p-8">
            <p className="text-sm text-muted-foreground mb-6">Planning notes checked {park.reviewedAt} against the NPS sources below. Rules and conditions can change.</p>
            <p className="text-lg mb-6">{park.description}</p>
            <h2 className="text-xl mb-3">Plan before you go</h2>
            <p className="mb-4">{park.planningNote}</p>
            {park.permitNote && <p className="mb-4">{park.permitNote}</p>}
            <h2 className="text-xl mb-3">Activities to explore</h2>
            <ul className="mb-6 list-disc pl-6">{park.activities.map(a => <li key={a}>{a}</li>)}</ul>
            <h2 className="text-xl mb-3">When to consider visiting</h2>
            <p className="mb-4">{park.weatherNote}</p>
            <p>{park.bestMonths.map(m => MONTHS[m]).join(', ')}</p>
            <p className="mb-4 text-muted-foreground">{park.suggestionBasis}</p>
            <p className="mb-6">{park.minDays} day{park.minDays === 1 ? "" : "s"} suggested in the park (editorial). Shorter visits are possible.</p>
            <h2 className="text-xl mb-3">After dark</h2>
            <p className="mb-6">{park.nightSkyNote}</p>
            <h2 className="text-xl mb-3">Sources &amp; current planning</h2>
            <ul className="mb-6 space-y-2">{park.sources.map(source => <li key={source.url}><a className="underline" href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul>
            <p className="text-sm mb-4">Photo: {park.photo.title}. {park.photo.credit}. <a href={park.photo.sourceUrl} target="_blank" rel="noopener noreferrer">Source image</a></p>
            <p className="text-sm text-muted-foreground">Independent guide, not affiliated with the National Park Service. This guide does not provide live weather, traffic, flight schedules, or visitor ratings.</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
