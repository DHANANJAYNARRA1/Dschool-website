import ProgramTemplate from "../../components/ProgramTemplate";

export default function LeadershipProgram() {
  return (
    <ProgramTemplate
      title="Leadership Integrated Skills"
      subtitle="Comprehensive Annual Program"
      duration="One Year Program"
      eligibility="Healthcare Professionals"
      price="₹65,000"
      description="Language (3 months) + Soft Skills (3 months) + LEAD (3 months) + Integration (3 months). A holistic year-long program focusing on Leadership-Execution-Accountability-Decision Making for comprehensive professional development."
      programId="leadership-integrated"
      color="bg-gradient-to-br from-[#1E3A8A] to-[#0F1E4A]"
      features={[
        {
          title: "Language Module (3 Months)",
          description: "Master medical English and professional communication",
        },
        {
          title: "Soft Skills Module (3 Months)",
          description: "Develop emotional intelligence, communication, and interpersonal skills",
        },
        {
          title: "LEAD Module (3 Months)",
          description: "Leadership, Execution, Accountability, Decision-Making frameworks",
        },
        {
          title: "Integration Module (3 Months)",
          description: "Apply all learnings in real-world healthcare scenarios",
        },
        {
          title: "Comprehensive Development",
          description: "360-degree skill enhancement for healthcare leadership",
        },
        {
          title: "Career Transformation",
          description: "Prepare for senior leadership roles in healthcare",
        },
      ]}
      curriculum={[
        "Medical English Proficiency",
        "Professional Communication Skills",
        "Emotional Intelligence Development",
        "Conflict Resolution and Negotiation",
        "Strategic Leadership Principles",
        "Healthcare Operations Management",
        "Financial Acumen for Healthcare Leaders",
        "Performance Management Systems",
        "Decision-Making Frameworks",
        "Accountability and Ethics",
        "Change Management",
        "Integrated Leadership Capstone Project",
      ]}
      outcomes={[
        "Communicate effectively in professional English",
        "Lead with emotional intelligence",
        "Make strategic decisions confidently",
        "Execute complex healthcare projects",
        "Demonstrate accountability and integrity",
        "Qualify for senior leadership positions",
      ]}
    />
  );
}
