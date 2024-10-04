import { verifyTicket } from "../service/verifyTicket"
import { SystemError } from "com/errors"
import { useDispatch } from "react-redux"
import { setEntry } from "../store/entry/entrySlice"

export const userVerifyTicket = () => {
  const dispatch = useDispatch()

  const verifiedTicket = async (codigoQR: string): Promise<void> => {
    try {
      const entryData = await verifyTicket(codigoQR)
      dispatch(setEntry(entryData))
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { verifiedTicket }
}
