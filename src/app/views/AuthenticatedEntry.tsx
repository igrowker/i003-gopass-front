import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store"
import { clearEntry } from "../../store/entry/entrySlice"

import QRCode from "react-qr-code"

import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import Button from "../components/core/Button"

function AuthenticatedEntry({ onVerifyAnother }: { onVerifyAnother: () => void }) {
  const dispatch = useDispatch()
  const entry = useSelector((state: RootState) => state.entry.tickets[0])

  const handleVerifyAnother = () => {
    dispatch(clearEntry())
    onVerifyAnother()
  }

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
          <div className="pt-7 text-xl font-semibold">{entry.gameName}</div>

          <div className="mt-2 p-1 pt-3 font-semibold">
            <p>{entry.description}</p>
          </div>
          <div className="text flex flex-col gap-3 pt-6 text-xl">
            <div className="flex flex-row">
              <FaRegCalendarAlt className="text-2xl text-customLigthRed" />
              <p className="ml-2">{entry.eventDate}</p>
            </div>
            <div className="flex flex-row">
              <GiPositionMarker className="text-2xl text-customLigthRed" /> <p className="ml-2">{entry.address}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-2 flex flex-col items-center text-center">
        <div>
          <QRCode className="h-[15rem] w-[15rem]" value={entry.codigoQR} />
        </div>
        <div>
          <p className="mt-4">
            <span className="font-semibold">Ref:</span> {entry.codigoQR}
          </p>
        </div>
        <Button
          onClick={handleVerifyAnother}
          className="mb-6 mt-4 bg-customGreen font-semibold text-white hover:bg-customLigthRed"
        >
          Verificar otra
        </Button>
      </section>
    </>
  )
}

export default AuthenticatedEntry
