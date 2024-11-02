const initialState = {
  ComponentData: {},
  UserData: {
      name: 'Username',
      email: 'Email',
      notes: [],
      more_info: {}
  }
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_USER_INFORMATION':
        state.UserData.more_info=action.payload;
        state.UserData.name=action.payload.name;
        state.UserData.email=action.payload.email;
        return state;  
      case 'GET_ALL_NOTES':
        // console.log(state.UserData.notes);
        state.UserData.notes=action.payload;
        return state;
      default:
          return state;
  }
};

export default dataReducer;