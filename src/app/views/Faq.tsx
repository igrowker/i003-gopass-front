export const Faq = () => {
  return (
    <div className="faq-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preguntas Frecuentes (FAQ)</h2>

      <div className="faq mb-6">
        <h3 className="text-xl font-medium text-gray-700 mb-2">
          ¿Cómo funciona la verificación de entradas en GoPass?
        </h3>
        <p className="text-gray-600">
          Utilizamos tecnología avanzada para autenticar entradas conectándonos con los proveedores oficiales. Cuando
          subes una entrada, nuestro sistema la verifica para asegurarse de que no ha sido falsificada o duplicada.
        </p>
      </div>

      <div className="faq mb-6">
        <h3 className="text-xl font-medium text-gray-700 mb-2">¿Qué tipo de entradas puedo verificar?</h3>
        <p className="text-gray-600">
          Actualmente, puedes verificar entradas para eventos deportivos. Estamos trabajando para expandir nuestra base
          de datos y ofrecer más opciones en el futuro.
        </p>
      </div>

      <div className="faq mb-6">
        <h3 className="text-xl font-medium text-gray-700 mb-2">¿Cómo sé si mi entrada es auténtica?</h3>
        <p className="text-gray-600">
          Recibirás una confirmación por correo electrónico y en tu perfil de usuario una vez que la entrada sea
          verificada como auténtica.
        </p>
      </div>
    </div>
  )
}
