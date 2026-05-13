import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function LeadershipManagementWorkshop() {
  return (
    <WorkshopTemplate
      title="Healthcare Leadership & Team Management"
      date="June 22, 2026"
      time="10:00 AM - 5:00 PM"
      duration="1 Day"
      capacity="25 Participants"
      level="Advanced"
      instructor="Industry Expert Panel"
      price="₹6,500"
      description="Develop leadership skills essential for managing healthcare teams, including conflict resolution, performance management, and strategic planning."
      workshopId="leadership-management"
      category="Management"
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
      highlights={[
        {
          title: "Strategic Leadership",
          description: "Develop strategic thinking and decision-making skills for healthcare leadership roles"
        },
        {
          title: "Team Building",
          description: "Create high-performing teams through effective collaboration and motivation strategies"
        },
        {
          title: "Conflict Resolution",
          description: "Master techniques to resolve conflicts and maintain positive team dynamics"
        },
        {
          title: "Performance Management",
          description: "Learn to set goals, provide feedback, and manage team performance effectively"
        },
        {
          title: "Change Management",
          description: "Lead organizational change initiatives with confidence and competence"
        },
        {
          title: "Emotional Intelligence",
          description: "Enhance your leadership through self-awareness and empathy"
        }
      ]}
      curriculum={[
        "Leadership Styles and Situational Leadership",
        "Building and Leading High-Performance Teams",
        "Effective Communication for Leaders",
        "Conflict Management and Resolution Strategies",
        "Performance Evaluation and Feedback Delivery",
        "Strategic Planning and Goal Setting",
        "Change Management in Healthcare Settings",
        "Emotional Intelligence and Self-Awareness",
        "Mentoring and Coaching Team Members",
        "Decision Making Under Pressure"
      ]}
      outcomes={[
        "Apply appropriate leadership styles to different situations",
        "Build and maintain high-performing healthcare teams",
        "Resolve conflicts effectively and maintain team harmony",
        "Conduct meaningful performance evaluations and provide constructive feedback",
        "Lead change initiatives with stakeholder buy-in",
        "Develop emotional intelligence for better leadership outcomes"
      ]}
    />
  );
}
