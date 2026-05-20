import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function HRWorkshop() {
  return (
    <WorkshopTemplate
      title="HR Workshop"
      date="September 2026 (TBC)"
      time="To Be Confirmed"
      duration="To Be Confirmed"
      capacity="To Be Updated"
      level="HR Professionals · Hospital Administrators · Healthcare Managers · Talent Acquisition Teams · Operations & Administrative Professionals"
      instructor="Administrative Staff College of India"
      price="To Be Updated"
      description="In today's rapidly evolving healthcare environment, Human Resources plays a critical role in building strong teams, enhancing organizational culture, and driving hospital performance. This specialized workshop, designed in collaboration with Administrative Staff College of India, empowers HR professionals with industry-relevant knowledge and practical leadership capabilities."
      workshopId="hr-workshop"
      category="Human Resources"
      image="/assets/workshops-new/Hr workshop .png"
      highlights={[
        {
          title: "Strategic HR Management",
          description: "Strategic Human Resource Management in Healthcare for organizational excellence."
        },
        {
          title: "Recruitment & Talent Acquisition",
          description: "Effective Recruitment & Talent Acquisition Techniques tailored for healthcare settings."
        },
        {
          title: "Employee Engagement & Retention",
          description: "Proven Employee Engagement & Retention Strategies to build high-performing teams."
        },
        {
          title: "Leadership & Team Management",
          description: "Leadership & Team Management Skills for HR professionals in hospital environments."
        },
        {
          title: "Negotiation & Conflict Resolution",
          description: "Negotiation and Conflict Resolution Techniques to handle workplace challenges professionally."
        },
        {
          title: "Performance Management",
          description: "Performance Management & Workforce Planning for driving operational excellence."
        }
      ]}
      curriculum={[
        "Strategic Human Resource Management in Healthcare",
        "Recruitment & Talent Acquisition Techniques",
        "Employee Engagement & Retention Strategies",
        "Leadership & Team Management Skills",
        "Negotiation and Conflict Resolution Techniques",
        "Communication Skills for HR Professionals",
        "Performance Management & Workforce Planning",
        "HR Policies, Compliance & Organizational Ethics",
        "Building Positive Workplace Culture in Hospitals",
        "Real-Time Case Studies & Practical Learning Sessions"
      ]}
      outcomes={[
        "Develop effective HR strategies aligned with hospital goals.",
        "Improve workforce management and employee productivity.",
        "Enhance communication and professional negotiation skills.",
        "Handle workplace conflicts with confidence and professionalism.",
        "Strengthen leadership and decision-making capabilities.",
        "Build stronger employee engagement and retention practices.",
        "Create a positive and performance-driven work culture.",
        "Understand modern HR practices and healthcare organizational dynamics.",
        "Contribute effectively to hospital growth and operational excellence.",
        "Apply practical HR solutions in real-time healthcare environments."
      ]}
    />
  );
}
