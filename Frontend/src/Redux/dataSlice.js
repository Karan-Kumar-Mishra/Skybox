import { createSlice } from "@reduxjs/toolkit";
import signup from "./functions/Signup";
import setinfo from "./functions/Setinfo";
import deleteuser from "./functions/DeleteUser";
import  addnote from "./functions/Addnote";
const initialState = {
  data: {
    isAuth: false,
    name: "Name",
    emial: "xyz@email.com",
    userNote: [
      {
        title:"Demo",
        note:"Test"
      }
    ],
    more_info: { }
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    Setinfo: setinfo,
    SignUp: signup,
    DeleteUser: deleteuser,
    AddNewNote: addnote
  },
});

export const { Setinfo,
  SignUp,
  DeleteUser,
  AddNewNote
  } = dataSlice.actions;

export default dataSlice.reducer;
