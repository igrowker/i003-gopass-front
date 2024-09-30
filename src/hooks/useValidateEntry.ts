import { useNavigate } from "react-router-dom"
import { validateEntry } from "../service/validateEntry"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"

export const useValidateEntry = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const verified = async (codigoQR: string) => {
    try {
      const isVerified = await validateEntry(codigoQR)
      if (!isVerified) {
        navigate("/entrada-invalida")
      }

      console.log(isVerified)
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { verified }
}
