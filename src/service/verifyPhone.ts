import axios from "axios"
import { MatchError, NotFoundError, SystemError } from "com/errors"
import validate from "com/validate"

import { httpClient } from "../api/axios-config"

export const verifyPhone = async (phoneNumber: string) => {
  validate.phone(phoneNumber)

  try {
    const response = await httpClient.post(`/Usuario/verify-phone?phoneNumber=${phoneNumber}`)

    if (response.status === 200) return

    throw new MatchError(`Error en la verificación: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new NotFoundError("Número de teléfono no encontrado")
      } else {
        throw new SystemError(`Error de Axios: ${error.message}`)
      }
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
