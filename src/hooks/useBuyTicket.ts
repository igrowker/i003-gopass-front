import { SystemError } from "com/errors"
import { useNavigate } from "react-router-dom"

import useContext from "../context/UseContext"
import { buyTicket } from "../service/buyTicket"

export const useBuyTicket = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const buyResellTicket = async (entradaId: number): Promise<void> => {
    try {
      await buyTicket(entradaId)
      navigate("/")
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { buyResellTicket }
}
