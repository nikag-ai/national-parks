import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterPanel({
  isOpen,
  onClose,
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
                    Planning guide
                  </h2>
                  <p className="text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    How to use the shortlist
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Close planning guide"
                  onClick={onClose}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-5">
                <p>Use the month bar, search, favorites, and visited views to narrow your options.</p>
                <p>Months and trip lengths are editorial suggestions. They do not predict weather, crowds, or open roads.</p>
                <p>Open a park for dated planning notes and official NPS sources. Check current conditions before booking.</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
