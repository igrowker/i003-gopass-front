import axios from "axios"

import validate from "com/validate"
import { ContentError, NotFoundError, SystemError } from "com/errors"

import { httpClient } from "../api/axios-config"

export const resetPassword = async (email: string, password: string, passwordRepeat: string) => {
  validate.email(email)
  validate.password(password)
  validate.passwordsMatch(password, passwordRepeat)

  const body = { email, password }

  try {
    const response = await httpClient.post("/Usuario/restablecer-actualizar", body)

    if (response.status === 200) {
      return response.data
    }
    throw new ContentError(`Error al ingresar datos: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new NotFoundError(error.message)
    }
    throw new SystemError("Error en la conexión")
  }
}
