import { configureStore } from '@reduxjs/toolkit'
import reducer from './dataSlice'
export const store = configureStore({
  reducer: reducer,
})