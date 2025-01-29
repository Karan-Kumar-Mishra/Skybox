import toast from "react-hot-toast";
export const deleteAllNotification = () => {
  return async (dispatch, getState) => {
    const state = await getState();
    let option={
      method :"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          name:state.Data.UserData.name
      })
    }
    
    let a= await fetch(process.env.REACT_APP_BACKEND_URL+'/deleteAllnotification',option);
    let res= await a.json()
    if (res.status === "ok") {
      toast.success("Notification is clear successfully !");
    }
    dispatch({ type: "DELETE_USER_ALL_NOTIFICATION", payload: res });
  };
};