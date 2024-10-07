import { SystemError } from "com/errors"
import { useNavigate } from "react-router-dom"

import useContext from "../context/UseContext"
import { buyTicket } from "../service/buyTicket"
import { setSelectedEntradaId } from "../store/entry/entrySlice"

import { useDispatch } from "react-redux"

export const useBuyTicket = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { alert } = useContext()

  const buyResellTicket = async (entradaId: number): Promise<void> => {
    try {
      const buydata = await buyTicket(entradaId)
      dispatch(setSelectedEntradaId(buydata))

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
