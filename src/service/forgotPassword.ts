import axios from "axios"
import { MatchError, NotFoundError, SystemError } from "com/errors"

import { httpClient } from "../api/axios-config"

export const forgotPassword = async (email: string) => {
  const body = { email }

  try {
    const response = await httpClient.post("/Usuario/solicitar-restablecimiento", body)

    if (response.status === 200) {
      return
    }
    throw new MatchError(`Error al ingresar email: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new NotFoundError(error.message)
    }
    throw new SystemError("Error en la conexión")
  }
}
