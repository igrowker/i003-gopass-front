import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import Button from "../components/core/Button"

function AuthenticatedEntry() {
  return (
    <>
      <section className="flex flex-col items-center p-4">
        <div className="items-star m-4 flex flex-col">
          <div className="mb-10 text-xl font-semibold">
            <h1>Verificar una entrada</h1>
          </div>
          <div className="rounded-xl bg-customGreen p-2 text-center text-customWhite">
            <p>AUTENCIDAD VERIFICADA</p>
          </div>
          <div className="pt-7 text-xl font-semibold">Real Madrid - Barcelona</div>

          <div className="mt-8 p-1 pt-3 font-semibold">
            <p>Sector: B - Entrada: 12 - Fila: 9 - Asiento: 48</p>
          </div>
          <div className="text flex flex-col gap-3 pt-6 text-xl">
            <div className="flex flex-row">
              <FaRegCalendarAlt className="text-2xl text-customLigthRed" />
              <p className="ml-2">28 de octubre 2024</p>
            </div>
            <div className="flex flex-row">
              <GiPositionMarker className="text-2xl text-customLigthRed" /> <p className="ml-2">Camp Nou</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 flex flex-col items-center text-center">
        <div>
          <img
            className="h-60 w-60"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
          ></img>
        </div>
        <div>
          <p className="mt-4">
            <span className="font-semibold">Ref:</span> 78735287573928
          </p>
        </div>
        <Button className="-z-10 mb-6 mt-12 bg-customGreen font-semibold text-white" type="submit">
          Verificar otra
        </Button>
      </section>
    </>
  )
}

export default AuthenticatedEntry
