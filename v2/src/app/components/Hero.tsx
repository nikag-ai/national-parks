import { motion } from "motion/react";
import { parks } from "../data/parks";
const heroPark = parks.find(p => p.id === "yosemite")!;

export function Hero() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroPark.image}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
      </motion.div>

      <a href={heroPark.photo.sourceUrl} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 z-10 text-xs text-white bg-black/50 rounded px-2 py-1">Photo: {heroPark.photo.credit}</a>
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl text-white mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Find Your Wild
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Discover America's most breathtaking national parks with editorial month suggestions and source-linked planning notes
          </p>
        </motion.div>

        {/* Organic Decorative Element */}
        <motion.svg
          className="absolute bottom-0 left-0 w-full text-background"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <path d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z" />
        </motion.svg>
      </div>
    </div>
  );
}
