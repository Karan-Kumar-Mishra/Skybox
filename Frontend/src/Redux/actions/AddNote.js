import toast from "react-hot-toast";
export const addNote = (userdata) => {
    return async (dispatch,getState) => {
       const state = await getState();

      let option={
        method :"PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email:state.Data.UserData.email,
            notedata: userdata
        })
      }
      let a= await fetch('http://127.0.0.1/addnote',option);
      let res= await a.json()
      if(res.status==="ok")
      {
        toast.success("New note is save successfully !");
      }
      dispatch({type:'ADD_NOTE',payload:res})
    };
};
