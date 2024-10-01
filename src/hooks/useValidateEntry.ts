import { validateEntry } from "../service/validateEntry"
import { useDispatch } from "react-redux"
import { setEntry } from "../store/entry/entrySlice"

export const useValidateEntry = () => {
  const dispatch = useDispatch()

  const verified = async (codigoQR: string): Promise<boolean> => {
    try {
      const entryData = await validateEntry(codigoQR)
      dispatch(setEntry(entryData))

      return true
    } catch (error: any) {
      return false
    }
  }

  return { verified }
}
