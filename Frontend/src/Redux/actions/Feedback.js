import toast from "react-hot-toast";
export const feedback = (UserFeedBack) => {
    return async (dispatch,getState) => {
       const state = await getState();

       let option={
        method :"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Date:Date(),
            feedback:UserFeedBack
        })
      }
      let a= await fetch('http://127.0.0.1/feedback',option);
      let res= await a.json()
      console.log(res)
      if(res.status==="ok")
      {
        toast.success("Thanks for Your feedback !");
      }
      dispatch({type:'FEEDBACK',payload:res})
    };
};
