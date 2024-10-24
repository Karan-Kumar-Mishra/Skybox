import { createSlice } from '@reduxjs/toolkit'
import DefaultUser from '../compenent/Images/DefaultUser.png'
import singup from './functions/Singup'
const initialState = {
  data: {
    isAuth:false,
    name: "Name",
    emial: "xyz@email.com",
    picture: DefaultUser,
    userNote: []
  },
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    SingUp:singup
  },
})


export const { SingUp } = dataSlice.actions

export default dataSlice.reducer