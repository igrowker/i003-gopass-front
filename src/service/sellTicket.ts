import axios from "axios"
import validate from "com/validate"
import { SystemError, MatchError, NotFoundError } from "com/errors"
import { httpClient } from "../api/axios-config"

export const sellTicket = async (
  codigoQR: string,
  gameName: string,
  eventDate: Date,
  address: string,
  description: string,
  resaleDetail: string,
  precio: number
) => {
  validate.qrCode(codigoQR)

  const body = { codigoQR, gameName, eventDate, address, description, resaleDetail, precio }

  try {
    const response = await httpClient.post("/Reventa/publicar-entrada-reventa", body)

    if (response.status === 200) {
      return response.data
    }
    throw new MatchError(`Error en la verificación: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new NotFoundError("Error en la conexión")
    }
    throw new SystemError("Error en la conexión")
  }
}
