import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function DrTomorrowWorkshop() {
  return (
    <WorkshopTemplate
      title="DR Tomorrow"
      date="October 2026 (TBC)"
      time="To Be Confirmed"
      duration="To Be Confirmed"
      capacity="20–30 Participants"
      level="Students (Age 13–16 Years)"
      instructor="Healthcare Professionals & Medical Experts | Partner: Ozone Hospitals"
      price="₹6,000"
      description="DR Tomorrow is an engaging and interactive healthcare awareness program specially designed for children aged 13 to 16 years. The program introduces young minds to the fascinating world of healthcare, medicine, and health sciences through fun learning experiences, practical activities, and career exploration sessions."
      workshopId="dr-tomorrow"
      category="Youth Program"
      image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop"
      highlights={[
        {
          title: "Human Body & Health Sciences",
          description: "Introduction to the human body and basic health sciences in a fun and engaging way."
        },
        {
          title: "Hospital & Medical Roles",
          description: "Interactive sessions on hospitals, healthcare departments, and medical roles."
        },
        {
          title: "First Aid & Emergency Awareness",
          description: "Basic first aid and emergency awareness activities for practical knowledge."
        },
        {
          title: "Nutrition, Hygiene & Healthy Living",
          description: "Fun learning about nutrition, hygiene, and healthy living habits."
        },
        {
          title: "Career Conversations",
          description: "Career conversations with doctors and nurses to inspire future healthcare interest."
        },
        {
          title: "Healthcare Technology Exposure",
          description: "Exposure to healthcare technology such as stethoscopes, X-rays, and medical equipment."
        }
      ]}
      curriculum={[
        "Introduction to the Human Body and Basic Health Sciences",
        "Hospitals, Healthcare Departments, and Medical Roles",
        "Basic First Aid and Emergency Awareness",
        "Nutrition, Hygiene, and Healthy Living Habits",
        "Career Exploration in Healthcare",
        "Simple Anatomy and How the Body Works",
        "Healthcare Technology: Stethoscopes, X-rays, and Medical Equipment",
        "Team-Building Activities and 'A Day in the Hospital' Challenge",
        "Hands-On and Activity-Based Learning Experiences"
      ]}
      outcomes={[
        "Understand the basics of the human body and health sciences.",
        "Gain awareness of hospitals, healthcare departments, and medical professions.",
        "Demonstrate basic knowledge of first aid and emergency response.",
        "Recognize the importance of nutrition, hygiene, and healthy lifestyles.",
        "Develop curiosity and interest in healthcare and medical careers.",
        "Understand simple anatomy and body functions in an engaging way.",
        "Identify common healthcare technologies and their uses.",
        "Improve teamwork, communication, and problem-solving skills through group activities.",
        "Build confidence through interactive learning and healthcare simulations.",
        "Develop a positive understanding of healthcare, wellness, and community care."
      ]}
    />
  );
}
