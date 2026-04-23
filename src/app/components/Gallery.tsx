import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Gallery() {
  const images = Array(8).fill(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore snapshots from our webinars, workshops, and D School initiatives – capturing
            moments of learning, collaboration, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-full h-full flex items-center justify-center bg-card/50 backdrop-blur-sm">
                <p className="text-muted-foreground text-sm">Image {index + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
