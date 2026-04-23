import ProgramTemplate from "../../components/ProgramTemplate";

export default function HospitalManagerProgram() {
  return (
    <ProgramTemplate
      title="Hospital Manager Programs"
      subtitle="Competency Programs for Healthcare Leadership"
      duration="Modular Format - 6-12 Months"
      eligibility="Healthcare Managers & Administrators"
      price="₹75,000"
      description="Comprehensive competency-based programs covering Healthcare Data Analytics, Medico-Legal Skills, Quality Improvement, Patient Communication, Ethical Decision-Making, and Digital Health Revolution."
      programId="hospital-manager"
      color="bg-gradient-to-br from-[#1E3A8A] to-[#0F1E4A]"
      features={[
        {
          title: "Healthcare Data Analytics",
          description: "Harness data-driven insights to improve outcomes and operations",
        },
        {
          title: "Medico-Legal Skills",
          description: "Navigate legal compliance, risk management, and documentation",
        },
        {
          title: "Quality Improvement",
          description: "Continuous improvement methods and safety protocols",
        },
        {
          title: "Patient Experience Management",
          description: "Master effective communication and patient engagement",
        },
        {
          title: "Ethical Decision-Making",
          description: "Framework for addressing ethical dilemmas in healthcare",
        },
        {
          title: "Digital Health Leadership",
          description: "Implement and lead digital health initiatives",
        },
      ]}
      curriculum={[
        "Healthcare Analytics and Business Intelligence",
        "Data-Driven Decision Making",
        "Legal and Regulatory Compliance",
        "Risk Management Strategies",
        "Quality Management Systems (QMS)",
        "Patient Safety Protocols",
        "Service Excellence in Healthcare",
        "Patient Experience Measurement",
        "Healthcare Ethics and Bioethics",
        "Ethical Frameworks for Decision-Making",
        "Digital Transformation in Healthcare",
        "Healthcare Technology Implementation",
      ]}
      outcomes={[
        "Utilize data analytics for strategic decisions",
        "Ensure legal compliance and mitigate risks",
        "Implement quality improvement initiatives",
        "Enhance patient satisfaction and experience",
        "Navigate complex ethical situations",
        "Lead digital transformation projects",
      ]}
    />
  );
}
