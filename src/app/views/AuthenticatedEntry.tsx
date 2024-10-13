import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import QRCode from "react-qr-code"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../store"
import { clearEntry } from "../../store/entry/entrySlice"
import Button from "../components/core/Button"
import { formatDate } from "../utils/formatDate"

function AuthenticatedEntry({ onVerifyAnother }: { onVerifyAnother: () => void }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const entry = useSelector((state: RootState) => state.entry.ticketToResell)

  const eventDate = new Date(entry.eventDate)
  const formattedDate: string = formatDate(eventDate)

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
            <p>{t("authenticityVerified")}</p>
          </div>
          <div className="pt-7 text-xl font-semibold">{entry.gameName}</div>

          <div className="mt-2 p-1 pt-3 font-semibold">
            <p>{entry.description}</p>
          </div>
          <div className="text flex flex-col gap-3 pt-6 text-xl">
            <div className="flex flex-row">
              <FaRegCalendarAlt className="text-2xl text-customLigthRed" />
              <p className="ml-2">{formattedDate}</p>
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
          {t("verifyAnother")}
        </Button>
      </section>
    </>
  )
}

export default AuthenticatedEntry
