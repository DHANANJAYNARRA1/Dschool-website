import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";

interface ProgramFeature {
  title: string;
  description: string;
}

interface ProgramTemplateProps {
  title: string;
  subtitle: string;
  duration: string;
  eligibility: string;
  price: string;
  description: string;
  features: ProgramFeature[];
  curriculum?: string[];
  outcomes?: string[];
  programId: string;
  color?: string;
}

export default function ProgramTemplate({
  title,
  subtitle,
  duration,
  eligibility,
  price,
  description,
  features,
  curriculum,
  outcomes,
  programId,
  color = "bg-primary",
}: ProgramTemplateProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className={`${color} text-white py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
              <span className="text-sm font-semibold">{subtitle}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              {title}
            </h1>

            <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl">
              {description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="opacity-75" size={20} />
                <span className="font-medium">{duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="opacity-75" size={20} />
                <span className="font-medium">{eligibility}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="opacity-75" size={20} />
                <span className="font-medium">{price}</span>
              </div>
            </div>

            <Link
              to={`/register/${programId}`}
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all font-bold shadow-xl"
            >
              Register Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Program Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mb-4`}>
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      {curriculum && curriculum.length > 0 && (
        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Curriculum
            </h2>

            <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-lg border border-border">
              <ul className="space-y-4">
                {curriculum.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className={`text-primary flex-shrink-0 mt-1`} size={20} />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Outcomes Section */}
      {outcomes && outcomes.length > 0 && (
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Learning Outcomes
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-card p-6 rounded-xl border border-border"
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={`py-24 ${color} text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join healthcare professionals worldwide who have advanced their careers with D School
          </p>
          <Link
            to={`/register/${programId}`}
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all font-bold shadow-xl"
          >
            Register Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
