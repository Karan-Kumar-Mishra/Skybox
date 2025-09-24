
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
    let response = await fetch(process.env.REACT_APP_BACKEND_URL+"/getuser", option);
    let res = await response.json();

    dispatch({ type: "SET_USER_INFORMATION", payload: res });
  };
};
