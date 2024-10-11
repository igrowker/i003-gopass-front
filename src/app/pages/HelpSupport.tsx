import { Faq } from "../views/FAQ"
import { Instructions } from "../views/Instructions"
import { RefundPolicy } from "../views/RefundPolicy"
import { Support } from "../views/Support"

export const HelpSupport = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Ayuda y Soporte - GoPass</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-10 text-center">
        Bienvenido a la página de Ayuda y Soporte de GoPass. Si tienes alguna duda o inquietud acerca de la autenticidad
        de las entradas que has comprado o vendido a través de nuestra plataforma, estamos aquí para ayudarte.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preguntas Frecuentes (FAQ)</h2>
          <Faq />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instrucciones</h2>
          <Instructions />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soporte al Cliente</h2>
          <Support />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Política de Reembolso</h2>
          <RefundPolicy />
        </div>
      </div>
    </div>
  )
}
