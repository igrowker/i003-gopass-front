import axios from "axios"
import { httpClient } from "../api/axios-config"
import { ContentError, SystemError } from "com/errors"

export const updateProfile = async (
  nombre: string,
  dni: string,
  numeroTelefono: string,
  image: string,
  city: string,
  country: string
) => {
  const body = { nombre, dni, numeroTelefono, image, city, country }

  try {
    const response = await httpClient.put("/Usuario/modify-user-credentials", body)

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
