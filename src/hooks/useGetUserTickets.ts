import { getUserTickets } from "../service/getUserTickets"
import { useDispatch } from "react-redux"
import { setTickets } from "../store/entry/entrySlice"
import { SystemError } from "com/errors"
import useContext from "../context/useContext"

export const useGetUserTickets = () => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const getUserTicketsData = async (): Promise<void> => {
    try {
      const data = await getUserTickets()
      dispatch(setTickets(data))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getUserTicketsData }
}
