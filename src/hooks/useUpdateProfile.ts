import { updateProfile } from "../service/updateProfile"
import { useDispatch } from "react-redux"
import { setUser, User } from "../store/user/userSlice"

export const useUpdateProfile = () => {
  const dispatch = useDispatch()

  const updateProfileField = async (field: keyof User, value: string): Promise<void> => {
    try {
      // Asume que updateProfile puede manejar la actualización de un solo campo
      const updatedUserData: Partial<User> = await updateProfile({ [field]: value })

      // Despacha la acción para actualizar el estado del usuario
      dispatch(setUser(updatedUserData))
    } catch (error) {
      console.error("Error al actualizar perfil", error)
    }
  }

  return { updateProfileField }
}
