import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { useSelector } from "react-redux"

import { RootState } from "../../store/"
import { Navbar } from "../components/UI/Navbar"
import VerifiedSeller from "../views/VerifiedSeller"
import Button from "../components/core/Button"
import { formatDate } from "../utils/formatDate"
import { useNavigate } from "react-router-dom"

export default function BuyEntryPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const ticket = useSelector((state: RootState) => state.entry.ticketToResell)

  const handleBuyClick = () => {
    navigate(`/pagar-entrada/`, { state: { ticket } })
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center gap-3">
        <span className="my-3 mt-24 w-[22rem]">
          <h1 className="text-xl font-semibold">{t("buy")}</h1>
        </span>

        <picture>
          <img
            className="h-[20rem] w-[22rem] rounded-lg object-cover shadow-custom-avatar"
            src={ticket?.entrada.image}
            alt={t("resaleEntry")}
          />
        </picture>

        <div className="mt-3 flex w-[22rem] justify-between gap-5">
          <span className="flex">
            <GiPositionMarker className="mr-2 text-xl text-customLigthRed" />
            <p>{ticket?.entrada.address}</p>
          </span>
          <span className="flex gap-3">
            <FaRegCalendarAlt className="mr-1 text-xl text-customLigthRed" />
            <p>{formatDate(ticket?.entrada.eventDate)}</p>
          </span>
        </div>
        <h2 className="rounded-lg bg-customGreen p-1 text-[0.7rem] text-customWhite">{t("authenticityVerified")}</h2>
        <div className="w-[22rem]">
          <h2 className="text-xl font-semibold">{ticket?.entrada.gameName}</h2>
        </div>
        <div className="flex w-[22rem] justify-between gap-3">
          <h3 className="p-1 pl-10 text-3xl font-semibold">{`Price: ${ticket?.precio}`}</h3>
        </div>
        <hr className="my-2 w-[90%] border-t-4" />

        <VerifiedSeller />
        <span className="my-8 flex w-full justify-center">
          <Button onClick={handleBuyClick} className="w-[15rem] bg-customGreen text-2xl text-customWhite">
            {t("buy")}
          </Button>
        </span>
      </div>
    </>
  )
}
