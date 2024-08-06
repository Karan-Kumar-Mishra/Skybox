import React from "react";

export default function Profile() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-black to-indigo-900 flex items-center justify-center flex-col  ">
      <div className="images flex justify-center content-center">
        <img
          src="https://karan-kumar-mishra.github.io/Portfolio/karan2.png"
          alt="User image"
          className="rounded-full h-36"
        />
      </div>
      <div className="content flex justify-center content-center text-white font-bold">
       
        <h1>karan kumar mishra</h1> 
        <h1>abc@gmail.com</h1> 

      </div>
    </div>
  );
}
