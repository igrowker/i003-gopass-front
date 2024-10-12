import { ContentError, MatchError } from "com/errors"
import { useNavigate } from "react-router-dom"

import { EmailConfirm } from "../app/components/UI/EmailConfirm"
import useContext from "../context/UseContext"
import { registrarUsuario } from "../service/authService"

export const useRegister = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const register = async (email: string, password: string, passwordRepeat: string): Promise<void> => {
    try {
      await registrarUsuario(email, password, passwordRepeat)
      const isConfirmed = await EmailConfirm()
      if (!isConfirmed) return
      navigate("/login")
    } catch (error: any) {
      if (error instanceof ContentError) {
        alert(error.message)
      } else if (error instanceof MatchError) {
        alert(error.message)
      } else {
        alert("Error de conexión")
      }
    }
  }

  return { register }
}
