import React, { useEffect, useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { getUsersNotification } from '../Redux/actions/getUsersNotification';

export default function NotificationListDashboard() {
  const store_data = useSelector((state) => state.Data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersNotification());
    console.log("render the notification coponents");
    
  }, [dispatch]);

  return (
    <div>
      <div className='bg-transparent text-black w-[50rem]  flex flex-col gap-2'>
        {store_data.UserData.notifications && store_data.UserData.notifications.map((item) => (
          <div
            key={nanoid()}
            className="w-[40rem] border-solid text-white flex flex-row gap-5  p-6 m-2 rounded-full bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
          >
            <h1>{item.text}</h1>
            <p>{item.data}</p>
          </div>
        ))
        }
      </div>
    </div>
  );
}
