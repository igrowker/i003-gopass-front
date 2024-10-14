import { SystemError } from "com/errors"
import { useNavigate } from "react-router-dom"

import { verifyPhone } from "../service/verifyPhone"

export const useVerifyPhone = () => {
  const navigate = useNavigate()

  const verifiedPhone = async (phoneNumber: string): Promise<void> => {
    try {
      await verifyPhone(phoneNumber)
      navigate("/phone-code")
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      } else {
        alert(error.message)
      }
    }
  }

  return { verifiedPhone }
}
