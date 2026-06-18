import Card from "./ui/Card";
import {workshopStats,learningGoals} from "../data/workShopDetailData"


export default function Workshop() {
  return (
    <section id="details" className="relative overflow-hidden py-24 px-6 bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            STEM + Creativity
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Workshop Details
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-800 text-lg leading-8">
            The AI & Robotics Summer Workshop invites young builders to explore technology through hands-on projects, guided lessons, and design challenges. Every session is crafted to make learning exciting, visual, and deeply practical.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900 p-8 shadow-[0_35px_120px_-40px_rgba(15,23,42,0.85)] backdrop-blur-xl">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-800/90 p-6 border border-cyan-400/10">
                <p className="text-slate-300 text-base leading-7">
                  Through interactive lessons, creative challenges, and real robot-building exercises, students will discover how artificial intelligence and robotics work together. The workshop is ideal for curious minds who love to tinker, code, and imagine the future.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">What students will learn</h3>
                <ul className="grid gap-3">
                  {learningGoals.map((goal) => (
                    <li key={goal} className="flex gap-3 rounded-3xl border border-white/10 bg-slate-800/80 px-5 py-4 text-slate-200">
                      <span className="mt-1 h-3.5 w-3.5 rounded-full bg-emerald-400" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-cyan-500/10 via-slate-900/70 to-violet-500/10 border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Early bird advantage</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Secure your spot with a joyful learning journey</h3>
              <p className="mt-4 text-slate-300 leading-7">
                Students gain confidence, problem-solving skills, and a practical introduction to future-ready tech through exciting team activities and personal project time.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {workshopStats.map((item, index) => (
                <Card
                  key={item.title}
                  title={item.title}
                  data={item.data}
                  className={index === 1 || index === 3 ? "border-cyan-400/20 bg-slate-900" : "border-violet-400/15 bg-slate-900"}
                />
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-xl shadow-cyan-500/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Join the adventure</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Next batch starts soon</p>
                </div>
                <div className="rounded-full bg-cyan-500/15 px-4 py-2 text-cyan-200 text-sm font-semibold">
                  Limited seats
                </div>
              </div>
              <p className="mt-5 text-slate-400 leading-7">
                Save your seat for a hands-on workshop that blends robotics, coding, and AI puzzles — perfect for beginners and young innovators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}