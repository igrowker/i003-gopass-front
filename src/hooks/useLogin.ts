import { useNavigate } from "react-router-dom"
import { autenticarUsuario } from "../service/authService"

export const useLogin = () => {
  const navigate = useNavigate()

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const token: string = await autenticarUsuario(email, password)
      sessionStorage.setItem("token", token)
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }
  return { login }
}
