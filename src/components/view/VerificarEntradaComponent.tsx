import { useState } from 'react'
import { Navbar } from '../UI/Navbar'
import EntradaAutenticada from '../VerificarEntradaComponent/EntradaAutenticada'
import EntradaInvalida from '../VerificarEntradaComponent/EntradaInvalida'

export default function VerificarEntradaComponent() {
  const [entradaValida, setEntradaValida] = useState(true)

  return (
    <>
      <Navbar />
      {entradaValida ? <EntradaAutenticada /> : <EntradaInvalida />}
    </>
  )
}
