import { motion } from "motion/react";
import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import dschoolLogo from "../../imports/dschool_image.jpeg";

const socialIcons = {
  Facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Placements", href: "/placements" },
  ];

  const programs = [
    "Nursing Leadership LION",
    "Digital Health Revolution",
    "Finance Workshop",
    "DALES Program",
  ];

  return (
    <footer id="contact" className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src={dschoolLogo} alt="D School" className="h-20 w-auto object-contain" />
            </div>
            <p className="opacity-75 mb-6">
              An initiative of SIMS Healthcare Pvt. Ltd., transforming healthcare professionals into global experts.
            </p>
            <div className="flex gap-4">
              {(
                [
                  { key: "Facebook",  href: "https://www.facebook.com/simshealthy.life/"                             },
                  { key: "LinkedIn",  href: "https://www.linkedin.com/company/dschoolglobal/posts/?feedView=all"     },
                  { key: "Instagram", href: "https://www.instagram.com/dschool_hyderabad/?hl=en"                     },
                ] as { key: keyof typeof socialIcons; href: string }[]
              ).map(({ key, href }) => (
                <motion.a
                  key={key}
                  whileHover={{ scale: 1.1 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  {socialIcons[key]}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="opacity-75 hover:opacity-100 hover:text-primary transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index} className="opacity-75">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 flex-shrink-0" size={18} />
                <span className="opacity-75">dschool@sims.healthcare</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 flex-shrink-0" size={18} />
                <span className="opacity-75">+91 91007 77107</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <span className="opacity-75">SIMS Healthcare Private Limited, Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="opacity-75">
            © 2026 D School - An Initiative of SIMS Healthcare Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
