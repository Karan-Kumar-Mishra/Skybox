import React, { useState } from 'react'

export default function NotificationListDashboard() {
  const[notification ,setnotification]=useState([1,2,3,4,5,6,7,8,9])

  return (
    <div>
      <div className='bg-transparent text-black w-[50rem]  flex flex-col gap-2'>

      {notification.map((item)=>{
        return(
          <h1
          className="border-solid text-white p-6 m-2 rounded-full bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
           >{item}</h1>
        )
      })}
      </div>
    </div>
  )
}
