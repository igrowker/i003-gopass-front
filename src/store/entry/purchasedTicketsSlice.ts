import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Ticket {
  gameName: string
  description: string
  image: string
  address: string
  eventDate: string
  codigoQR: string
  verificada: boolean
  entradaId: number
  vendedorId: number
  compradorId: number
  fechaReventa: string
  precio: number
  resaleDetail: string
  id: number
}

export interface TicketsPurchasedState {
  ticketsPurchased: Ticket[]
}

const initialState: TicketsPurchasedState = {
  ticketsPurchased: []
}

const purchasedTicketsSlice = createSlice({
  name: "purchasedTickets",
  initialState,
  reducers: {
    setPurchasedTickets(state, action: PayloadAction<Ticket[]>) {
      state.ticketsPurchased = action.payload
    }
  }
})

export const { setPurchasedTickets } = purchasedTicketsSlice.actions
export default purchasedTicketsSlice.reducer