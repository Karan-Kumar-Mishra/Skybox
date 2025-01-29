import React, { useEffect, useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { getUsersNotification } from '../Redux/actions/getUsersNotification';
import { deleteNotification } from '../Redux/actions/deleteNotification';
import { deleteAllNotification } from '../Redux/actions/deleteAllNotification';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function NotificationListDashboard() {
  const store_data = useSelector((state) => state.Data);
  const dispatch = useDispatch();
  const [count, secount] = useState(0);// for re render the component show that get current notification

  useEffect(() => {
    dispatch(getUsersNotification());
    console.log(store_data.UserData.notifications.length);

  }, [count]);

  function removenotification(id) {
    dispatch(deleteNotification(id)).then(() => {
      secount(count + 1)
    })
  }
  function removeAllnotification() {
    dispatch(deleteAllNotification()).then(() => {
      secount(count + 1)
    })
  }
  return (
    <div>
      {store_data.UserData.notifications.length > 0 ? store_data.UserData.notifications.map((item) => (

        <div key={nanoid()} className="messages">
          <div className="message bg-slate-800  text-white">
            <div className="message-icon"></div>
            <div className="message-info">
              <div className="message-header">
                <div className="message-title">Skybox</div>
                <div className="message-time">{(item.data).substring(0, 25)}</div>
              </div>
              <div className="message-content">{item.text}

              </div>
              <div onClick={() => {
                removenotification(item.id);
              }} className='mt-4  font-semibold bg-slate-900 p-2 rounded-2xl'>
                Delete
              </div>
            </div>
          </div>
        </div>
     )) : <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      }
      {
        store_data.UserData.notifications.length > 0 && (<button className='m-2 text-1xl font-extrabold z-50 shadow-2xl'
          onClick={removeAllnotification} >
          Clear all
        </button>)
      }
    </div>
  );
}
