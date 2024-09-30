import axios from "axios"
import validate from "com/validate"
import { SystemError, MatchError } from "com/errors"
import { httpClient } from "../api/axios-config"

export const validateEntry = async (codigoQR: string) => {
  validate.qrCode(codigoQR)

  const body = { codigoQR }

  try {
    const response = await httpClient.post("/Ticket/verificar-entrada", body)

    if (response.status === 200) {
      return response.data
    }
    throw new MatchError(`Error en la verificación: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
