import ProgramTemplate from "../../components/ProgramTemplate";

export default function LIONProgram() {
  return (
    <ProgramTemplate
      title="LION Program"
      subtitle="Nursing Leadership Program"
      duration="3-Day Bootcamp"
      eligibility="Minimum 2 years in Nursing Incharge Role"
      price="₹10,000-12,000"
      description="Lead-Inspire-Objective-Nurture. An intensive leadership program designed exclusively for nursing leaders, equipping professionals with essential skills to meet evolving industry demands."
      programId="lion"
      color="bg-gradient-to-br from-[#D4AF37] via-[#C5A029] to-[#B8941F]"
      features={[
        {
          title: "Leadership & Management",
          description: "Develop strategic thinking and decision-making capabilities for effective healthcare leadership",
        },
        {
          title: "The Heart of Nursing",
          description: "Reconnect with core nursing values while embracing modern healthcare practices",
        },
        {
          title: "Medico-Legal Competence",
          description: "Navigate legal compliance, risk management, and documentation standards",
        },
        {
          title: "Safe Culture of Care",
          description: "Implement safety protocols and quality improvement methodologies",
        },
        {
          title: "Digital Health",
          description: "Leverage technology for improved patient outcomes and operational efficiency",
        },
        {
          title: "Scenario-Based Learning",
          description: "Real-world hospital challenges with evidence-based solutions",
        },
      ]}
      curriculum={[
        "Strategic Leadership in Healthcare Settings",
        "Effective Communication and Team Building",
        "Patient Safety and Quality Management",
        "Medico-Legal Documentation and Compliance",
        "Digital Health Tools and Technologies",
        "Conflict Resolution and Change Management",
        "Performance Management and Mentorship",
        "Evidence-Based Practice Implementation",
      ]}
      outcomes={[
        "Lead healthcare teams with confidence and clarity",
        "Navigate complex medico-legal scenarios effectively",
        "Implement digital health initiatives in your organization",
        "Create and sustain a safe culture of care",
        "Drive meaningful improvements in patient outcomes",
        "Develop and mentor future nursing leaders",
      ]}
    />
  );
}
