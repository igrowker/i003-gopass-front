import { useDispatch } from "react-redux"

import { validateEntry } from "../service/validateEntry"
import { setEntry } from "../store/entry/entrySlice"

export const useValidateEntry = () => {
  const dispatch = useDispatch()

  const verified = async (codigoQR: string): Promise<boolean> => {
    try {
      const entryData = await validateEntry(codigoQR)
      dispatch(setEntry(entryData))

      return true
    } catch {
      return false
    }
  }

  return { verified }
}
