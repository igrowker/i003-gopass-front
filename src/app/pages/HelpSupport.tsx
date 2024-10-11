import { Faq } from "../views/FAQ"
import { Instructions } from "../views/Instructions"
import { RefundPolicy } from "../views/RefundPolicy"
import { Support } from "../views/Support"

export const HelpSupport = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 font-sans">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Ayuda y Soporte - GoPass</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-10 text-center">
        Bienvenido a la página de Ayuda y Soporte de GoPass.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Faq />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <Instructions />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <Support />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <RefundPolicy />
        </div>
      </div>
    </div>
  )
}
