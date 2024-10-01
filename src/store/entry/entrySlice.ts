import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  codigoQR: ""
}

const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    setEntry(state, action: PayloadAction<any>) {
      state.codigoQR = action.payload.codigoQR
    },
    clearEntry(state) {
      state.codigoQR = ""
    }
  }
})

export const { setEntry, clearEntry } = entrySlice.actions
export default entrySlice.reducer
