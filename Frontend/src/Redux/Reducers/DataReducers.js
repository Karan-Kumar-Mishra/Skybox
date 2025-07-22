const initialState = {
  ComponentData: {
    currentNote: "",
    currentTitle: "",
    currentIndex: 0,
    showNotesList: true,
    showNotificationList: true
  },
  UserData: {
    name: "Username",
    email: "Email",
    isPrime: false,
    notes: [],
    notifications: [{ data: "this is the message ", text: "alert" }],
    more_info: {},
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFORMATION":
      state.UserData.more_info = action.payload;
      state.UserData.name = action.payload.name;
      state.UserData.email = action.payload.email;
      state.UserData.isPrime = false;
      return state;
    case "GET_ALL_NOTES":
      return {
        ...state,
        UserData: {
          ...state.UserData,
          notes: action.payload
        }
      };
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
    case "GET_USERS_NOTIFICATION":
      return {
        ...state,
        UserData: {
          ...state.UserData,
          notifications: action.payload
        }
      };
    case "DELETE_USER_NOTIFICATION":
      return { ...state };
    case "DELETE_USER_ALL_NOTIFICATION":
      return { ...state };
    case "MARKE_PRIME":
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isPrime: true
        }
      };
     case "CHECK_PRIME":
      return {
        ...state,
        UserData: {
          ...state.UserData,
          isPrime: action.payload
        }
      };


    default:


      return state;
  }
};

export default dataReducer;
