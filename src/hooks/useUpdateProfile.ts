import { useDispatch } from "react-redux"
import { updateProfile } from "../service/updateProfile"
import { updateUser, User } from "../store/user/userSlice"

// export const useUpdateProfile = () => {
//   const dispatch = useDispatch()

//   const updateProfileField = async (field: keyof User, value: string): Promise<void> => {
//     try {
//       // Asume que updateProfile puede manejar la actualización de un solo campo
//       const updatedUserData: Partial<User> = await updateProfile({ [field]: value })

//       // Despacha la acción para actualizar el estado del usuario
//       dispatch(setUser(updatedUserData))
//     } catch (error) {
//       console.error("Error al actualizar perfil", error)
//     }
//   }

//   return { updateProfileField }
// }

export const useUpdateProfile = () => {
  const dispatch = useDispatch()

  const updateProfileField = async (field: keyof User, value: string): Promise<void> => {
    try {
      // Crear un objeto parcial con el campo que se va a actualizar
      const updatedData = { [field]: value }

      // Llamar a la función para actualizar el perfil en el backend
      const response = await updateProfile(updatedData)

      // Despachar la acción para actualizar el estado en Redux con los datos actualizados
      dispatch(updateUser(response))
    } catch (error) {
      console.error("Error al actualizar el perfil:", error)
    }
  }

  return { updateProfileField }
}