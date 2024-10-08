import { SystemError } from "com/errors"
import { useDispatch } from "react-redux"

import useContext from "../context/UseContext"
import { getSellerInfo } from "../service/getSelleRInfo"
import { setUserSellerInfo } from "../store/user/userSlice"

export const useGetSellerInfo = (userSellerInfoId: number) => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const getUserSellerInfo = async (): Promise<void> => {
    try {
      const profile = await getSellerInfo(userSellerInfoId)
      dispatch(setUserSellerInfo(profile))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getUserSellerInfo }
}
