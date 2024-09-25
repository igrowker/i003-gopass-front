import axios from "axios"
import validate from "com/validate"
import { SystemError } from "com/errors"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

const registrarUsuario = async (email: string, password: string, passwordRepeat: string) => {
  validate.email(email)
  validate.password(password)
  validate.passwordsMatch(password, passwordRepeat)

  const body = { email, password, passwordRepeat }

  try {
    const response = await api.post("/Usuario/Register", body)

    if (response.status === 201) return

    throw new SystemError(`Error en el registro: ${response.statusText}`)
  } catch (error: unknown) {
    // Verificación de tipo de error
    if (axios.isAxiosError(error)) {
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}

export default registrarUsuario
