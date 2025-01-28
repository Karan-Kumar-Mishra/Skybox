import React, { useEffect } from 'react';
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { getUsersNotification } from '../Redux/actions/getUsersNotification';

export default function NotificationListDashboard() {
  const store_data = useSelector((state) => state.Data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersNotification());
    console.log("render the notification coponents");
  }, []);

  return (
    <div>
      {store_data.UserData.notifications && store_data.UserData.notifications.map((item) => (
        <div key={nanoid()} className="messages">
          <div className="message bg-slate-800 text-white">
            <div className="message-icon"></div>
            <div className="message-info">
              <div className="message-header">
                <div className="message-title">Skybox</div>
                <div className="message-time">{(item.data).substring(0, 25)}</div>
              </div>
              <div className="message-content">{item.text}</div>
            </div>
          </div>
        </div>
      ))
      }

    </div>
  );
}
