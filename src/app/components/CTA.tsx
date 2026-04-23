import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Phone } from "lucide-react";
import { WavePattern } from "./BackgroundPattern";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
      <WavePattern />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Transform Your Healthcare Career?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who have advanced their careers with D School's world-class training programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 text-blue-900 px-8 py-4 rounded-full hover:from-yellow-400 hover:to-amber-500 transition-all font-bold shadow-xl flex items-center gap-2"
              >
                Explore Programs
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-bold flex items-center gap-2"
              >
                <Phone size={20} />
                Contact Us
              </motion.button>
            </Link>
          </div>

          <p className="text-blue-200 mt-8">
            <span className="font-semibold">Call us:</span> +91 91007 77107 | <span className="font-semibold">Email:</span> dschool@sims.healthcare
          </p>
        </motion.div>
      </div>
    </section>
  );
}
