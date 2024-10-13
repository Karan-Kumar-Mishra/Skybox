import React, { useEffect } from "react";
import DefaultUser from './Images/DefaultUser.png'
import { useAuth0 } from "@auth0/auth0-react";
export default function Profile() {
  const { isAuthenticated,user } = useAuth0();
  useEffect(()=>{
    if(isAuthenticated)
    {
      DefaultUser=user.picture
      console.log("is authenticated",user.picture,DefaultUser)
    }
  },[user])
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-black to-indigo-900 flex items-center justify-center flex-col  ">
      <div className="images  ">
        <img
          src={DefaultUser}
          alt="User image"
          className="rounded-full h-36 "
        />
      </div>
      <div className="content m-2 flex-col justify-center gap-2 content-center text-center text-white font-bold">
       
        <h1>{user.name}</h1> 
        <h1>{user.email}</h1> 
          <div className="buttons m-4">
            <button className="border-solid p-3 rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black" >Delete Account</button>
          </div>
      </div>
    </div>
  );
}
