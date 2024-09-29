import axios from "axios"
import validate from "com/validate"
import { SystemError, CredentialsError } from "com/errors"
import { httpClient } from "../api/axios-config"

const autenticarUsuario = async (email: string, password: string) => {
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
        throw new SystemError("Error del sistema al autenticar el usuario")
      }
    } else {
      throw new SystemError("Error desconocido al autenticar el usuario")
    }
  }
}

export default autenticarUsuario
