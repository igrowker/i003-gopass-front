import axios from "axios"
import { MatchError, NotFoundError, SystemError } from "com/errors"
import validate from "com/validate"

import { httpClient } from "../api/axios-config"

export const validateEntry = async (codigoQR: string) => {
  validate.qrCode(codigoQR)

  try {
    const response = await httpClient.get("/Reventa/get-ticket-from-faker", { params: { codigoQR: codigoQR } })

    if (response.status === 200) {
      return response.data
    }
    throw new MatchError(`Error en la verificación: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new NotFoundError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
