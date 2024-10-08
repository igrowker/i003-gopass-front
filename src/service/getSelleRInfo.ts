import axios from "axios"
import { SystemError } from "com/errors"
import { httpClient } from "../api/axios-config"

export const getSellerInfo = async (vendedorId: number) => {
  try {
    const response = await httpClient.get(`Reventa/get-seller-information?vendedorId=${vendedorId}`)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
