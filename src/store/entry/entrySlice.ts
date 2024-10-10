import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Ticket {
  image: string
  gameName: string
  compradorId: number
  description: string
  address: string
  eventDate: string
  codigoQR: string
  verificada: boolean
  entradaId: number
  entrada: Entrada
  fechaReventa: string
  precio: string
  resaleDetail: string
  vendedorId: number
}

export interface Entrada {
  image: string
  gameName: string
  compradorId: number
  address: string
  precio: string
  eventDate: string
  description: string
  codigoQR: string
  entradaId: number
  usuarioId: number
}

const initialState = {
  codigoQR: "",
  tickets: [] as Ticket[],
  ticketsSold: [] as Ticket[],
  purchasedTickets: [] as Ticket[],
  ticketToResell: {
    image: "",
    gameName: "",
    description: "",
    compradorId: 0,
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
    setTicketsSold(state, action: PayloadAction<any>) {
      state.ticketsSold = action.payload
    },
    setPurchasedTickets(state, action: PayloadAction<any>) {
      state.purchasedTickets = action.payload
    },
    setSellTickets(state, action: PayloadAction<any>) {
      state.tickets = action.payload
    },
    setSelectedTicket(state, action: PayloadAction<Ticket>) {
      state.ticketToResell = action.payload
    }
  }
})

export const {
  setEntry,
  setPurchasedTickets,
  clearEntry,
  setTickets,
  setTicketsSold,
  setSellTickets,
  setSelectedTicket
} = entrySlice.actions
export default entrySlice.reducer
