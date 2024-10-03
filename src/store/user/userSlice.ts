import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  image: string
  email: string
  nombre: string
  dni: string
  telefono: string
  city: string
  country: string
  verificado: boolean
  id: number
}

const initialState = {
  image: "",
  email: "",
  nombre: "",
  dni: "",
  telefono: "",
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
      state.image = action.payload.image
      state.email = action.payload.email
      state.nombre = action.payload.nombre
      state.dni = action.payload.dni
      state.telefono = action.payload.telefono
      state.city = action.payload.city
      state.country = action.payload.country
      state.verificado = action.payload.verificado
      state.id = action.payload.id
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
