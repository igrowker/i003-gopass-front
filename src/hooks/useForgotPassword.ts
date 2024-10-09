import { SystemError } from "com/errors"
import { useNavigate } from "react-router-dom"

import useContext from "../context/UseContext"
import { forgotPassword } from "../service/forgotPassword"

export const useForgotPassword = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const forgot = async (email: string): Promise<void> => {
    try {
      await forgotPassword(email)

      navigate("/login")
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { forgot }
}
