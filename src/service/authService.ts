import axios from "axios"
import { ContentError, CredentialsError, MatchError, SystemError } from "com/errors"
import validate from "com/validate"

import { httpClient } from "../api/axios-config"

export const autenticarUsuario = async (email: string, password: string): Promise<string> => {
  validate.email(email)
  validate.password(password)

  const body = { email, password }

  try {
    const response = await httpClient.post("/Usuario/Login", body)
    return response.data.token
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 401) {
          throw new CredentialsError("Credenciales incorrectas")
        } else if (error.response.status === 400) {
          throw new ContentError("Por favor, verifica tu correo electrónico.")
        } else {
          throw new SystemError(error.message)
        }
      } else {
        throw new SystemError("Error de conexión")
      }
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
export const registrarUsuario = async (email: string, password: string, passwordRepeat: string): Promise<void> => {
  validate.email(email)
  validate.password(password)
  validate.passwordsMatch(password, passwordRepeat)

  const body = { email, password }

  try {
    const response = await httpClient.post("/Usuario/Register", body)

    if (response.status === 200) return

    throw new SystemError(`Error en el registro: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 400) {
        throw new ContentError("El correo electrónico ya está registrado o los datos son inválidos.")
      } else {
        throw new MatchError(error.message)
      }
    }
    throw new SystemError("Error de conexión")
  }
}

export const logoutUser = () => delete sessionStorage.token
