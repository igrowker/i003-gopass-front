import axios from "axios"
import { SystemError } from "com/errors"

import { httpClient } from "../api/axios-config"

export const getAllTickets = async (pageNumber: number, pageSize: number) => {
  try {
    const response = await httpClient.get(`/Entrada/get-tickets?PageNumber=${pageNumber}&PageSize=${pageSize}`)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
