import toast from "react-hot-toast";
export const deletenote = (userdata) => {
  return async (dispatch, getState) => {
    const state = await getState();
    let option = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.Data.UserData.email,
        note_title: userdata,
      }),
    };
    let a = await fetch("http://127.0.0.1/deletenote", option);
    let res = await a.json();
    if (res.status === "ok") {
      toast.success("New note is delete successfully !");
    }
    dispatch({ type: "DELETE_NOTE", payload: res });
   
  };
};
