export const setshowNotificationList = (value) => {
    return  (dispatch, getState) => {
      const state = getState();
      state.Data.ComponentData.showNotificationList=value;
   
      dispatch({ type: "SET_SHOWNOTIFICATIONLIST"});
    };
}