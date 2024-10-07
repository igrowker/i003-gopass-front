import axios from "axios"
import { MatchError, NotFoundError, SystemError } from "com/errors"

import { httpClient } from "../api/axios-config"

export const myTickets = async () => {
  try {
    const response = await httpClient.get("/Tickets/my-tickets")

    if (response.status === 200) {
      return response.data
    }
    throw new MatchError(`Error al obtener los tickets: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new NotFoundError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
