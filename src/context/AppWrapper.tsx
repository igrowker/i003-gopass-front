import { Context } from "./useContext"

interface AppWrapperProps {
  children: React.ReactNode
  handleMessage: (message: string) => void
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children, handleMessage }) => (
  <Context.Provider value={{ alert: handleMessage }}>{children}</Context.Provider>
)
