import { getTicketsForSell } from "../service/getTicketsForSell"
import { useDispatch } from "react-redux"
import { setSellTickets } from "../store/entry/entrySlice"
import { SystemError } from "com/errors"
import useContext from "../context/UseContext"

export const useGetTicketsForSell = () => {
  const { alert } = useContext()

  const dispatch = useDispatch()

  const getTicketsForSellData = async (pageNumber: number, pageSize: number): Promise<void> => {
    try {
      const data = await getTicketsForSell(pageNumber, pageSize)
      dispatch(setSellTickets(data))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getTicketsForSellData }
}
