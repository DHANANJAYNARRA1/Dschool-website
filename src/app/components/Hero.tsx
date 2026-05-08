import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImages = [
  "/assets/home/design%201.jpg",
  "/assets/home/design%202.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg"
        style={{ fontFamily: "var(--font-display)" }}
      >
        A School for{" "}
        <span className="text-accent">Healthcare Professionals</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-base sm:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md"
      >
        Transforming qualified healthcare professionals into competent,
        job-ready experts through structured training and global career
        pathways.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
      >
        <Link to="/programs">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-accent text-primary px-8 py-4 rounded-full hover:bg-accent/90 transition-all font-semibold flex items-center justify-center gap-2 shadow-2xl"
          >
            Explore Programs
            <ArrowRight size={20} />
          </motion.button>
        </Link>
        <Link to="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-semibold"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* ── Mobile: full-bleed image + overlay ── */}
      <div className="md:hidden absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={image}
              alt="Healthcare professionals"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/80 to-blue-900/90" />
      </div>

      {/* ── Desktop: true two-column flex layout ── */}
      <div className="hidden md:flex min-h-screen">

        {/* Left: blue gradient panel with text */}
        <div className="w-1/2 relative bg-gradient-to-br from-primary via-blue-800 to-blue-900 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/50" />
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 px-8 lg:px-16 py-24 max-w-xl">
            {content}
          </div>
        </div>

        {/* Right: full image, no crop — width fills panel, height is natural */}
        <div className="w-1/2 relative bg-gradient-to-br from-blue-900 via-blue-950 to-blue-900 flex items-center justify-center overflow-hidden">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <ImageWithFallback
                src={image}
                alt="Healthcare professionals"
                className="w-full h-auto block"
              />
            </motion.div>
          ))}
          {/* Smooth gradient fades so image blends into the panel — no hard "card" edge */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-blue-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-900 to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* ── Mobile content ── */}
      <div className="md:hidden relative z-10 flex items-center min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-16">
          {content}
        </div>
      </div>
    </section>
  );
}
