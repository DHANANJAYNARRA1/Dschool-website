import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Bridging the Gap Between <span className="text-primary">Education</span> and <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The healthcare industry is evolving at an unprecedented pace. D School was founded to address
              the critical need for healthcare professionals who possess modern skills and global competencies.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Transform from qualified to competent expert",
                "Gain practical skills for real-world challenges",
                "Access global career opportunities",
                "Learn from industry-leading professionals",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-lg text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all font-bold shadow-lg flex items-center gap-2"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                number: "6+",
                label: "Years of Excellence",
                sublabel: "Industry experience",
              },
              {
                number: "98%",
                label: "Satisfaction Rate",
                sublabel: "Student feedback",
              },
              {
                number: "20+",
                label: "Healthcare Partners",
                sublabel: "Top-tier hospitals",
              },
              {
                number: "24/7",
                label: "Support Available",
                sublabel: "Dedicated assistance",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 transition-all"
              >
                <h3 className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.number}
                </h3>
                <p className="font-semibold text-slate-900 mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
