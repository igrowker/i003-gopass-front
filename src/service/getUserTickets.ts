import axios from "axios"
import { SystemError } from "com/errors"

import { httpClient } from "../api/axios-config"

export const getUserTickets = async () => {
  try {
    const response = await httpClient.get(`/Usuario/obtener-usuario-entradas-compradas`)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
