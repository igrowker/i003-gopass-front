// import { useState } from 'react'
import { Navbar } from "../components/UI/Navbar"
// import EntradaAutenticada from '../components/VerificarEntrada/EntradaAutenticada'
// import EntradaInvalida from '../components/VerificarEntrada/EntradaInvalida'
import ValidarEntrada from "../views/ValidateEntry"

export default function VerifyEntryPage() {
  // const [entradaValida, setEntradaValida] = useState(true)

  return (
    <>
      <Navbar />
      <ValidarEntrada />
      {/* {entradaValida ? <EntradaAutenticada /> : <EntradaInvalida />} */}
    </>
  )
}
