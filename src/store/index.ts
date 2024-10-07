import { configureStore } from "@reduxjs/toolkit"

import entryReducer from "./entry/entrySlice"
import userReducer from "./user/userSlice"

const store = configureStore({
  reducer: {
    entry: entryReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
