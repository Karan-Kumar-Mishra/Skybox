import toast from "react-hot-toast";
export const UpdateNote = () => {
  return async (dispatch, getState) => {
    const state = await getState();

    let option = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.Data.UserData.email,
        newnote: state.Data.ComponentData.currentNote,
        index: state.Data.ComponentData.currentIndex,
      }),
    };
    let a = await fetch("http://127.0.0.1/updatanote", option);
    let res = await a.json();
    if (res.status === 'ok') {
      toast.success("note is update successfully !");
    }
    // console.log("response=> ",res);
    dispatch({ type: "UPDATE_NOTE", payload: res });
  };
};
