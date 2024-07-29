import React from "react";
import { IoIosLogIn } from "react-icons/io";

const title = "The place for Minecraft"
const describe = "Discover, play, and share Minecraft content through our open-source platform built for the community."


export const Hero = () => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://i.imgur.com/uWTK3d4.jpeg')]  dark:bg-[url('https://i.imgur.com/TLDL4Lu.jpeg')] dark:text-white dark:bg-gray-500 bg-blend-multiply">
  <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">{ title }</h1>
    <h2 className="mb-6 text-2xl font-normal text-indigo-600 lg:text-xl sm:px-16 lg:px-48">The place for Minecraft</h2>
    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{ describe }</p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
      <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center   rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
      Discover mods
      </a>
      <a href="#" className="inline-flex justify-cente items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border dark:border-white  focus:ring-4 ">
      Sign up
      <IoIosLogIn  className="ml-1"/>
      </a>  
    </div>
  </div>
</section>

  );
};
