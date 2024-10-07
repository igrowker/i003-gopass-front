import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { useSelector } from "react-redux"

import { Navbar } from "../components/UI/Navbar"
import VerifiedSeller from "../views/VerifiedSeller"
import { RootState } from "../../store/"

export default function BuyEntryPage() {
  const { t } = useTranslation()

  const ticket = useSelector((state: RootState) => state.entry.ticketToResell)
  console.log(ticket)

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center gap-3">
        <span className="my-3 w-[22rem]">
          <h1 className="text-xl font-semibold">{t("resaleEntry")}</h1>
        </span>

        <picture>
          <img
            className="h-[20rem] w-[20rem] rounded-lg object-cover shadow-custom-avatar"
            src={ticket?.entrada.image}
            alt={t("resaleEntry")}
          />
        </picture>

        <div className="mt-3 flex w-[22rem] justify-around gap-5">
          <span className="flex">
            <GiPositionMarker className="text-xl text-customLigthRed" />
            <p>{ticket?.entrada.description}</p>
          </span>
          <span className="flex gap-3">
            <FaRegCalendarAlt className="text-xl text-customLigthRed" />
            <p> {ticket.address}</p>
          </span>
        </div>
        <h2 className="rounded-lg bg-customGreen p-1 text-[0.7rem] text-customWhite">{t("authenticityVerified")}</h2>
        <div className="w-[22rem]">
          <h2 className="text-xl font-semibold">{ticket?.gameName}</h2>
          <sup className="text-left text-sm">{t("resaleEntry")}</sup>
        </div>
        <div className="flex w-[22rem] justify-between gap-3">
          <h3 className="rounded-md border-4 border-customRed p-1 px-2 font-semibold text-customLigthRed">Barcelona</h3>
          <h3 className="rounded-md border-4 border-customRed bg-customRed p-1 px-2 font-semibold text-customWhite">
            Real Madrid
          </h3>
          <h3 className="p-1 pl-10 text-3xl font-semibold">$100</h3>
        </div>
        <hr className="my-2 w-[90%] border-t-4" />
        {/* Verificación para evitar pasar un undefined */}
        {ticket ? (
          <VerifiedSeller textButton={t("buy")} ticket={ticket} />
        ) : (
          <p>Loading</p> /* Muestra un mensaje o spinner si el `entradaId` no está listo */
        )}
      </div>
    </>
  )
}
