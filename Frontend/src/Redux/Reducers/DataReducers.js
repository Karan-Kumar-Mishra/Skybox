const initialState = {
  ComponentData: {
    currentNote:"",
    currentTitle:"",
    currentIndex:0,
    showNotesList:true,
    showNotificationList:true
  },
  UserData: {
    name: "Username",
    email: "Email",
    notes: [],
    more_info: {},
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFORMATION":
      state.UserData.more_info = action.payload;
      state.UserData.name = action.payload.name;
      state.UserData.email = action.payload.email;
      return state;
    case "GET_ALL_NOTES":
      state.UserData.notes = action.payload;
      return state;
    case "ADD_NOTE":
      return state;
    case "DELETE_USER":
      return state;
    case "FEEDBACK":
      return state;
    case "GET_ONE_NOTE":
      return state;
    case "SET_CURRENT_NOTE":
      return state;
    case "UPDATE_NOTE":
      return state;
    case "DELETE_NOTE":
      return state;
    default:
      return state;
  }
};

export default dataReducer;
