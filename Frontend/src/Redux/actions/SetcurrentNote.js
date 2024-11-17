export const SetcurrentNote = (usersCurrentNoteText) => {
    return async (dispatch,getState) => {
        console.log("check in function => ",usersCurrentNoteText)
       const state = await getState();
       state.Data.ComponentData.currentNote=usersCurrentNoteText.note;
       state.Data.ComponentData.currentTitle=usersCurrentNoteText.title;
       state.Data.ComponentData.currentIndex=usersCurrentNoteText.index;
       dispatch({type:'SET_CURRENT_NOTE',payload:state.Data.ComponentData.currentNote})
    };
};
