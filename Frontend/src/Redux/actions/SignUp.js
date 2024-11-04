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
      let a= await fetch('http://127.0.0.1/signup',option);
      let res= await a.json()
      console.log("SignUp=>",res)
  };
};
