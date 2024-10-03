import axios from "axios"
import { httpClient } from "../api/axios-config"
import { SystemError } from "com/errors"

export const getProfile = async () => {
  try {
    const response = await httpClient.get("/Usuario/user-credentials")
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
