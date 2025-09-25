import { signup } from "./SignUp";
export const getUser = (userEmail) => {
  return async (dispatch, getState) => {
    const state = await getState();
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
      }),
    };
    let response = await fetch(process.env.REACT_APP_BACKEND_URL + "/getuser", option);
    let res = await response.json();
    console.log("after get the user =>", res)
    if (res['error']) {
      console.log("error found ?")
      dispatch(signup());
    }
    else
    {
      dispatch({ type: "GET_USER_INFORMATION", payload: res });
    }
  };
};
