import { motion } from "motion/react";
import { Globe, Users, Award, CheckCircle, Upload } from "lucide-react";

export default function Placements() {
  const features = [
    {
      icon: Users,
      title: "500+ Placements",
      description: "Successfully facilitated placements for radiographers, nurses, and doctors across leading healthcare institutions",
    },
    {
      icon: Award,
      title: "Industry Partners",
      description: "Strong network with top-tier hospitals, healthcare facilities, and medical institutions",
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "Skill enhancement, exam prep, interview readiness, licensing, and onboarding",
    },
    {
      icon: Globe,
      title: "Career Growth",
      description: "Continuous professional development and advancement opportunities throughout your career",
    },
  ];

  return (
    <section id="placements" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Career <span className="text-primary">Placements</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you are aiming for career growth or exploring opportunities with leading
              healthcare institutions, D School serves as your trusted partner—ensuring a smooth,
              structured, and professional transition at every step.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-primary-foreground"
          >
            <div className="text-center mb-8">
              <Upload className="mx-auto mb-4" size={64} />
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Upload Your CV
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Take the first step towards your rewarding healthcare career
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
              <div className="border-2 border-dashed border-primary-foreground/30 rounded-lg p-8 text-center hover:border-primary-foreground/50 transition-colors cursor-pointer">
                <Upload className="mx-auto mb-2" size={32} />
                <p className="font-semibold">Click to upload CV</p>
                <p className="text-sm opacity-75">PDF, DOC, DOCX (Max 5MB)</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-foreground text-primary px-6 py-4 rounded-lg hover:bg-primary-foreground/90 transition-all font-bold"
              >
                Submit Application
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
