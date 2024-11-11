export const SetcurrentNote = (usersCurrentNoteText) => {
    return async (dispatch,getState) => {
       const state = await getState();
       console.log("function=>",usersCurrentNoteText)
       state.Data.ComponentData.currentNote=usersCurrentNoteText.note;
       state.Data.ComponentData.currentTitle=usersCurrentNoteText.title;
       dispatch({type:'ADD_NOTE',payload:state.Data.ComponentData.currentNote})
    };
};
