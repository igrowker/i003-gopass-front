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
  entrada: Entrada
  fechaReventa: string
}

export interface Entrada {
  image: string
  gameName: string
  address: string
  precio: string
  eventDate: Date
  description: string
  codigoQR: string
}

const initialState = {
  codigoQR: "",
  tickets: [] as Ticket[],
  ticketToResell: {
    image: "",
    gameName: "",
    description: "",
    address: "",
    eventDate: "",
    codigoQR: "",
    verificada: false,
    entradaId: 0,
    entrada: {
      image: "",
      gameName: "",
      address: "",
      precio: ""
    }
  } as Ticket
}
const entrySlice = createSlice({
  name: "entry",
  initialState,
  reducers: {
    setEntry(state, action: PayloadAction<Ticket>) {
      state.codigoQR = action.payload.codigoQR
      state.ticketToResell = action.payload
    },
    clearEntry(state) {
      state.ticketToResell = initialState.ticketToResell
    },
    setTickets(state, action: PayloadAction<any>) {
      state.tickets = action.payload
    },
    setSellTickets(state, action: PayloadAction<any>) {
      state.tickets = action.payload
    }
  }
})

export const { setEntry, clearEntry, setTickets, setSellTickets } = entrySlice.actions
export default entrySlice.reducer
