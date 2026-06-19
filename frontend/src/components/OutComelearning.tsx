


const outcomes = [
  "Understand the basics of Artificial Intelligence",
  "Learn how robots work",
  "Build simple robotics projects",
  "Develop coding skills",
  "Create mini AI projects",
  "Improve problem-solving abilities",
];
export default function OutComelearning() {
  return (
    <section id="outcomes" className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-4">
      Learning Outcomes
    </h2>

    <p className="text-center text-gray-600 mb-12">
      By the end of this workshop, students will gain practical
      knowledge of AI, robotics, and coding through hands-on projects.
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      {outcomes.map((item) => (
        <div
          key={item}
          className="bg-slate-950 text-white p-5 rounded-xl shadow-md flex items-center gap-3"
        >
          <span className="text-green-500 text-xl">✓</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
