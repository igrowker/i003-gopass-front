import { SystemError } from "com/errors"
import { useDispatch } from "react-redux"

import useContext from "../context/UseContext"
import { getUserTicketsSold } from "../service/getUserTicketsSold"
import { setTicketsSold } from "../store/entry/entrySlice"

export const useGetUserTicketsSold = () => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const getUserTicketsDataSold = async (): Promise<void> => {
    try {
      const data = await getUserTicketsSold()
      dispatch(setTicketsSold(data))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getUserTicketsDataSold }
}
