import { useNavigate } from "react-router-dom"
import { registrarUsuario } from "../service/authService"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"

export const useRegister = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const register = async (email: string, password: string, passwordReapet: string): Promise<void> => {
    try {
      await registrarUsuario(email, password, passwordReapet)
      navigate("/login")
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { register }
}
