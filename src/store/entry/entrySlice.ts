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
  entrada: any
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
    codigoQR: ""
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
    filtered(state, action: PayloadAction<any>) {
      state.tickets = action.payload.map((item: any) => ({
        image: item.entrada.image,
        gameName: item.entrada.gameName,
        description: item.entrada.description,
        address: item.entrada.address,
        eventDate: item.entrada.eventDate,
        codigoQR: item.entrada.codigoQR,
        verificada: item.entrada.verificada,
        entradaId: item.entradaId,
        entrada: item.entrada
      }))
    }
  }
})

export const { setEntry, clearEntry, setTickets } = entrySlice.actions
export default entrySlice.reducer
