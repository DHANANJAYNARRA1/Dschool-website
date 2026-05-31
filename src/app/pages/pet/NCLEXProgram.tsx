import PETTemplate from "../../components/PETTemplate";

export default function NCLEXProgram() {
  return (
    <PETTemplate
      title="NCLEX Preparation"
      subtitle="National Council Licensure Examination for Registered Nurses"
      description="Specialized NCLEX-RN preparation program to help nurses qualify for licensure in the United States, Canada, and other countries that recognize NCLEX certification."
      category="Licensed Examination"
      duration="3-6 Months"
      trainingModes={["One-on-One Training", "Group Training Sessions"]}
      programId="nclex"
      price="Contact for Pricing"
      highlights={[
        {
          title: "NCLEX Expert Instructors",
          description: "Learn from NCLEX-qualified nurses with international practice experience"
        },
        {
          title: "Comprehensive Test Bank",
          description: "Access to thousands of NCLEX-style practice questions across all categories"
        },
        {
          title: "Computer Adaptive Testing Practice",
          description: "Simulate real NCLEX exam environment with CAT practice tests"
        },
        {
          title: "Clinical Judgment Focus",
          description: "Master the Next Generation NCLEX clinical judgment measurement model"
        },
        {
          title: "Detailed Rationales",
          description: "Understand the reasoning behind every answer with comprehensive explanations"
        },
        {
          title: "Performance Analytics",
          description: "Track your progress and identify areas needing improvement"
        }
      ]}
      curriculum={[
        "Safe and Effective Care Environment",
        "Health Promotion and Maintenance",
        "Psychosocial Integrity",
        "Physiological Integrity",
        "Pharmacology and Medication Administration",
        "Clinical Judgment and Decision Making",
        "NCLEX Test-Taking Strategies",
        "Computer Adaptive Testing (CAT) Fundamentals",
        "Priority Setting and Delegation",
        "Next Generation NCLEX Question Types",
        "Regular Practice Tests and Assessments"
      ]}
      outcomes={[
        "Master all NCLEX-RN content areas and client needs categories",
        "Apply clinical judgment skills to patient care scenarios",
        "Navigate computer adaptive testing with confidence",
        "Answer NCLEX-style questions efficiently and accurately",
        "Develop effective test-taking strategies",
        "Pass NCLEX-RN on first attempt and pursue international nursing careers"
      ]}
    />
  );
}
