import { SystemError } from "com/errors"
import { useDispatch } from "react-redux"

import useContext from "../context/UseContext"
import { getProfile } from "../service/getProfile"
import { setUserProfile } from "../store/user/userSlice"

export const useGetProfile = () => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const getProfileData = async (): Promise<void> => {
    try {
      const profile = await getProfile()
      dispatch(setUserProfile(profile))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getProfileData }
}
