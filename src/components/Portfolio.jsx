import React, { useEffect, useState } from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/project5.png";
import Project6 from "../assets/project6.png";
import { AiFillGithub } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    img: Project1,
    title: "Project #1",
    description: "UI for frontend development using react",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: Project2,
    title: "Project #2",
    description: "UI for frontend development using react",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: Project3,
    title: "Project #3",
    description: "UI for frontend development using react",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: Project4,
    title: "Project #4",
    description: "UI for frontend development using react",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: Project5,
    title: "Project #5",
    description: "UI for frontend development using react",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: Project6,
    title: "Project #6",
    description: "UI for frontend development using react",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col items-center"
      id="portfolio"
    >
      <div data-aos="fade-down">
        <h2 className="text-white mb-5">MY RECENT PROJECTS</h2>
      </div> 
      <div
        className="glass p-6 w-full border-2 max-w-[600px]"
        data-aos="zoom-out"
      >
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>
        <p className="text-gray-200 my-4">
          {projects[currentProject].description}
        </p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].links.site}
            className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-200"
          >
            View Site
          </a>
          <a
            href={projects[currentProject].links.github}
            className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-200"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>

      <ul className="mt-10 flex flex-row flex-wrap justify-center gap-4 md:gap-1">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
              currentProject === index ? "bg-slate-900" : ""
            }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
