import { getProfile } from "../service/getProfile"
import { useDispatch } from "react-redux"
import { setProfile } from "../store/user/userSlice"

export const useGetProfile = () => {
  const dispatch = useDispatch()

  const getProfileData = async (): Promise<void> => {
    try {
      const profile = await getProfile()
      dispatch(setProfile(profile))
    } catch (error) {
      console.error("Error al obtener perfil", error)
    }
  }

  return { getProfileData }
}
