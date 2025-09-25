import toast from "react-hot-toast";
export const signup = () => {
  return async (dispatch, getState) => {
    const state = await getState();
    let option={
        method :"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name:state.Data.UserData.name,
            email:state.Data.UserData.email,
            more_info:state.Data.UserData.more_info
        })
      }
    //  console.log("check data while signup => ",state)
      let a= await fetch(process.env.REACT_APP_BACKEND_URL+'/signup',option);
      let res= await a.json()
    //  console.log("SignUp=>",res)
  };
};
