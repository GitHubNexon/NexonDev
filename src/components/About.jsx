import React, { useEffect } from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project7.png";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiGithubBadge,
  DiAndroid,
  DiJavascript,
  DiIllustrator,
  DiPhp,
  DiPhotoshop,
  DiDotnet,
  DiGit,
  DiWindows,
  DiNpm,
  DiPython,
  DiSnapSvg,
  DiNetmagazine,
  DiUnitySmall,
  DiNodejs,
} from "react-icons/di";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center justify-center"
      id="about"
    >
      {/* Skills Section */}
      <div
        className="md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-6 justify-center items-center"
        data-aos="zoom-out-down"
      >
        <DiHtml5 className="text-orange-600 text-4xl" />
        <DiCss3 className="text-blue-600 text-4xl" />
        <DiJavascript className="text-yellow-600 text-4xl" />
        <DiPhp className="text-violet-600 text-4xl" />
        <DiSass className="text-purple-600 text-4xl" />
        <DiBootstrap className="text-purple-600 text-4xl" />
        <DiReact className="text-blue-600 text-4xl" />
        <DiNodejs className="text-green-600 text-4xl" />
        <DiGithubBadge className="text-sky-600 text-4xl" />
        <DiGit className="text-blue-600 text-4xl" />
        <DiIllustrator className="text-yellow-600 text-4xl" />
        <DiPhotoshop className="text-cyan-600 text-4xl" />
        <DiDotnet className="text-purple-600 text-4xl" />
        <DiPython className="text-teal-600 text-4xl" />
        <DiNpm className="text-red-600 text-4xl" />
        <DiAndroid className="text-green-600 text-4xl" />
        <DiWindows className="text-cyan-600 text-4xl" />
        <DiSnapSvg className="text-teal-600 text-4xl" />
        <DiUnitySmall className="text-gray-600 text-4xl" />
      </div>

      {/* Project 1 */}
      <div className="relative group mb-8 md:mb-0">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div
          className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg"
          data-aos="flip-up"
        >
          <img src={Project1} alt="Project1" className="rounded-lg w-full" />
        </div>
      </div>

      {/* Skills Text */}
      <div
        className="p-6 flex flex-col items-center text-center md:text-left"
        data-aos="zoom-in-up"
      >
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300 mb-4">
          Excellent interpersonal skills, demonstrated by communicating with
          clients, colleagues, and non-technical professionals on a daily basis.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600 text-4xl" />
          <DiCss3 className="text-blue-600 text-4xl" />
          <DiJavascript className="text-yellow-600 text-4xl" />
          <DiPhp className="text-violet-600 text-4xl" />
          <DiSass className="text-purple-600 text-4xl" />
          <DiBootstrap className="text-purple-600 text-4xl" />
          <DiReact className="text-blue-600 text-4xl" />
          <DiNodejs className="text-green-600 text-4xl" />
          <DiGithubBadge className="text-sky-600 text-4xl" />
          <DiGit className="text-blue-600 text-4xl" />
          <DiIllustrator className="text-yellow-600 text-4xl" />
          <DiPhotoshop className="text-cyan-600 text-4xl" />
          <DiDotnet className="text-purple-600 text-4xl" />
          <DiPython className="text-teal-600 text-4xl" />
          <DiNpm className="text-red-600 text-4xl" />
          <DiAndroid className="text-green-600 text-4xl" />
          <DiWindows className="text-cyan-600 text-4xl" />
          <DiSnapSvg className="text-teal-600 text-4xl" />
          <DiUnitySmall className="text-gray-600 text-4xl" />
        </div>
      </div>

      {/* Graphic Visual Design */}
      <div className="relative group mb-8 md:mb-0">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div
          className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg"
          data-aos="flip-up"
        >
          <img src={Project2} alt="Project2" className="rounded-lg w-full" />
        </div>
      </div>

      <div
        className="p-6 flex flex-col items-center text-center md:text-left"
        data-aos="zoom-in-up"
      >
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Graphic Visual Design
        </h2>
        <p className="text-gray-300 mb-4">
          Graphic visual design is a vital discipline that combines artistry and
          functionality to convey messages effectively.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiIllustrator className="text-yellow-600 text-4xl" />
          <DiPhotoshop className="text-cyan-600 text-4xl" />
          <DiSnapSvg className="text-teal-600 text-4xl" />
          <DiUnitySmall className="text-gray-600 text-4xl" />
        </div>
      </div>

      {/* Full Stack Development */}
      <div className="relative group mb-8 md:mb-0">
        <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div
          className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg"
          data-aos="flip-up"
        >
          <img src={Project3} alt="Project3" className="rounded-lg w-full" />
        </div>
      </div>

      <div
        className="p-6 flex flex-col items-center text-center md:text-left"
        data-aos="zoom-in-up"
      >
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Full Stack Development
        </h2>
        <p className="text-gray-300 mb-4">
          Full stack development involves working with both the front-end and
          back-end aspects of web applications, providing a comprehensive
          approach to software creation.
        </p>
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          <DiHtml5 className="text-orange-600 text-4xl" />
          <DiCss3 className="text-blue-600 text-4xl" />
          <DiJavascript className="text-yellow-600 text-4xl" />
          <DiPhp className="text-violet-600 text-4xl" />
          <DiSass className="text-purple-600 text-4xl" />
          <DiBootstrap className="text-purple-600 text-4xl" />
          <DiReact className="text-blue-600 text-4xl" />
          <DiNodejs className="text-green-600 text-4xl" />
          <DiGithubBadge className="text-sky-600 text-4xl" />
          <DiGit className="text-blue-600 text-4xl" />
          <DiDotnet className="text-purple-600 text-4xl" />
          <DiPython className="text-teal-600 text-4xl" />
          <DiNpm className="text-red-600 text-4xl" />
        </div>
      </div>
      <hr className="my-8 border-t-2 border-gray-600 w-full" />
      <hr className="my-8 border-t-2 border-gray-600 w-full" />
    </div>
  );
};

export default About;
