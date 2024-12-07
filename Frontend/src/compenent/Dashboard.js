import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Notes from "./Notes";
import NotificationList from "./NotificationList";
import { useSelector, useDispatch } from "react-redux";
import { setshowNotificationList } from "../Redux/actions/SetshowNotificationList";
export default function Dashbord() {
  const store_data = useSelector((state)=>state.Data.ComponentData);
  const dispatch= useDispatch();
  const [shownote,setshownote]=useState(false);
  const [shownotification,setshownotification]=useState(false);
  useEffect(()=>{
    setshownote(store_data.showNotesList);
    setshownotification(store_data.showNotificationList);
    console.log(store_data)
  },[store_data])
  
  return (
    <div className="h-screen bg-gradient-to-r from-black to-indigo-900">
      <div className="main flex flex-row font-semibold content-center text-white">
        <SideBar/>
        {shownote ? <Notes/> :<NotificationList/>}
      </div>
    </div>
  );
}
