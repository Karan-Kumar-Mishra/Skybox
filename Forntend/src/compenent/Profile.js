import React from "react";

export default function Profile() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-black to-indigo-900 flex items-center justify-center flex-col  ">
      <div className="images  ">
        <img
          src="https://karan-kumar-mishra.github.io/Portfolio/karan2.png"
          alt="User image"
          className="rounded-full h-36 "
        />
      </div>
      <div className="content m-2 flex-col justify-center gap-2 content-center text-center text-white font-bold">
       
        <h1>Karan Kumar Mishra</h1> 
        <h1>abc@gmail.com</h1> 
          <div className="buttons m-4">
            <button className="border-solid p-3 rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black" >Delete Account</button>
          </div>
      </div>
    </div>
  );
}
