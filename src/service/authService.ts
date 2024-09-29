import axios from "axios"
import validate from "com/validate"
import { SystemError, CredentialsError } from "com/errors"
import { httpClient } from "../api/axios-config"

export const autenticarUsuario = async (email: string, password: string): Promise<void> => {
  validate.email(email)
  validate.password(password)

  const body = { email, password }

  try {
    const response = await httpClient.post("/Usuario/Login", body)
    const token = response.data.token
    sessionStorage.setItem("token", token)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        throw new CredentialsError("Credenciales incorrectas")
      } else {
        throw new SystemError(error.message)
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
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
