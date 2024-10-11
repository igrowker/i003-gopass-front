export const TroubleshootingGuide = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-10 relative z-10 max-w-3xl mx-auto h-1/2 overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-600 text-3xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guía de Solución de Problemas</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">
          Si estás experimentando problemas técnicos con la aplicación GoPass, sigue estos pasos para intentar
          resolverlos:
        </p>

        <h3 className="text-xl font-medium text-gray-700 mb-2">Problemas de inicio de sesión</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Verifica que estás utilizando la dirección de correo electrónico y la contraseña correctas.</li>
          <li>Asegúrate de que tu conexión a Internet esté funcionando correctamente.</li>
          <li>
            Intenta restablecer tu contraseña utilizando la opción "¿Olvidaste tu contraseña?" en la página de inicio de
            sesión.
          </li>
        </ul>

        <h3 className="text-xl font-medium text-gray-700 mb-2">Problemas de verificación de entradas</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Asegúrate de que la imagen o archivo de la entrada sea claro y legible.</li>
          <li>Verifica que la entrada no haya sido previamente utilizada o marcada como inválida.</li>
          <li>Si el problema persiste, contacta a nuestro equipo de soporte para asistencia adicional.</li>
        </ul>
      </div>
    </div>
  )
}
