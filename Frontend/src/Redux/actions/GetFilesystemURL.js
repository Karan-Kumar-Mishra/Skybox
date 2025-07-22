export const getfilesystemurl = () => {
  return async (dispatch, getState) => {
    const state = await getState();
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: state.Data.UserData.email,
      }),
    };
    let response = await fetch(process.env.REACT_APP_BACKEND_URL+"/get_file_url", option);
    let res = await response.json();
    dispatch({ type: "GET_FILES_URL", payload: res });
  };
};