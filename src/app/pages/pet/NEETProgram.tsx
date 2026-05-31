import PETTemplate from "../../components/PETTemplate";

export default function NEETProgram() {
  return (
    <PETTemplate
      title="NEET Coaching"
      subtitle="National Eligibility cum Entrance Test Preparation"
      description="Comprehensive NEET coaching program designed to help aspiring medical students excel in India's most competitive medical entrance examination with expert guidance and structured preparation."
      category="Licensed Examination"
      duration="6-12 Months"
      trainingModes={["One-on-One Training", "Group Training Sessions"]}
      programId="neet"
      price="Contact for Pricing"
      requireExperience={false}
      highlights={[
        {
          title: "Expert Faculty",
          description: "Learn from experienced medical educators with proven NEET success records"
        },
        {
          title: "Comprehensive Study Material",
          description: "Access to updated NEET syllabus-aligned study materials and question banks"
        },
        {
          title: "Regular Mock Tests",
          description: "NEET pattern mock tests with detailed performance analysis and feedback"
        },
        {
          title: "Personalized Mentorship",
          description: "One-on-one guidance to address individual strengths and weaknesses"
        },
        {
          title: "Doubt Clearing Sessions",
          description: "Regular doubt clearing and problem-solving sessions for all subjects"
        },
        {
          title: "Time Management Skills",
          description: "Strategies to optimize speed and accuracy during the examination"
        }
      ]}
      curriculum={[
        "Physics - Comprehensive coverage of all NEET topics",
        "Chemistry - Organic, Inorganic, and Physical Chemistry",
        "Biology - Botany and Zoology complete syllabus",
        "Previous Year Question Analysis",
        "NEET Exam Pattern and Strategy",
        "Time Management Techniques",
        "Test-Taking Strategies",
        "Revision and Retention Techniques",
        "Regular Assessment and Progress Tracking"
      ]}
      outcomes={[
        "Master all NEET syllabus topics across Physics, Chemistry, and Biology",
        "Solve NEET-pattern questions with speed and accuracy",
        "Develop effective time management strategies for the exam",
        "Build confidence through regular mock tests and assessments",
        "Identify and strengthen weak areas with personalized guidance",
        "Achieve competitive scores for medical college admission"
      ]}
    />
  );
}
