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
  userProfile: User
  verificadoSms?: boolean
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
  id: 0,
  userProfile: {} as User
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
    },
    setUserProfile(state, action: PayloadAction<User>) {
      state.userProfile = action.payload
    }
  }
})

export const { setUser, updateUser, setUserSellerInfo, setUserProfile } = userSlice.actions
export default userSlice.reducer
