import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <ul className="my-auto pr-6">
        <li className="flex">
          <AiFillLinkedin className="w-[70px] h-auto text-gray-300" />
          <div className="m-5">
            <h3 className="text-lg font-bold text-gray-200">Contact</h3>
            <p className="text-gray-400">Mobile: xxxx</p>
            <p className="text-gray-400">Email: xxxx</p>
          </div>
        </li>
        <li className="flex">
          <AiFillGithub className="w-[70px] h-auto text-gray-300" />
          <div className="m-5">
            <h3 className="text-lg font-bold text-gray-200">Working Hours</h3>
            <p className="text-gray-400">Mon-Fri: 4pm - 2am</p>
            <p className="text-gray-400">Sat-Sun: 6am - 5pm</p>
          </div>
        </li>
      </ul>

      <form action=""></form>
    </div>
  );
};

export default Contact;
