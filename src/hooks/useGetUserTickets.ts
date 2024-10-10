import { SystemError } from "com/errors"
import { useDispatch } from "react-redux"

import useContext from "../context/UseContext"
import { getUserTickets } from "../service/getUserTickets"
import { setPurchasedTickets } from "../store/entry/entrySlice"

export const useGetUserTickets = () => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const getUserTicketsData = async (): Promise<void> => {
    try {
      const data = await getUserTickets()
      dispatch(setPurchasedTickets(data))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getUserTicketsData }
}
