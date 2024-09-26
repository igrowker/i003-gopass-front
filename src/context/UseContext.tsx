import { createContext, useContext } from 'react'

export const Context = createContext()

export default () => {
    const context = useContext(Context)

    return context
}
