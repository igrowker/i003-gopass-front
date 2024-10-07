import axios from "axios"
import { httpClient } from "../api/axios-config"
import { SystemError } from "com/errors"

export const getTicketsForSell = async (pageNumber: number, pageSize: number) => {
  try {
    const response = await httpClient.get(`/Reventa/get-resales?PageNumber=${pageNumber}&PageSize=${pageSize}`)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
