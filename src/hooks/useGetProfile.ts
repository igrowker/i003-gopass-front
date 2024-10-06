import { getProfile } from "../service/getProfile"
import { useDispatch } from "react-redux"
import { setUser } from "../store/user/userSlice"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"

export const useGetProfile = () => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const getProfileData = async (): Promise<void> => {
    try {
      const profile = await getProfile()
      dispatch(setUser(profile))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getProfileData }
}
