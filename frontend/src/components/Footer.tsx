import { FaRobot } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2">
              <FaRobot className="text-blue-500 text-3xl" />
              <span className="font-bold text-2xl">
                AI & Robotics
              </span>
            </div>

            <p className="mt-4 text-slate-400 leading-7 max-w-md">
              Inspiring young innovators through hands-on learning
              in Artificial Intelligence, Robotics, and Coding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <a href="#details" className="hover:text-white">
                Workshop Details
              </a>

              <a href="#outcomes" className="hover:text-white">
                Learning Outcomes
              </a>

              <a href="#faq" className="hover:text-white">
                FAQ
              </a>

              <a href="#register" className="hover:text-white">
                Register
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500">
          © 2026 AI & Robotics Summer Workshop. All rights reserved.
        </div>

      </div>
    </footer>
  );
}