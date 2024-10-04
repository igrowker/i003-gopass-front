import { useDispatch } from "react-redux"
import { SystemError } from "com/errors"
import { updateUser } from "../store/user/userSlice"

export const useUpdateProfile = () => {
  const dispatch = useDispatch()

  const updateProfileData = async (
    nombre: string,
    dni: string,
    numeroTelefono: string,
    image: string,
    city: string,
    country: string
  ): Promise<void> => {
    try {
      dispatch(
        updateUser({
          nombre,
          dni,
          numeroTelefono,
          image,
          city,
          country
        })
      )
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { updateProfileData }
}
