import ProgramTemplate from "../../components/ProgramTemplate";

export default function LANGProgram() {
  return (
    <ProgramTemplate
      title="LANG Program"
      subtitle="English Language Training for Nurses"
      duration="Sunday Sessions - 2 Hours Weekly"
      eligibility="Nurses with Basic English"
      price="₹8,000"
      description="Online Medical English Proficiency Program designed to enhance communication skills for healthcare professionals seeking career advancement in global healthcare environments."
      programId="lang"
      color="bg-gradient-to-br from-[#D4AF37] to-[#B8941F]"
      features={[
        {
          title: "Structured Online Learning",
          description: "Convenient Sunday sessions designed for working professionals",
        },
        {
          title: "Medical English Focus",
          description: "Healthcare-specific vocabulary and communication patterns",
        },
        {
          title: "Comprehensive Assessments",
          description: "Regular evaluations to track proficiency development",
        },
        {
          title: "Interview Preparation",
          description: "Practice sessions for international job interviews",
        },
        {
          title: "Clinical Communication",
          description: "Patient interaction and healthcare documentation skills",
        },
        {
          title: "Global Opportunities",
          description: "Prepare for international nursing certifications and placements",
        },
      ]}
      curriculum={[
        "Medical Terminology and Vocabulary",
        "Patient Communication Skills",
        "Clinical Documentation in English",
        "Nursing Reports and Handovers",
        "Telephone Communication in Healthcare",
        "Understanding Medical Instructions",
        "Writing Professional Emails",
        "Grammar for Healthcare Professionals",
        "Pronunciation and Accent Training",
        "Interview Skills and Practice",
        "Cross-Cultural Communication",
        "Listening Comprehension for Healthcare",
      ]}
      outcomes={[
        "Communicate confidently in medical English",
        "Document patient care in English effectively",
        "Understand and follow medical instructions",
        "Excel in international job interviews",
        "Prepare for global nursing certifications",
        "Work effectively in multicultural healthcare teams",
      ]}
    />
  );
}
