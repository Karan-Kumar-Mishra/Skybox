import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import toast,{Toaster} from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Redux/actions/DeleteUser";
export default function Profile() {
  const { isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  const dispatch=useDispatch();
  const store_data = useSelector((state)=>state.Data);
  function removeUser()
  {
    dispatch(deleteUser());
    toast.success("Your account is delete successfully !");
    logout()
  }
  return (
    <>
    <Toaster
        toastOptions={{
          style: {
            background: "black",
            color: "white",
          },
        }}
      />
      <div className="flex min-h-screen relative items-center justify-center w-full bg-slate-700">
        <div className="bg-slate-900 rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div className="text-gray-500 group-hover:scale-105 transition-all">
            <img
              src={store_data.UserData.more_info.picture}
              alt="User image"
              className="rounded-full h-40 m-2"
            />
          </div>
          <div className="group-hover:pb-10 h-40 w-96 transition-all duration-500 delay-200">
            <h1 className="font-semibold text-white">{store_data.UserData.name}</h1>
            <p className="text-gray-400 text-sm">{store_data.UserData.email}</p>
          </div>
          <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
              <a className="hover:scale-110 transition-all duration-500 delay-200">
                <button className="p-2"
                onClick={removeUser}
                >Delete</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
