import { SystemError } from "com/errors"
import { useDispatch } from "react-redux"

import useContext from "../context/UseContext"
import { updateProfile } from "../service/updateProfile"
import { updateUser } from "../store/user/userSlice"

export const useUpdateProfile = () => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const updatedProfile = async (
    nombre: string,
    dni: string,
    numeroTelefono: string,
    image: string,
    city: string,
    country: string
  ) => {
    try {
      const userData = await updateProfile(nombre, dni, numeroTelefono, image, city, country)
      dispatch(updateUser(userData))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { updatedProfile }
}
