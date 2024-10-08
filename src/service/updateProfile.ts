import axios from "axios"
import { ContentError, SystemError } from "com/errors"
import validate from "com/validate"

import { httpClient } from "../api/axios-config"

export const updateProfile = async (
  nombre: string,
  dni: string,
  numeroTelefono: string,
  image: string,
  city: string,
  country: string
) => {
  validate.fullName(nombre)
  validate.document(dni)
  validate.validatePhone(numeroTelefono)
  validate.location(city)
  validate.location(country)

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
