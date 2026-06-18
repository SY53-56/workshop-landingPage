interface workshop{
    title?:string,
    data?:string
}



const workshopStats:workshop[] = [
  { title: "Age Group", data: "8–14 Years" },
  { title: "Duration", data: "4 Weeks" },
  { title: "Mode", data: "Online" },
  { title: "Fee", data: "₹2,999" },
  { title: "Start Date", data: "15 July 2026" },
];

const learningGoals:string[] = [
  "Build working robots with guided kits",
  "Learn AI concepts through playful projects",
  "Practice coding using visual and text tools",
  "Develop teamwork, logic, and creative thinking",
];
export {workshopStats,learningGoals}