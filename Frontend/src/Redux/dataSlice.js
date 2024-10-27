import { createSlice } from "@reduxjs/toolkit";
import signup from "./functions/Signup";
import setinfo from "./functions/Setinfo";
import  deleteuser  from "./functions/DeleteUser";
const initialState = {
  data: {
    isAuth: false,
    name: "Name",
    emial: "xyz@email.com",
    userNote: [],
    more_info: {},
  },
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    Setinfo: setinfo,
    SignUp: signup,
    DeleteUser : deleteuser 

  },
});

export const { Setinfo, SignUp, DeleteUser } = dataSlice.actions;

export default dataSlice.reducer;
