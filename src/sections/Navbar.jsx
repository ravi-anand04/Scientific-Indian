import React from "react";
import { topics } from "../constants/index";
import Button from "../components/Button";
import logo from "../assets/Gray Creative Technology Logo.gif";

const Navbar = () => {
  return (
    <div id="navbar" className="sticky top-0 z-10 bg-slate-200">
      <div className="header flex mx-10 justify-between max-md:justify-center p-8 bg-slate-200 border-b-2 border-slate-200">
        <Button label="Newsletter" color="bg-coral-red" textColor="white" px="4" py="2" />
        <h1 className="font-mono font-semibold leading-8 tracking-wide text-4xl text-center">
          <span className="max-sm:leading-10 font-georgia">Space Chariot</span>
        </h1>
        {/* <img src={logo} className="w-48 " alt="" /> */}
        <div className="max-md:hidden access flex items-center gap-2">
          <h3 className="">Sign Up |</h3>
          <h3 className="">Account</h3>
        </div>
      </div>
      {/* <div className="bg-black h-0.5 opacity-5"></div> */}
      <ul className="topics flex flex-wrap font-semibold justify-center gap-[2%] max-sm:hidden bg-slate-100 p-5 m-2 border-b-2 border-slate-200">
        {topics.map((topic) => (
          <li
            className="px-4 py-2 hover:rounded-full hover:bg-blue-200"
            key={topic.id}
          >
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
