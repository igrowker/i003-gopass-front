import { Context } from './UseContext'

export const AppWrapper = ({ children, handleMessage }) => (
  <Context.Provider value={{ alert: handleMessage }}>
    {children}
  </Context.Provider>
)
