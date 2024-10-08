import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { useLocation } from "react-router-dom"

import { formatDate } from "../utils/formatDate"

import { Navbar } from "../components/UI/Navbar"
import VerifiedSeller from "../views/VerifiedSeller"
import Button from "../components/core/Button"

import { useBuyTicket } from "../../hooks/useBuyTicket"

export default function PayEntryPage() {
  const { t } = useTranslation()
  const { buyResellTicket } = useBuyTicket()
  const location = useLocation()
  const { ticket } = location.state

  console.log("ticket", ticket)

  const handlePayTicket = async () => {
    await buyResellTicket(ticket.entradaId)
  }

  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col items-center">
        <div className="mt-24 flex w-full justify-start md:w-[20rem] md:justify-center">
          <h1 className="ml-4 text-xl font-semibold md:ml-0">{t("checkout")}</h1>
        </div>

        <div className="my-1 flex w-full justify-center p-3">
          <picture>
            <img
              className="h-[20rem] w-[22rem] rounded-lg object-cover shadow-custom-avatar"
              src={ticket?.entrada.image}
              alt={t("resaleEntry")}
            />
          </picture>
          <div className="flex w-auto flex-col gap-1 p-2">
            <h2 className="rounded-lg bg-customGreen p-1 text-center text-[0.7rem] text-customWhite">
              {t("authenticityVerified")}
            </h2>
            <h2 className="text-xl font-semibold">{ticket?.entrada.gameName}</h2>
            <sup className="text-left text-sm">{t("resaleEntry")}</sup>
            <span className="flex gap-3">
              <FaRegCalendarAlt className="text-xl text-customLigthRed" />
              <p> {formatDate(ticket?.entrada.eventDate)}</p>
            </span>
            <span className="flex">
              <GiPositionMarker className="text-xl text-customLigthRed" />
              <p>{ticket?.entrada.address}</p>
            </span>

            <span>
              <h3 className="p-1 text-3xl font-semibold">$100</h3>
            </span>
          </div>
        </div>
        <hr className="my-5 w-[90%] border-t-4" />
        <div className="flex w-[20rem] flex-col gap-1 text-[1rem] font-semibold">
          <span className="flex justify-between">
            <p>{t("gopassCommission")}</p>
            <p>$8</p>
          </span>
          <span className="flex justify-between">
            <p>{t("Total:")} </p>
            <p>$108</p>
          </span>
        </div>
        <hr className="my-5 w-[90%] border-t-4" />

        <VerifiedSeller />
        <span className="my-8 flex w-full justify-center">
          <Button onClick={handlePayTicket} className="w-[15rem] bg-customGreen text-2xl text-customWhite">
            {t("pay")}
          </Button>
        </span>
      </div>
    </>
  )
}
