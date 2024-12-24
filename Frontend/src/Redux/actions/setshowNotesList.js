export const setshowNotesList = (value) => {
    return  (dispatch, getState) => {
      const state =  getState();
      state.Data.ComponentData.showNotesList=value;
      dispatch({ type: "SET_SHOWNOTESLIST"});
      console.log("setshowNoteslist",state);
    };
}