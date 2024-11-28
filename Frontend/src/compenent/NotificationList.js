import React from 'react'
import { nanoid } from "nanoid";
export default function NotificationList() {
  return (
    <div>
           <li
              key={nanoid()}
              className="border-solid p-3 m-2 rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto m-2  ">
                  <p
                   
                    className="text-sm font-semibold  leading-6 text-white"
                  >
                    
                  </p>
                </div>
              </div>
            </li>
    </div>
  )
}
