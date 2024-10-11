export const Instructions = () => {
  return (
    <div className="instructions-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instrucciones paso a paso</h2>

      <h3 className="text-xl font-medium text-gray-700 mb-2">¿Cómo verificar una entrada en GoPass?</h3>
      <ol className="list-decimal list-inside text-gray-600 mb-6">
        <li>Inicia sesión en tu cuenta de GoPass.</li>
        <li>Sube una foto o archivo digital de tu entrada.</li>
        <li>Espera a que el sistema complete la verificación (esto puede tardar hasta 24 horas).</li>
        <li>Recibirás una notificación cuando el proceso esté completo.</li>
      </ol>

      <h3 className="text-xl font-medium text-gray-700 mb-2">¿Cómo vender una entrada a través de GoPass?</h3>
      <ol className="list-decimal list-inside text-gray-600 mb-6">
        <li>Inicia sesión y selecciona la opción "Vender Entrada".</li>
        <li>Sube tu entrada para su verificación.</li>
        <li>Una vez que esté verificada, se listará para la venta en nuestra plataforma.</li>
        <li>Cuando se venda, recibirás el pago de forma segura en tu cuenta.</li>
      </ol>

      <h3 className="text-xl font-medium text-gray-700 mb-2">¿Cómo comprar una entrada verificada en GoPass?</h3>
      <ol className="list-decimal list-inside text-gray-600 mb-6">
        <li>Explora los eventos disponibles en nuestra plataforma.</li>
        <li>Asegúrate de que la entrada tenga el sello "Entrada Verificada".</li>
        <li>Realiza la compra y recibirás tu entrada por correo electrónico.</li>
      </ol>
    </div>
  )
}
