import { useNavigate } from "react-router-dom"
import { sellTicket } from "../service/sellTicket"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"

export const useSellTicket = () => {
  const navigate = useNavigate()

  const { alert } = useContext()

  const sellTicketPost = async (
    codigoQR: string,
    gameName: string,
    eventDate: Date,
    address: string,
    description: string,
    resaleDetail: string,
    precio: number
  ): Promise<void> => {
    try {
      await sellTicket(codigoQR, gameName, eventDate, address, description, resaleDetail, precio)
      navigate("/")
      
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }
  return { sellTicketPost }
}
