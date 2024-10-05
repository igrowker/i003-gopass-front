import { getUserTickets } from "../service/getUserTickets"
import { useDispatch } from "react-redux"
import { setTickets } from "../store/entry/entrySlice"

export const useGetUserTickets = () => {
  const dispatch = useDispatch()

  const getUserTicketsData = async (): Promise<void> => {
    try {
      const data = await getUserTickets()
      dispatch(setTickets(data))
    } catch (error) {
      console.error("Error al obtener tickets", error)
    }
  }

  return { getUserTicketsData }
}
