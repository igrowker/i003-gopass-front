import { getAllTickets } from "../service/getAllTickets";
import { useDispatch } from "react-redux"
import { setTickets } from "../store/entry/entrySlice";

export const useGetAllTickets = () => {
  const dispatch = useDispatch()

  const getAllTicketsData = async (): Promise<void> => {
    try {
      const tickets = await getAllTickets()
      dispatch(setTickets(tickets))
    } catch (error) {
      console.error("Error al obtener tickets", error);
    }
  }

  return { getAllTicketsData }
}