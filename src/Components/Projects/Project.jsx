import React from "react";
import ProjectGrid from "./ProjectGrid/ProjectGrid";

import projects from "../../Data/Project/projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  return (
    // Page wrapper
    <div className="py-16 px-4 flex flex-col items-center min-h-screen bg-[linear-gradient(180deg,#fff7e6,#ffe6cc)] dark:bg-[linear-gradient(180deg,#0f1724,#05060a_60%)] text-gray-900 dark:text-white">
      
      <section>
        {/* Section title */}
        <h2 className="text-center text-xl mb-12 font-bold md:text-2xl lg:text-4xl">
          Projects
        </h2>

        {/* Projects grid */}
        <div
          className="grid max-[900px]:grid-cols-1 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-8 w-full max-w-[1200px] px-4 my-8 items-start mx-auto"
          role="region"
          aria-label="Projects section listing projects and details"
        >
          {projects.map((project) => (
            <ProjectGrid
              key={project.id}
              Titel={project.title}
              ImgSrc={project.imgSrc}
              ProjectLink={project.projectLink}
              LiveLink={project.liveLink}
              Tools={project.tools}
              Description={project.description}
            />
          ))}
        </div>

        {/* GitHub link */}
        <div className="flex justify-center mt-20 max-[900px]:mt-12">
          <a
            href="https://github.com/sayantan-pachal/FCC_Project"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 max-[900px]:px-4 max-[900px]:py-2 rounded-full text-[1rem] max-[900px]:text-[0.6rem] font-sans text-[#f0f0f0] bg-[#444] transition duration-300 ease-out hover:bg-[#b32a38] hover:scale-[1.03]"
          >
            Show all <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </section>
    </div>
  );
}
