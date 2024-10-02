import { myTickets } from "../service/myTickets"
import { useDispatch } from "react-redux"
import { setTickets } from "../store/entry/entrySlice"
import { SystemError } from "com/errors"

export const useMyTickets = () => {
  const dispatch = useDispatch()

  const getTickets = async () => {
    try {
      const tickets = await myTickets()
      dispatch(setTickets(tickets))
      throw new SystemError("Error al obtener los tickets")
    } catch (error: any) {
      throw new SystemError(error.message)
    }
  }
  return { getTickets }
}
