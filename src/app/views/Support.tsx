import { useState } from "react"

import { TroubleshootingGuide } from "../views/TroubleshootingGuide"

export const Support = () => {
  const [showGuide, setShowGuide] = useState(false)

  const handleShowGuide = () => {
    setShowGuide(true)
  }

  const handleCloseGuide = () => {
    setShowGuide(false)
  }

  return (
    <div className="support-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soporte al Cliente</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-5">
        Si tienes algún problema con el proceso de verificación o necesitas asistencia, nuestro equipo está disponible
        para ayudarte.
      </p>

      <h3 className="text-xl font-medium text-gray-700 mb-2">Opciones de contacto:</h3>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        {/* <li>
          <strong>Chat en vivo:</strong> Haz clic en el botón de chat en la esquina inferior derecha.
        </li> */}
        <li>
          <strong>Correo electrónico:</strong> soporte@gopass.com
        </li>
        <li>
          <strong>Teléfono:</strong> +123-456-7890 (Lunes a Viernes, 9:00 a.m. a 6:00 p.m.)
        </li>
      </ul>

      <h3 className="text-xl font-medium text-gray-700 mb-2">Preguntas técnicas o problemas con la app:</h3>
      <p className="text-lg text-gray-600 leading-relaxed mb-5">
        Si experimentas problemas técnicos, revisa nuestra{" "}
        <span className="text-blue-500 underline cursor-pointer" onClick={handleShowGuide}>
          Guía de Solución de Problemas
        </span>{" "}
        o contacta directamente con nuestro equipo.
      </p>

      {showGuide && <TroubleshootingGuide onClose={handleCloseGuide} />}
    </div>
  )
}
