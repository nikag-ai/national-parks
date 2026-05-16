import { motion } from "motion/react";

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
            backgroundImage: `url('https://images.unsplash.com/photo-1579112047870-11fa9ae0686c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3NlbWl0ZSUyMHZhbGxleSUyMGRyYW1hdGljJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NjI0MzgxM3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
      </motion.div>

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
            Discover America's most breathtaking national parks based on when you want to go and where you're coming from
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
