import { useNavigate } from "react-router-dom"
import { registrarUsuario } from "../service/authService"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"
import { Confirm } from "../app/components/UI/Confirm"

export const useRegister = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const register = async (email: string, password: string, passwordRepeat: string): Promise<void> => {
    try {
      const isConfirmed = await Confirm()
      if (!isConfirmed) return

      await registrarUsuario(email, password, passwordRepeat)
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
