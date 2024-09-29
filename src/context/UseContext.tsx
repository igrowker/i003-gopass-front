import { createContext, useContext } from "react"

interface ContextProps {
  alert: (message: string) => void
}

export const Context = createContext<ContextProps | null>(null)

export default () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error("useContext debe ser usado dentro de un proveedor Context")
  }
  return context
}
