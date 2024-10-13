import { SystemError } from "com/errors"
import { useNavigate } from "react-router-dom"

import useContext from "../context/UseContext"
import { resetPassword } from "../service/resetPassword"

interface UseResetPasswordReturn {
  reset: (email: string, password: string, passwordRepeat: string) => Promise<void>
}

export const useResetPassword = (): UseResetPasswordReturn => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const reset = async (email: string, password: string, passwordRepeat: string): Promise<void> => {
    try {
      await resetPassword(email, password, passwordRepeat)
      navigate("/login")
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { reset }
}
