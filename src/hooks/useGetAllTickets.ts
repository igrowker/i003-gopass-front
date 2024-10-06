import { getAllTickets } from "../service/getAllTickets"
import { useDispatch } from "react-redux"
import { setTickets } from "../store/entry/entrySlice"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"

export const useGetAllTickets = () => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const getAllTicketsData = async (pageNumber: number, pageSize: number): Promise<void> => {
    try {
      const data = await getAllTickets(pageNumber, pageSize)
      dispatch(setTickets(data))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getAllTicketsData }
}
