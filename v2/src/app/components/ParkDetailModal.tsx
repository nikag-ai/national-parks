import { X, Heart, MapPin, Star, Plane, Thermometer, Calendar, TrendingUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import type { Park } from "../data/parks";
import { MONTHS } from "../data/parks";

interface ParkDetailModalProps {
  park: Park | null;
  onClose: () => void;
  selectedHub: string;
  isFavorite: boolean;
  isVisited: boolean;
  onToggleFavorite: () => void;
  onToggleVisited: () => void;
}

export function ParkDetailModal({
  park,
  onClose,
  selectedHub,
  isFavorite,
  isVisited,
  onToggleFavorite,
  onToggleVisited,
}: ParkDetailModalProps) {
  if (!park) return null;

  const flightTime = park.flightTime[selectedHub as keyof typeof park.flightTime];

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
                onClick={onToggleFavorite}
                className="rounded-full shadow-lg backdrop-blur-sm"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-current text-red-500" : ""}`} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
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
                <div className="bg-accent text-accent-foreground px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-2xl" style={{ fontFamily: 'var(--font-sans)' }}>
                    {park.compositeScore}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="overflow-y-auto max-h-[50vh] p-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-muted/50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Plane className="w-4 h-4" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Flight Time</span>
                </div>
                <p className="text-xl" style={{ fontFamily: 'var(--font-sans)' }}>
                  {flightTime}h
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Thermometer className="w-4 h-4" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Temp Range</span>
                </div>
                <p className="text-xl" style={{ fontFamily: 'var(--font-sans)' }}>
                  {park.temperature.min}°-{park.temperature.max}°F
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Best Months</span>
                </div>
                <p className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                  {park.bestMonths.map(m => MONTHS[m].slice(0, 3)).join(", ")}
                </p>
              </div>

              <div className="bg-muted/50 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-sans)' }}>Sentiment</span>
                </div>
                <p className="text-xl text-green-600" style={{ fontFamily: 'var(--font-sans)' }}>
                  {park.redditSentiment.positive}%
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              {park.description}
            </p>

            {/* Tabbed Content */}
            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="itinerary">3-Day Itinerary</TabsTrigger>
                <TabsTrigger value="hacks">Pro Hacks</TabsTrigger>
                <TabsTrigger value="sentiment">Community</TabsTrigger>
              </TabsList>

              <TabsContent value="itinerary" className="space-y-6">
                {park.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-primary pl-6 py-2">
                    <h3
                      className="text-xl mb-3"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      Day {day.day}: {day.title}
                    </h3>
                    <ul className="space-y-2">
                      {day.activities.map((activity, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start gap-2"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          <span className="text-primary mt-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="hacks" className="space-y-4">
                {park.proHacks.map((hack, idx) => (
                  <div key={idx} className="bg-accent/10 border border-accent/30 rounded-2xl p-5">
                    <p className="text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                      {hack}
                    </p>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="sentiment">
                <div className="space-y-6">
                  {/* Sentiment Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Positive
                        </span>
                        <span className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                          {park.redditSentiment.positive}%
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all"
                          style={{ width: `${park.redditSentiment.positive}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Neutral</span>
                        <span className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                          {park.redditSentiment.neutral}%
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-500 rounded-full transition-all"
                          style={{ width: `${park.redditSentiment.neutral}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Negative</span>
                        <span className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                          {park.redditSentiment.negative}%
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-500 rounded-full transition-all"
                          style={{ width: `${park.redditSentiment.negative}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-2xl p-6">
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                      Sentiment data aggregated from outdoor recreation communities and visitor reviews. High positive sentiment indicates strong visitor satisfaction and memorable experiences.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
