
import Navbar from "./Navbar";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute   inset-0   w-full h-full object-cover"
      >
        <source src="/robotic-video.mp4" type="video/mp4" />
      </video>
    <Navbar/>
      {/* Dark Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-7xl font-bold">AI & Robotics Workshop</h1>
          <p className="mt-4 text-2xl">
            Build robots, learn AI and create projects. 
          </p>
          <Button  onClick={() => console.log("clicked")} className="bg-transparent border-2 px-4 py-2 mt-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 cursor-pointer" children="enroll now"/>
        </div>
      </div>
    </section>
  );
}