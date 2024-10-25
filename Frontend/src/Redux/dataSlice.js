import { createSlice } from '@reduxjs/toolkit'
import DefaultUser from '../compenent/Images/DefaultUser.png'
import signup from './functions/Signup'
import setinfo from './functions/Setinfo'
const initialState = {
  data: {
    isAuth:false,
    name: "Name",
    emial: "xyz@email.com",
    userNote: [],
    more_info:{ 
      
    }
  },
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    Setinfo:setinfo,
    SignUp:signup
  },
})


export const { 
  Setinfo,
  SignUp
} = dataSlice.actions

export default dataSlice.reducer