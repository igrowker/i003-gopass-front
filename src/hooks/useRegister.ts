import { useNavigate } from "react-router-dom"
import { registrarUsuario } from "../service/authService"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"
import { EmailConfirm } from "../app/components/UI/EmailConfirm"

export const useRegister = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const register = async (email: string, password: string, passwordRepeat: string): Promise<void> => {
    try {
      await registrarUsuario(email, password, passwordRepeat)
      navigate("/login")

      const isConfirmed = await EmailConfirm()
      if (!isConfirmed) return
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { register }
}
