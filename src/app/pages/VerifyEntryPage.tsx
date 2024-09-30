import { useState } from "react"
import { Navbar } from "../components/UI/Navbar"

import ValidateEntry from "../views/ValidateEntry"
import AuthenticatedEntry from "../views/AuthenticatedEntry"
import InvalidEntry from "../views/InvalidEntry"

export default function VerifyEntryPage() {
  const [entradaValida, setEntradaValida] = useState(false)
  const [showValidateEntry, setShowValidateEntry] = useState(true)

  const handleValidate = () => {
    setEntradaValida(!entradaValida)
    setShowValidateEntry(!showValidateEntry)
  }

  return (
    <>
      <Navbar />
      {showValidateEntry && <ValidateEntry onValidate={handleValidate} />}
    </>
  )
}
