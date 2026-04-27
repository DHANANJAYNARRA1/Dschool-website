import { motion } from "motion/react";
import asciLogo from "../../imports/logos/asci.jpg";
import ozoneLogo from "../../imports/logos/ozone.jpg";

export default function Partners() {
  const partners = [
    { name: "AHA", tagline: "American Heart Association", img: "/assets/aha logo.jpeg" },
    { name: "ASCI", tagline: "Premier Institute", img: asciLogo },
    { name: "Ozone Hospitals", tagline: "Multi-Specialty Hospital", img: ozoneLogo },
  ];

  const certifications = [
    { title: "Industry Recognized", subtitle: "Professional Excellence" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with India's premier healthcare institutions and educational organizations
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid md:grid-cols-1 max-w-sm mx-auto gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-blue-100 flex flex-col"
            >
              {/* Logo image area — white bg to match nav header */}
              <div className="bg-white flex items-center justify-center p-6 h-36">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="bg-white px-4 py-3 flex-1 flex flex-col items-center justify-center text-center">
                <p className="font-bold text-slate-900 text-sm">{partner.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{partner.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
