import axios from "axios"
import { httpClient } from "../api/axios-config"
import { ContentError, SystemError } from "com/errors"
import { User } from "../store/user/userSlice"

export const updateProfile = async (data: Partial<User>): Promise<Partial<User>> => {
  try {
    const response = await httpClient.put("/Usuario/modify-user-credentials", data)

    if (response.status === 200) {
      return response.data
    }
    throw new ContentError(`Error al actualizar: ${response.statusText}`)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new SystemError(error.message)
    } else {
      throw new SystemError("Error de conexión")
    }
  }
}
