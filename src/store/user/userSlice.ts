import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  image: string
  email: string
  nombre: string
  dni: string
  numeroTelefono: string
  city: string
  country: string
  verificado: boolean
  id: string
}

const initialState: User = {
  image: "",
  email: "",
  nombre: "",
  dni: "",
  numeroTelefono: "",
  city: "",
  country: "",
  verificado: false,
  id: ""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return { ...state, ...action.payload }
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
