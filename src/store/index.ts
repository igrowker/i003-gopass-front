import { configureStore } from "@reduxjs/toolkit"
import entryReducer from "./entry/entrySlice"

const store = configureStore({
  reducer: {
    entry: entryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
