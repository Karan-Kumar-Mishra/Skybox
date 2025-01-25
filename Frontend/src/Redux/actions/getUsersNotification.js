import toast from "react-hot-toast";
export const getUsersNotification = () => {
    return async (dispatch,getState) => {
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
      let a= await fetch(process.env.REACT_APP_BACKEND_URL+'/getnotification',option);
      let res= await a.json()
    
      if(res.status==="ok")
      {
        toast.success("New note is save successfully !");
      }
      dispatch({type:'GET_USERS_NOTIFICATION',payload:res})
    };
};
