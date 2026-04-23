import ProgramTemplate from "../../components/ProgramTemplate";

export default function DrTomorrowProgram() {
  return (
    <ProgramTemplate
      title="DR. Tomorrow"
      subtitle="Future Healthcare Champions Program"
      duration="Varies by Module"
      eligibility="Children (Ages 8–18)"
      price="Contact Us"
      description="An inspiring journey into the world of healthcare, designed to spark curiosity and passion in young minds. DR. Tomorrow gives children early exposure to healthcare concepts, professionals, and careers — nurturing the doctors, nurses, and innovators of the future."
      programId="dr-tomorrow"
      color="bg-gradient-to-br from-[#1E3A8A] via-[#1a5276] to-[#0F1E4A]"
      features={[
        {
          title: "Healthcare Exploration",
          description: "Interactive sessions introducing children to various healthcare disciplines — medicine, nursing, radiology, and allied health.",
        },
        {
          title: "Meet the Professionals",
          description: "Live interactions with doctors, nurses, and healthcare specialists who share their journeys and inspire young minds.",
        },
        {
          title: "Hands-On Simulation",
          description: "Age-appropriate, safe simulations of clinical tasks like first aid, vitals check, and basic patient care concepts.",
        },
        {
          title: "Science & Health Workshops",
          description: "Fun science experiments and workshops that connect everyday health habits with the science behind the human body.",
        },
        {
          title: "Career Pathways Guidance",
          description: "Age-appropriate roadmaps to healthcare careers — helping children and parents understand the journey ahead.",
        },
        {
          title: "Team Challenges",
          description: "Group problem-solving activities inspired by real hospital scenarios, building teamwork, empathy, and communication skills.",
        },
      ]}
      curriculum={[
        "Introduction to the Human Body and Health Sciences",
        "Understanding Hospitals: Departments and Roles",
        "Basic First Aid and Emergency Awareness",
        "Nutrition, Hygiene, and Healthy Living",
        "Meet a Doctor / Nurse — Career Conversations",
        "Simple Anatomy and How the Body Works",
        "Technology in Healthcare — Stethoscopes, X-rays, and More",
        "Team Challenge: A Day in the Hospital",
      ]}
      outcomes={[
        "Develop early curiosity and passion for healthcare",
        "Understand diverse career paths within the healthcare system",
        "Build confidence, empathy, and communication skills",
        "Learn basic first aid and health safety practices",
        "Gain exposure to real healthcare professionals and environments",
        "Inspire a lifelong commitment to health and well-being",
      ]}
    />
  );
}
