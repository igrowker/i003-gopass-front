import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Ticket {
  image: string
  gameName: string
  description: string
  address: string
  eventDate: string
  codigoQR: string
  verificada: boolean
  entradaId: number
}

const initialState = {
  codigoQR: "",
  tickets: [] as Ticket[]
}

const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    setEntry(state, action: PayloadAction<Ticket>) {
      state.codigoQR = action.payload.codigoQR
      state.tickets = [action.payload]
    },
    clearEntry(state) {
      state.codigoQR = ""
      state.tickets = state.tickets.map((ticket) => ({
        ...ticket,
        image: "",
        gameName: "",
        description: "",
        address: "",
        eventDate: "",
        codigoQR: ""
      }))
    },
    setTickets(state, action: PayloadAction<any>) {
      state.tickets = action.payload
    }
  }
})

export const { setEntry, clearEntry, setTickets } = entrySlice.actions
export default entrySlice.reducer
