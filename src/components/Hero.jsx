import React, { useEffect } from "react";
import profilePic from "../assets/profile-pic.png";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="max-w-[1250px] px-5 md:px-20 mb-8 md:mb-32 mt-14 gap-8 mx-auto">
      <div className="grid md:grid-cols-2 place-items-center">
        <div className="max-w-[800px]" data-aos="fade-right">
          <p className="text-gray-200 md:text-6xl text-2xl tracking-tight">
            HEY, I AM <br /> <span>JOHN MARK</span> <br />
            <TypeAnimation
              sequence={[
                "FULL STACK DEVELOPER",
                1000,
                "UI/UX",
                1000,
                "GRAPHIC AND VISUAL DESIGNER",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-bold italic"
            />
          </p>
          <br />
          <div data-aos="zoom-in">
            <h2 className="text-gray-300" >
              "I love making things look great and work well. My design
              experience gives me a strong base for creating cool solutions
              while I’m learning more about Full Stack Development."
            </h2>
          </div>

          <br />
          <div className="flex flex-row gap-4 mb-4 md:mb-0" data-aos="zoom-in">
            <button className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-full md:w-1/2 mt-6 p-2 bg-gradient-to-r from-[#6EACDA] via-[#335a78] to-[#03346E] rounded-xl">
              Download Resume
            </button>
            <button className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-full md:w-1/2 mt-6 p-2 border border-gray-400 rounded-xl">
              View Projects
            </button>
          </div>
        </div>
        <div
          className="order-2 md:order-1 w-full flex justify-center"
          data-aos="fade-up"
        >
          <img
            src={profilePic}
            className="w-[300px] md:w-[500px]"
            alt="Profile"
          />
        </div>
      </div>
      <div className="col-span-2 flex flex-wrap justify-center items-center gap-6 mt-8">
        <div
          className="bg-gray-800 text-gray-300 p-6 rounded-lg border border-gray-600 shadow-lg max-w-lg"
          data-aos="flip-up"
        >
          <p className="text-center italic">
            “You’re not a real programmer until you’ve spent a whole day trying
            to figure out why your code isn’t working, only to find out you’ve
            been writing in the wrong file.” - Anonymous
          </p>
        </div>
        <div
          className="bg-gray-800 text-gray-300 p-6 rounded-lg border border-gray-600 shadow-lg max-w-lg"
          data-aos="flip-up"
        >
          <p className="text-center italic">
            “There are only two hard things in computer science: cache
            invalidation and naming things.” – Phil Karlton
          </p>
        </div>
        <div
          className="bg-gray-800 text-gray-300 p-6 rounded-lg border border-gray-600 shadow-lg max-w-lg"
          data-aos="flip-up"
        >
          <p className="text-center italic">
            “The most damaging phrase in the language is ‘We’ve always done it
            this way.’” – Grace Hopper
          </p>
        </div>
      </div>
      <hr className="border-gray-400 shadow-md my-8" />
    </div>
  );
};

export default Hero;
