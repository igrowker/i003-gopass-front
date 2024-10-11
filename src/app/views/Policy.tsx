// src/app/views/Policy.tsx
interface PolicyProps {
  onClose: () => void
}

export const Policy: React.FC<PolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-10 relative z-10 max-w-3xl mx-auto max-h-full overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-600 text-3xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Política de Reembolso</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">
          Si tu entrada es marcada como falsa o no válida y fue comprada a través de GoPass, el proceso de reembolso se
          iniciará de manera automática. Para más detalles, consulta nuestra política de reembolso.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">
          Para iniciar un reembolso, por favor contacta a nuestro equipo de soporte con la información de tu compra y
          una explicación del problema. Nuestro equipo revisará tu solicitud y te proporcionará una respuesta en un
          plazo de 3 a 5 días hábiles.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">
          Si tienes alguna pregunta adicional sobre nuestra política de reembolso, no dudes en ponerte en contacto con
          nosotros.
        </p>
      </div>
    </div>
  )
}
