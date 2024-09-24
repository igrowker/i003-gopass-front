import { useState } from 'react'
import { Navbar } from '../UI/Navbar'
import EntradaAutenticada from '../VerificarEntradaComponent/EntradaAutenticada'
import EntradaInvalida from '../VerificarEntradaComponent/EntradaInvalida'
import ValidarEntrada from '../VerificarEntradaComponent/ValidarEntrada'

export default function VerificarEntradaComponent() {
  const [entradaValida, setEntradaValida] = useState(true)

  return (
    <>
      <Navbar />
      <ValidarEntrada />
      {/* {entradaValida ? <EntradaAutenticada /> : <EntradaInvalida />} */}
    </>
  )
}
