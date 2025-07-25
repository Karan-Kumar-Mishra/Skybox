import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Box from "./Box";
import toast, { Toaster } from "react-hot-toast";
export default function Start() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      <Toaster />

      <div className="relative isolate overflow-hidden  bg-gray-900 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 h-screen w-full">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>

        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity.
            <br />
            Start using our Skybox app today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Skybox, we believe that your notes are more than just
            text—they're the building blocks of your ideas, projects, and
            dreams.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <button
              href="/home"
              className="border-solid p-4 rounded-3xl text-white  bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
              onClick={() => loginWithRedirect()}
            >
              Get started
            </button>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-20 ">
          <Box />
        </div>
      </div>
    </div>
  );
}
