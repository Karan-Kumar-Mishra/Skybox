import toast from "react-hot-toast";
export const deleteUser = () => {
  return async (dispatch, getState) => {
    const state = await getState();
    let option = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.Data.UserData.email,
      }),
    };
    let response = await fetch("http://127.0.0.1/deleteuser", option);
    let res = await response.json();
    if (res.status === "ok") {
      toast.success("Your account is delete successfully !");
    }
    dispatch({ type: "DELETE_USER", payload: res });
  };
};
