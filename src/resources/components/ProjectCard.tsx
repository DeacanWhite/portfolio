import React from "react";
import { technologies } from "./TechList";

interface ProjectCardProps {
    title: string;
    date: string;
    description: string;
    techUsed: string[]; 
    image: string;
    websiteLink?: string;
    githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, description, techUsed, image, websiteLink, githubLink }) => {
  // Filter the technologies array to include only the ones used in this project
  const filteredTechnologies = technologies.filter((tech) =>
    techUsed.includes(tech.name)
  );

  return (
    <div className="flex flex-col rounded-lg xl:flex-row gap-5">
        <div>
            <img src={image} alt={title} className="w-full h-full object-contain border rounded-lg xl:w-230" />
        </div>
        <div>
            <h3 className="text-2xl font-bold mt-4 mb-1">{title}</h3>
            <p className="text-gray-500 mb-3">{date}</p>
            <p className="text-gray-700 mb-4 xl:max-w-5xl">{description}</p>
            <div className="flex flex-wrap gap-2">
                {filteredTechnologies.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 rounded-lg shadow-sm bg-white p-2">
                    <img src={tech.iconSrc} alt={tech.name} className="w-6 h-6" />
                    <span className="text-sm text-gray-800">{tech.name}</span>
                </div>
                ))}
            </div>
            <div className="flex gap-3 pt-6">
                {websiteLink && (
                    <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                       <button className="outlined-button text-white bg-black">View Website</button>
                    </a>
                )}
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        <button className="outlined-button">View GitHub</button>
                    </a>
                )} 
            </div>
      </div>
    </div>
  );
};

export default ProjectCard;