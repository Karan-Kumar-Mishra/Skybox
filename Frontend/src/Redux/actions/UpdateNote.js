import toast from "react-hot-toast";
export const UpdateNote = () => {
  return async (dispatch, getState) => {
    const state = await getState();
    console.log("state=> ",state.Data.ComponentData)
    let option={
        method :"PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email:state.Data.UserData.email,
            title: state.Data.ComponentData.currentTitle,
            newnote:state.Data.ComponentData.currentNote
        })
      }
      let a= await fetch('http://127.0.0.1/updatanote',option);
      let res= await a.json()
      console.log(res)
      dispatch({ type: "UPDATE_NOTE", payload: res });
  };
};