import { motion } from "motion/react";
import { Target, Eye, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            About <span className="text-primary">D School</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An initiative of SIMS Healthcare Pvt. Ltd., committed to democratizing
            opportunities for healthcare professionals through structured, skill-based training.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: BookOpen,
              title: "What is D School?",
              description: "We focus on transforming qualified individuals into competent, job-ready experts through structured training, workshops, and specialized programs designed for global career readiness.",
              delay: 0.1,
            },
            {
              icon: Target,
              title: "Our Mission",
              description: "Transforming Qualified Healthcare Professionals into Competent Experts through practical expertise and global exposure.",
              delay: 0.2,
            },
            {
              icon: Eye,
              title: "Our Vision",
              description: "Bridge the critical skill gap in healthcare by equipping professionals with practical expertise and creating meaningful career pathways worldwide.",
              delay: 0.3,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <item.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-center text-primary-foreground"
        >
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Who We Are
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
            D School is driven by a dynamic team of healthcare and education professionals with 6+ years
            of combined experience. Our leadership bridges the gap between traditional healthcare education
            and real-world industry demands.
          </p>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Supported by our distinguished advisory panel of renowned industry leaders, senior academicians,
            and healthcare experts, we design innovative, industry-aligned programs that meet international
            standards and open doors to global career opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
