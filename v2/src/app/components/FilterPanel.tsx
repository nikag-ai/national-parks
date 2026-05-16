import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  tempRange: number[];
  onTempRangeChange: (range: number[]) => void;
}

export function FilterPanel({
  isOpen,
  onClose,
  tempRange,
  onTempRangeChange,
}: FilterPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[480px] bg-card shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2
                    className="text-3xl mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Refine Results
                  </h2>
                  <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    Fine-tune your park search
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Temperature Range */}
              <div className="space-y-6">
                <div>
                  <label
                    className="block mb-4"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Temperature Range (°F)
                  </label>
                  <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span style={{ fontFamily: 'var(--font-sans)' }}>{tempRange[0]}°F</span>
                    <span style={{ fontFamily: 'var(--font-sans)' }}>{tempRange[1]}°F</span>
                  </div>
                  <Slider
                    min={0}
                    max={110}
                    step={5}
                    value={tempRange}
                    onValueChange={onTempRangeChange}
                    className="mb-8"
                  />
                </div>

                {/* Seasonal Guide */}
                <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                  <h3
                    className="text-lg"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Seasonal Guide
                  </h3>
                  <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-chart-1 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Spring/Fall (40-75°F)</strong>
                        <p className="text-muted-foreground">Mild weather, fewer crowds, vibrant colors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-chart-2 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Summer (60-100°F)</strong>
                        <p className="text-muted-foreground">Peak season, all facilities open, high temps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-chart-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Winter (0-50°F)</strong>
                        <p className="text-muted-foreground">Solitude, snow activities, limited access</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pro Tips */}
                <div className="border-l-4 border-accent pl-6 py-2">
                  <h4
                    className="text-sm mb-2 text-accent-foreground"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Pro Tip
                  </h4>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    Shoulder seasons (spring and fall) offer the best balance of weather, wildlife activity, and smaller crowds. Consider visiting popular parks in May or September.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
