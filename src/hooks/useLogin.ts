import { useNavigate } from "react-router-dom"
import { autenticarUsuario } from "../service/authService"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"
import { getProfile } from "../service/getProfile"
import { useDispatch } from "react-redux"
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
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { login }
}
