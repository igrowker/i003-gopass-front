import { CredentialsError, SystemError, ContentError } from "com/errors"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import useContext from "../context/UseContext"
import { autenticarUsuario } from "../service/authService"
import { getProfile } from "../service/getProfile"
import { setUser } from "../store/user/userSlice"

export const useLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { alert } = useContext()

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const token: string = await autenticarUsuario(email, password)
      sessionStorage.setItem("token", token)
      const userData = await getProfile()
      dispatch(setUser(userData))
      navigate("/")
    } catch (error: any) {
      if (error instanceof CredentialsError) {
        alert("Credenciales incorrectas. Por favor, verifica tu email y contraseña.")
      } else if (error instanceof ContentError) {
        alert("Por favor, verifica tu correo electrónico.")
      } else if (error instanceof SystemError) {
        alert(error.message)
      } else {
        alert("Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.")
      }
    }
  }

  return { login }
}
