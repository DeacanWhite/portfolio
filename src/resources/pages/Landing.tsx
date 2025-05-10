import Navigation from "../components/Navigation";
import profilePic from "../../assets/graphic 1.svg";
import TextScramble from "../components/TextScramble";
import TechList from "../components/TechList";

export default function Landing() {
  return (
    <div className="Landing mx-4 h-screen sm:mx-8 md:mx-16 lg:mx-32 xl:mx-68">
      <Navigation />
      <div className="Hero flex flex-col md:flex-row-reverse items-center justify-center pb-18 h-[80%] md:grid-cols-2 gap-4">
        <div className="flex">
          <img
            src={profilePic}
            alt="Profile"
            className="w-50 h-50  object-contain md:w-128 md:h-128"
          />
        </div>
        <div className="flex flex-col md:gap-8">
          <h1 className="text-4xl text-center md:text-5xl text-black-600">
            Hey there, I'm <span className="text-brand-green">Deacan</span>
          </h1>
        <TextScramble />
          <p className=" text-md w-full text-center pt-7 md: ">
            Passionate FullStack Web Developer from Melbourne, pushing the
            boundaries of web technology to create immersive digital
            experiences.
          </p>
          <div className="flex gap-3 pt-5 justify-center">
            <button className="solid-button">Contact Me</button>
            <button className="outlined-button">View Projects</button>
          </div>
        </div>
      </div>
      <div className="w-2.5/3 h-px bg-gray-300 mx-auto my-10"></div>
      <div className="about flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-left mt-5">
          About <span className="text-brand-green">Me.</span>
        </h2>
        <p className="text-left">
          A passionate Flutter developer with strong expertise in cross-platform
          apps, REST APIs, UI/UX, widgets, and state management solutions.
          Proven track record in delivering cutting-edge solutions, including
          API integration, third-party libraries, and performance optimization.
          Adept at debugging to ensure high-quality, responsive apps and An
          agile collaborator committed to staying current with industry trends.
    
          If you're seeking a skilled Flutter developer to breathe life into
          your project and exceed your expectations, I am here to collaborate
          and create magic together. Reach out, and let's transform your vision
          into a reality!
        </p>
        <p className="text-left">
        If you're seeking a skilled Flutter developer to breathe life into
        your project and exceed your expectations, I am here to collaborate
        and create magic together. Reach out, and let's transform your vision
        into a reality!
        </p>
      </div>
      <div className="technologies flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-left mt-20">
          My <span className="text-brand-blue">Technologies</span> and <span className="text-brand-orange">Tools.</span>
        </h2>
        <p className="text-left">Check out our latest projects.</p>

        <div className="flex flex-wrap gap-4 justify-start">
          <TechList />
        </div>
      </div>
      <div className="projects flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-left mt-20">
          Some Recent <span className="text-brand-green">Projects</span>
        </h2>
        <p className="text-left">Check out our latest projects.</p>
      </div>
    </div>
  );
}
