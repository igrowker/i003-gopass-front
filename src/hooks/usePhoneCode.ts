import { SystemError } from "com/errors"
import { useNavigate } from "react-router-dom"

import { phoneCodeFetch } from "../service/phoneCode"

export const usePhoneCode = () => {
  const navigate = useNavigate()
  const phoneCodeCorrect = async (vonageCode: number): Promise<void> => {
    try {
      await phoneCodeFetch(vonageCode)
      navigate("/login")
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      } else {
        alert(error.message)
      }
    }
  }
  return { phoneCodeCorrect }
}
