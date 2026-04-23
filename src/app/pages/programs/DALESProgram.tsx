import ProgramTemplate from "../../components/ProgramTemplate";

export default function DALESProgram() {
  return (
    <ProgramTemplate
      title="DALES Program"
      subtitle="Daily Activities Leading to Excellence in Services"
      duration="6 Months (One Day per Month)"
      eligibility="Healthcare Professionals"
      price="₹18,000"
      description="A structured development initiative designed to enhance healthcare professionals' capabilities in delivering high-quality patient care and fostering effective team collaboration."
      programId="dales"
      color="bg-gradient-to-br from-[#D4AF37] to-[#B8941F]"
      features={[
        {
          title: "Patient Care Standards",
          description: "Master evidence-based care protocols and quality benchmarks",
        },
        {
          title: "Team Collaboration",
          description: "Build effective multidisciplinary teamwork skills",
        },
        {
          title: "Continuous Learning",
          description: "Monthly sessions designed for ongoing professional development",
        },
        {
          title: "Practical Focus",
          description: "Balance professional responsibilities with structured learning",
        },
        {
          title: "Interactive Engagement",
          description: "Case discussions, role-plays, and peer learning",
        },
        {
          title: "Real-World Application",
          description: "Implement learnings immediately in your practice",
        },
      ]}
      curriculum={[
        "Fundamentals of Quality Patient Care",
        "Communication in Healthcare Teams",
        "Patient Safety and Risk Management",
        "Documentation and Record Keeping",
        "Infection Control and Prevention",
        "Emergency Response and Critical Care",
        "Cultural Competence in Healthcare",
        "Patient and Family Engagement",
        "Interprofessional Collaboration",
        "Professional Ethics and Accountability",
        "Continuous Quality Improvement",
        "Stress Management and Self-Care",
      ]}
      outcomes={[
        "Deliver consistent, high-quality patient care",
        "Work effectively within multidisciplinary teams",
        "Implement patient safety protocols confidently",
        "Communicate effectively with patients and colleagues",
        "Maintain professional standards and ethics",
        "Contribute to continuous quality improvement",
      ]}
    />
  );
}
