import { useNavigate } from "react-router-dom";
import { validateEntry } from "../service/validateEntry";
import { SystemError } from "com/errors";
import useContext from "../context/useContext";

export const useValidateEntry = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const verified = async (qrCode: string) => {
    try {
      const isVerified = await validateEntry(qrCode)
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
