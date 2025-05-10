import Navigation from "../components/Navigation";
import profilePic from "../../assets/deacan_portfolio_logo.png";
import TextScramble from "../components/TextScramble";
import TechList from "../components/TechList";
import ProjectCard from "../components/ProjectCard";

export default function Landing() {
  return (
    <div className="Landing mx-4 h-screen sm:mx-8 md:mx-16 lg:mx-32 xl:mx-68">
      <Navigation />
      <div className="Hero flex flex-col items-center justify-center pb-18 h-[80%] lg:grid-cols-2 gap-4 lg:flex-row-reverse lg:justify-evenly">
        <div className="flex">
          <img
            src={profilePic}
            alt="Profile"
            className="w-50 h-50  object-contain md:w-100 md:h-100 lg:w-128 lg:h-128 xl:w-150" 
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl text-center text-black-600 md:text-5xl lg:text-left">
            Hey there, I'm <span className="text-brand-green">Deacan</span>
          </h1>
        <TextScramble />
          <p className="w-full text-center pt-7 md:max-w-2xl lg:text-left">
            Passionate FullStack Web Developer from Melbourne, pushing the
            boundaries of web technology to create immersive digital
            experiences.
          </p>
          <div className="flex gap-3 pt-5 justify-center lg:justify-start">
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
        <p className="text-center">
          ...and many more!
        </p>
      </div>
      <div className="projects flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-left mt-20">
          Some Recent <span className="text-brand-green">Projects</span>
        </h2>
        <p className="text-left">Check out our latest projects.</p>
        <div className="grid gap-20 grid-row-1 sm:grid-row-2 lg:grid-row-3">
          <ProjectCard
            title="Blog Platform"
            date= "November 2023"
            description="Offset Communications Africa’s website really allows them to stand out in the PR sector. It shows their works and case studies — highlighting their expertise and educating users about the company philosophy."
            techUsed={["Django", "PostgreSQL", "Python"]}
            image="https://opengraph.githubassets.com/c89426dd782f48b1b74bc18eb87ed41483282c3bd14967ab6df108b3cdc8c242/Rawallon/Ecommerce-react-redux-app"
            websiteLink="https://example.com"
          />
          <ProjectCard
            title="Suburban Bikes"
            date= "November 2023"
            description="Offset Communications Africa’s website really allows them to stand out in the PR sector. It shows their works and case studies — highlighting their expertise and educating users about the company philosophy."
            techUsed={["TypeScript", "PostgreSQL", "C++"]}
            image="https://i.ytimg.com/vi/P3aKRdUyr0s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDK63LPwE7rW69cHC5joup_o-EpMw"
            websiteLink="https://example.com"
            githubLink="https://github.com/DeacanWhite/Suburbn-Bikes-Laravel-Eccommerce-Website"
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center mt-6 mb-20">
          <p className="text-center">
            Want to see more?
          </p>
          <div>
            <button className="outlined-button">View All Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}
