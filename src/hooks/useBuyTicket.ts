import { SystemError } from "com/errors"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import useContext from "../context/UseContext"
import { buyTicket } from "../service/buyTicket"
import { setSelectedEntradaId } from "../store/entry/entrySlice"

export const useBuyTicket = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { alert } = useContext()

  const buyResellTicket = async (entradaId: number): Promise<void> => {
    try {
      await buyTicket(entradaId)
      // dispatch(setSelectedEntradaId(buyData))

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
