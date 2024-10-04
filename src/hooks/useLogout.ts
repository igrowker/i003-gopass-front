import { useDispatch } from "react-redux"
import { logoutUser } from "../store/user/userSlice"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
    sessionStorage.removeItem("token")
    navigate("/login")
  }
  return { handleLogout }
}
