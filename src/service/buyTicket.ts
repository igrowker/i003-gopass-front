import axios from "axios"
import { MatchError, NotFoundError, SystemError } from "com/errors"

// import validate from "com/validate"
import { httpClient } from "../api/axios-config"

export const buyTicket = async (entradaId: number) => {
  //   validate.entradaId(entradaId)

  const body = { entradaId }

  try {
    const response = await httpClient.put("/Reventa/comprar-entrada", body)

    if (response.status === 200) {
      return response.data
    }
    throw new MatchError(`Error en la verificación: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new NotFoundError(error.message)
    }
    throw new SystemError("Error en la conexión")
  }
}
