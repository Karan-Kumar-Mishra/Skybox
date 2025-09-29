import React from "react";
import Box2 from "./Box2";
import Navbar from "./Navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-gradient-to-r from-black to-indigo-900 flex items-center justify-center content-center">
        <div className="content text-white font-semibold flex items-center justify-center flex-col">

          <div className="heading text-white font-semibold text-3xl ">
            About Skybox.com
          </div>
          <div className="para text-center m-5">
            At Skybox, we believe that your Data are more than just
            text—they're the building blocks of your ideas, projects, and
            dreams. That's why we've created a platform that combines simplicity
            with powerful features to make note-taking, organizing, and
            accessing your ideas a breeze. Our mission is to provide a secure,
            accessible, and intuitive space where you can capture, store, and
            manage your notes effortlessly. Whether you're a student,
            professional, or just someone with a lot of thoughts to organize,
            Skybox is designed to adapt to your needs and keep you productive.
          </div>
          <div>
            <Box2 />
          </div>
        </div>
      </div>
    </>
  );
}
