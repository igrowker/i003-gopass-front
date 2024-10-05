import { getAllTickets } from "../service/getAllTickets"
import { useDispatch } from "react-redux"
import { setTickets } from "../store/entry/entrySlice"

export const useGetAllTickets = () => {
  const dispatch = useDispatch()

  const getAllTicketsData = async (pageNumber: number, pageSize: number): Promise<void> => {
    try {
      const data = await getAllTickets(pageNumber, pageSize)
      dispatch(setTickets(data))
    } catch (error) {
      console.error("Error al obtener tickets", error)
    }
  }

  return { getAllTicketsData }
}
