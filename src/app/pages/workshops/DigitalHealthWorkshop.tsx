import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function DigitalHealthWorkshop() {
  return (
    <WorkshopTemplate
      title="Digital Health Technologies"
      date="July 5, 2026"
      time="9:00 AM - 3:00 PM"
      duration="1 Day"
      capacity="40 Participants"
      level="Beginner"
      instructor="Tech Healthcare Specialists"
      price="₹4,500"
      description="Explore the latest digital health technologies including EHR systems, telemedicine platforms, and healthcare analytics tools."
      workshopId="digital-health"
      category="Technology"
      image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop"
      highlights={[
        {
          title: "Electronic Health Records",
          description: "Master EHR systems for efficient patient data management and documentation"
        },
        {
          title: "Telemedicine Platforms",
          description: "Learn to deliver quality care remotely using telehealth technologies"
        },
        {
          title: "Healthcare Analytics",
          description: "Utilize data analytics tools to improve patient outcomes and operational efficiency"
        },
        {
          title: "Mobile Health Apps",
          description: "Explore mobile applications for patient monitoring and engagement"
        },
        {
          title: "Cybersecurity Basics",
          description: "Understand patient data protection and HIPAA compliance in digital systems"
        },
        {
          title: "AI in Healthcare",
          description: "Introduction to artificial intelligence applications in clinical practice"
        }
      ]}
      curriculum={[
        "Introduction to Digital Health Technologies",
        "Electronic Health Record Systems Navigation",
        "Telemedicine Best Practices and Platforms",
        "Healthcare Data Analytics and Reporting",
        "Mobile Health Applications for Patient Care",
        "Wearable Technology and Remote Monitoring",
        "Patient Data Security and Privacy",
        "Artificial Intelligence in Clinical Decision Support",
        "Digital Health Workflow Integration"
      ]}
      outcomes={[
        "Navigate and utilize EHR systems efficiently",
        "Conduct effective telemedicine consultations",
        "Analyze healthcare data for informed decision-making",
        "Implement mobile health solutions in patient care",
        "Ensure patient data security and privacy compliance",
        "Understand AI applications in healthcare delivery"
      ]}
    />
  );
}
