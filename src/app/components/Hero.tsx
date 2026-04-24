import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImages = [
  "https://images.unsplash.com/photo-1758575514475-2a84975db58e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1643061754993-c8d79a3636d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1592392821486-71f028a00581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1736289162890-78f1ff4f8bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background: full image on mobile, split on desktop */}
      <div className="absolute inset-0">
        {/* Mobile: full bleed image with dark overlay */}
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
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/80 to-blue-900/90" />
        </div>

        {/* Desktop: split layout */}
        <div className="hidden md:grid grid-cols-2 absolute inset-0">
          <div className="relative bg-gradient-to-br from-primary via-blue-800 to-blue-900">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
            </div>
          </div>
          <div className="relative overflow-hidden">
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: index === currentImage ? 1 : 0,
                  scale: index === currentImage ? 1 : 1.1,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={image}
                  alt="Healthcare professionals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/20 to-blue-900/80" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-20">
        <div className="max-w-2xl">
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
        </div>
      </div>
    </section>
  );
}
