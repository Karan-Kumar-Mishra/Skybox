import React from "react";
import SideBar from "./SideBar";

export default function Dashbord() {
  return (
    <div className="h-screen  bg-gradient-to-r from-black to-indigo-900 ">
      <div className="main  flex flex-row font-semibold content-center text-white ">
        <SideBar/>
      </div>
    </div>
  );
}
