import { useState } from "react"
import { Navbar } from "../components/UI/Navbar"

import ValidateEntry from "../views/ValidateEntry"
import AuthenticatedEntry from "../views/AuthenticatedEntry"
import InvalidEntry from "../views/InvalidEntry"

export default function VerifyEntryPage() {
  // Estado para saber si la entrada es válida o no
  const [entradaValida, setEntradaValida] = useState<boolean | null>(null)
  const [showValidateEntry, setShowValidateEntry] = useState(true)

  // Función para manejar el resultado de la validación
  const handleValidate = (isValid: boolean) => {
    setEntradaValida(isValid)
    setShowValidateEntry(false) // Oculta la vista de validación
  }

  const handleVerifyAnother = () => {
    setEntradaValida(null)
    setShowValidateEntry(true) // Muestra la vista de validación
  }

  return (
    <>
      <Navbar />

      {showValidateEntry && <ValidateEntry onValidate={handleValidate} />}

      {!showValidateEntry &&
        (entradaValida ? (
          <AuthenticatedEntry onVerifyAnother={handleVerifyAnother} />
        ) : (
          <InvalidEntry onVerifyAnother={handleVerifyAnother} />
        ))}
    </>
  )
}
