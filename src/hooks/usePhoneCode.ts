import { SystemError } from "com/errors"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

import { phoneCodeFetch } from "../service/phoneCode"

export const usePhoneCode = () => {
  const navigate = useNavigate()
  const phoneCodeCorrect = async (vonageCode: number): Promise<void> => {
    try {
      await phoneCodeFetch(vonageCode)
      Swal.fire({
        title: "Éxito",
        text: "Número de teléfono verificado",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
        }
      })
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      } else {
        alert(error.message)
      }
    }
  }
  return { phoneCodeCorrect }
}
