import { SystemError } from "com/errors"
import { useDispatch } from "react-redux"

import useContext from "../context/UseContext"
import { getAllTickets } from "../service/getAllTickets"
import { setTickets } from "../store/entry/entrySlice"

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
