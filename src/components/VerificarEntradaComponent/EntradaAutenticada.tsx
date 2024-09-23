import { FaRegCalendarAlt } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import Button from '../core/Button/Button'

function EntradaAutenticada() {
  return (
    <>
      <section className="flex flex-col items-center p-4">
        <div className="m-4 flex flex-col items-star">
          <div className="mb-10 font-semibold text-xl">
            <h1>Verifica tu entrada</h1>
          </div>
          <div className="p-2 bg-customGreen rounded-xl text-center text-customWhite">
            <p>AUTENCIDAD VERIFICADA</p>
          </div>
          <div className="font-semibold text-xl pt-7">
            Real Madrid - Barcelona
          </div>

          <div className="pt-3 font-semibold mt-8 p-1">
            <p>Sector: B - Entrada: 12 - Fila: 9 - Asiento: 48</p>
          </div>
          <div className="pt-6 flex flex-col gap-3 text-xl text">
            <div className=" flex flex-row">
              <FaRegCalendarAlt className="text-customLigthRed text-2xl" />
              <p className="ml-2">28 de octubre 2024</p>
            </div>
            <div className="flex flex-row">
              <GiPositionMarker className="text-customLigthRed text-2xl" />{' '}
              <p className="ml-2">Camp Nou</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 flex flex-col text-center items-center">
        <div>
          <img
            className="w-60 h-60"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
          ></img>
        </div>
        <div>
          <p className="mt-4">
            <span className="font-semibold">Ref:</span> 78735287573928
          </p>
        </div>
        <Button
          className="mt-12 mb-6 bg-customGreen text-white font-semibold -z-10"
          type="submit"
        >
          Verificar otra
        </Button>
      </section>
    </>
  )
}

export default EntradaAutenticada
