import WorkshopTemplate from "../../components/WorkshopTemplate";

export default function FinanceWorkshop() {
  return (
    <WorkshopTemplate
      title="Finance Workshop"
      date="June 20, 2026"
      time="To Be Confirmed"
      duration="1 Day"
      capacity="100 Participants"
      level="Hospital Managers · Nurse Managers · HOD (Heads of Department) · Any Hospital Background Managers"
      instructor="Experienced Healthcare & Finance Professionals"
      price="₹599"
      description="Curious to understand the financial side of healthcare and strengthen your decision-making skills? This workshop offers a valuable opportunity to gain expert insights, enhance financial awareness, and build confidence in managing financial aspects effectively."
      workshopId="finance-workshop"
      category="Finance"
      image="/assets/workshops-new/finance.png"
      highlights={[
        {
          title: "Interactive Expert-Led Sessions",
          description: "Interactive sessions led by experienced healthcare and finance professionals."
        },
        {
          title: "Hospital Financial Management",
          description: "Practical insights into hospital financial management and operational efficiency."
        },
        {
          title: "Budgeting and Cost Optimization",
          description: "Engaging discussions on budgeting, cost optimization, and resource utilization."
        },
        {
          title: "Key Financial Concepts",
          description: "Exposure to key financial concepts essential for healthcare professionals."
        },
        {
          title: "Networking Opportunities",
          description: "Networking opportunities with doctors, administrators, and healthcare leaders."
        },
        {
          title: "Participant-Focused Learning",
          description: "Participant-focused learning with practical examples and industry applications."
        }
      ]}
      curriculum={[
        "Healthcare Finance Fundamentals",
        "Hospital Financial Management and Operational Efficiency",
        "Budgeting and Financial Planning in Healthcare",
        "Cost Optimization and Resource Utilization",
        "Key Financial Concepts for Healthcare Professionals",
        "Interpreting Financial Statements in Healthcare",
        "Strategies for Sustainable Growth",
        "Practical Financial Problem-Solving in Real-World Scenarios"
      ]}
      outcomes={[
        "Develop a better understanding of healthcare finance fundamentals.",
        "Improve decision-making skills related to hospital operations and management.",
        "Gain knowledge about budgeting and financial planning in healthcare settings.",
        "Understand the importance of operational efficiency and sustainable growth.",
        "Learn strategies for optimizing resources and improving productivity.",
        "Build confidence in interpreting financial aspects of healthcare management.",
        "Enhance leadership and analytical thinking in professional practice.",
        "Apply practical financial concepts to real-world healthcare scenarios."
      ]}
    />
  );
}
