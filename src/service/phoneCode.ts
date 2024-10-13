import axios from "axios"
import { MatchError, NotFoundError, SystemError } from "com/errors"
import { httpClient } from "../api/axios-config"

export const phoneCodeFetch = async (vonageCode: number) => {
  try {
    const response = await httpClient.post(`/Usuario/verify-provided-code?vonageCode=${vonageCode}`)

    if (response.status === 200) {
      return response.data
    }
    throw new MatchError(`Error en la verificación: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new NotFoundError(error.response.data || error.message)
      } else {
        throw new SystemError(`Error de Axios: ${error.message}`)
      }
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
