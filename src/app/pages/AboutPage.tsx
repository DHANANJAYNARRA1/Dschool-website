import { motion } from "motion/react";
import { Target, Eye, BookOpen, LucideLinkedin, Mail, Star } from "lucide-react";
import founderPhoto from "../../imports/WhatsApp_Image_2026-04-20_at_11.01.00_AM.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              About D School
            </h1>
            <p className="text-xl opacity-90">
              An initiative of SIMS Healthcare Pvt. Ltd., committed to democratizing
              opportunities for healthcare professionals through structured, skill-based training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-border"
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
            className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-12 text-center text-white mb-16 shadow-xl"
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

          {/* Team Section */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Meet Our <span className="text-primary">Think Tank</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Driven by passion, guided by experience, and committed to transforming healthcare education
              </p>
            </motion.div>

            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
             
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-12 shadow-xl border border-blue-100">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative">
                      <div className="w-48 h-72 rounded-2xl overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                        <img
                          src={founderPhoto}
                          alt="Deepti G - Founder & CEO"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        Deepti G
                      </h4>
                      <p className="text-primary font-semibold text-lg mb-4">Founder & CEO</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Passionate healthcare leader dedicated to transforming lives through accessible, affordable, and patient-centered care.
                        At the helm of our multispecialty hospital, I champion the seamless integration of healthcare and technology to deliver
                        excellence that patients trust.
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        As a biomedical engineer turned healthcare leader, my thirst for innovation and technology has always been intrinsic
                        to my mission. My unwavering intent is to serve humanity by saving lives and alleviating suffering, leveraging my
                        engineering background to pioneer advanced medical solutions. Each day brings new opportunities to make a meaningful
                        difference, combining cutting-edge technology with clinical excellence to reach those who need care most. This fusion
                        of engineering innovation and healthcare delivery drives everything we do—transforming how we save lives and serve our communities.
                      </p>
                      <div className="flex gap-3 justify-center md:justify-start">
                        <a
                          href="https://www.linkedin.com/in/deepti-g-20933b23/?skipRedirect=true"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                        >
                          <LucideLinkedin className="text-primary" size={20} />
                        </a>
                        <a
                          href="mailto:deepti@sims.healthcare"
                          className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Mail className="text-primary" size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Advisory Team - commented out
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                Advisory Team
              </h3>
              ...
            </motion.div>
            */}
          </div>

          {/* Learning & Development Offerings */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Our Learning & Development <span className="text-primary">Offerings</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                All our programs are delivered in association with the Administrative Staff College of India
                (ASCI), a premier institution known for its excellence in professional education and capacity building.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Nursing Programs
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Specialized training programs for nursing professionals at all career stages—from leadership development
                  (LION Program) to finishing school programs (Nurse 360), soft skills training (SOS), excellence in
                  services (DALES, LANTERN), and medical English communication (LANG).
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    LION - Leadership Bootcamp
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Nurse 360 - Finishing School
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    SOS - Soft Skills Training
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    DALES & LANTERN Programs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    LANG - Medical English
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Management Programs
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Executive programs designed for healthcare leaders and administrators—covering hospital management,
                  healthcare operations, digital health transformation, and strategic leadership skills essential for senior healthcare roles.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Hospital Manager Programs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Leadership Integrated Skills
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Digital Health Revolution
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Strategic Decision Making
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Healthcare Operations
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Specialized Programs
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At D School, we offer a range of specialized programs designed to empower healthcare professionals,
                  particularly nurses. Our portfolio includes focused workshops such as the Finance Workshop, along with
                  advanced fellowship programs aimed at enhancing leadership, clinical expertise, and career growth.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In addition to healthcare training, we have also curated unique learning experiences for children.
                  In collaboration with Ozone Hospitals, we introduced Dr. Tomorrow—a specialized program designed to
                  inspire young minds and provide early exposure to healthcare concepts in an engaging and interactive way.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    DR. Tomorrow
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Finance Workshop
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Fellowship Programs
                  </li>
                </ul>
              </motion.div>

            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-border text-center"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                ASCI-Certified Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Every program is meticulously designed and delivered in partnership with ASCI, ensuring participants
                receive industry-recognized certification, practical skills, and knowledge that meets international
                standards. Our structured curriculum combines theoretical foundations with hands-on learning, case
                studies, and real-world applications to ensure immediate workplace impact.
              </p>
            </motion.div>
          </div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Our Commitment to Excellence
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Led by our founder and guided by our distinguished advisory team, D School remains committed to
              delivering impactful, industry-aligned learning experiences that empower healthcare professionals
              to excel and transform their careers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  number: "50+",
                  label: "Years Combined Experience",
                },
                {
                  number: "100%",
                  label: "Industry-Aligned Content",
                },
                {
                  number: "2000+",
                  label: "Professionals Mentored",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <p className="text-4xl font-bold mb-2">{stat.number}</p>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
