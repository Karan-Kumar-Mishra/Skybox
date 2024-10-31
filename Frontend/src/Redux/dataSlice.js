import { createSlice } from "@reduxjs/toolkit";
import signup from "./functions/Signup";
import setinfo from "./functions/Setinfo";
import deleteuser from "./functions/DeleteUser";
import addnote from "./functions/Addnote";
import getallnotes from "./functions/GetAllnotes";

const initialState = {
  data: {
    isAuth: false,
    name: "Name",
    email: "xyz@email.com",
    userNote: [
      {
        title: "Demo",
        note: "Test",
      },
      {
        title: "Demo",
        note: "Test",
      },
    ],
    more_info: {},
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    Setinfo: setinfo,
    SignUp: signup,
    DeleteUser: deleteuser,
    AddNewNote: addnote,
    GetAllNotes: getallnotes,
  },
});

export const { Setinfo, SignUp, DeleteUser, AddNewNote, GetAllNotes } =
  dataSlice.actions;

export default dataSlice.reducer;
