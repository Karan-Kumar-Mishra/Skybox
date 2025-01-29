import toast from "react-hot-toast";
export const deleteNotification = (message_id) => {
  return async (dispatch, getState) => {
    const state = await getState();
    let option={
      method :"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          name:state.Data.UserData.name,
          notification_id:message_id
      })
    }
    
    let a= await fetch(process.env.REACT_APP_BACKEND_URL+'/deletenotification',option);
    let res= await a.json()
    if (res.status === "ok") {
      toast.success("Notification is delete successfully !");
    }
    dispatch({ type: "DELETE_USER", payload: res });
  };
};