import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  entry: null as any
}

const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    setEntry(state, action: PayloadAction<any>) {
      state.entry = action.payload
    },
    clearEntry(state) {
      state.entry = null
    }
  }
})

export const { setEntry, clearEntry } = entrySlice.actions
export default entrySlice.reducer
