import { useState } from "react"

import { Navbar } from "../components/UI/Navbar"
import AuthenticatedEntry from "../views/AuthenticatedEntry"
import InvalidEntry from "../views/InvalidEntry"
import ValidateEntry from "../views/ValidateEntry"

export default function VerifyEntryPage( ) {
  const [entradaValida, setEntradaValida] = useState<boolean | null>(null)
  const [showValidateEntry, setShowValidateEntry] = useState(true)

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
