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
  id: number
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
  id: 0
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return { ...state, ...action.payload }
    },
    updateUser(state, action: PayloadAction<Partial<User>>) {
      return { ...state, ...action.payload }
    },
    setUserSellerInfo(state, action: PayloadAction<User>) {
      return { ...state, ...action.payload }
    }
  }
})

export const { setUser, updateUser, setUserSellerInfo } = userSlice.actions
export default userSlice.reducer
