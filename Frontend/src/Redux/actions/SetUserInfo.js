export const setUserinfo = (userdata) => {
  return (dispatch) => {
    dispatch({ type: "SET_USER_INFORMATION", payload: userdata });
  };
};
