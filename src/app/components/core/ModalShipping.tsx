export default function ModalShipping() {
  return (
    <div className="flex justify-center items-center">
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn">open modal</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col justify-center items-center bg-customWhite w-80">
          <img src="src/assets/lista-de-verificacion.png" className="img_check w-40 h-40" />
          <p className="py-4">Pago exitoso</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </div>
  )
}