import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  image: string | null
  email: string | null
  nombre: string | null
  dni: string | null
  numeroTelefono: string | null
  city: string | null
  country: string | null
  verificado: boolean
  id: number | null
  userProfile: User
  verificadoSms?: boolean
}

const initialState: User = {
  image: null,
  email: null,
  nombre: null,
  dni: null,
  numeroTelefono: null,
  city: null,
  country: null,
  verificado: false,
  id: null,
  userProfile: {} as User
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      const user = action.payload
      sessionStorage.setItem("user", JSON.stringify(user))
      sessionStorage.setItem("user.verificadoSms", user.verificadoSms ? "true" : "false")
      return { ...state, ...user }
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
