import { useState } from "react"

import { Policy } from "../views/Policy"

export const RefundPolicy = () => {
  const [showPolicy, setShowPolicy] = useState(false)

  const handleShowPolicy = () => {
    setShowPolicy(true)
  }

  const handleClosePolicy = () => {
    setShowPolicy(false)
  }

  return (
    <div className="refund-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Políticas de Reembolso</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-5">
        Si tu entrada es marcada como falsa o no válida y fue comprada a través de GoPass, el proceso de reembolso se
        iniciará de manera automática. Para más detalles, consulta nuestra{" "}
        <span className="text-blue-500 underline cursor-pointer" onClick={handleShowPolicy}>
          Política de Reembolso
        </span>
        .
      </p>
      {showPolicy && <Policy onClose={handleClosePolicy} />}
    </div>
  )
}
