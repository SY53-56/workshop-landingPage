import { FaRobot } from "react-icons/fa";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="px-5 lg:px-28 relative py-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <FaRobot className="text-indigo-600 text-2xl" />
        <span className="font-bold text-2xl">AI & Robotics</span>
      </div>

      {/* Desktop Menu */}
      <div className="gap-5 hidden lg:flex">
        <a href="#details">Details</a>
        <a href="#details">Workshop</a>
        <a href="#outcomes">Outcomes</a>
        <a href="#faq">FAQ</a>
      </div>

      <div className="hidden lg:flex">
        <a href="#register" className="px-4 py-2 border-0 bg-slate-950 rounded-lg text-white">Enroll Now</a>
      </div>

      {/* Mobile Toggle */}
      <div
        className="flex lg:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <X /> : <MenuIcon />}
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden  
   
    animate-in slide-in-from-top">
          <div className="flex flex-col p-4 gap-4">
            <a href="#details">Details</a>
            <a href="#details">Workshop</a>
            <a href="#outcomes">Outcomes</a>
            <a href="#faq">FAQ</a>
            <a href="#register">Enroll Now</a>
          </div>
        </div>
      )}
    </nav>
  );
}