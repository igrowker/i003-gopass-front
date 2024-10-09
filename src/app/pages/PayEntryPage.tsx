import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"

import { formatDate } from "../utils/formatDate"
import { Navbar } from "../components/UI/Navbar"
import VerifiedSeller from "../views/VerifiedSeller"
import Button from "../components/core/Button"
import { useBuyTicket } from "../../hooks/useBuyTicket"

export default function PayEntryPage() {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const { buyResellTicket } = useBuyTicket()
  const { ticket } = location.state
  const [commission, setCommission] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const ticketPrice = ticket?.precio
    const calculatedCommission = ticketPrice * 0.08
    const calculatedTotal = ticketPrice + calculatedCommission

    setCommission(calculatedCommission)
    setTotal(calculatedTotal)
  }, [ticket])

  const handlePayTicket = async () => {
    await buyResellTicket(ticket.entradaId)
    navigate(`/ticket`, { state: { ticket } })
  }

  return (
    <>
      <Navbar />
      <div className="mb-4 flex w-full flex-col items-center">
        <div className="mt-24 flex w-full justify-center">
          <h1 className="text-xl font-semibold">{t("pay")}</h1>
        </div>

        <div className="my-1 flex w-full flex-col items-center p-1 md:flex-row md:justify-center">
          <picture className="flex w-full justify-center md:w-auto">
            <img
              className="h-auto w-full max-w-[22rem] rounded-lg object-cover shadow-custom-avatar md:h-[20rem] md:max-w-none"
              src={ticket?.entrada.image}
              alt={t("resaleEntry")}
            />
          </picture>
          <div className="mt-5 flex w-full flex-col items-center gap-1 md:w-auto md:items-start">
            <h2 className="mb-3 rounded-lg bg-customGreen p-1 text-center text-[0.7rem] text-customWhite">
              {t("authenticityVerified")}
            </h2>
            <h2 className="font-semibold">{ticket?.entrada.gameName}</h2>
            <sup className="mt-2 font-azonix text-[0.6rem]">{t("resaleEntry")}</sup>
            <span className="flex gap-3">
              <FaRegCalendarAlt className="text-xl text-customLigthRed" />
              <p>{formatDate(ticket?.entrada.eventDate)}</p>
            </span>
            <span className="flex">
              <GiPositionMarker className="text-xl text-customLigthRed" />
              <p>{ticket?.entrada.address}</p>
            </span>

            <span>
              <h3 className="p-1 text-2xl font-semibold">{`Precio : $${ticket?.precio}`}</h3>
            </span>
          </div>
        </div>
        <hr className="my-5 w-[90%] border-t-4" />
        <div className="flex w-[20rem] flex-col gap-1 text-[1rem] font-semibold">
          <span className="flex justify-between">
            <p>{t("gopassComimssion")}</p>
            <p>{`$${commission.toFixed(2)}`}</p>
          </span>
          <span className="flex justify-between">
            <p>{t("total")}</p>
            <p>{`$${total.toFixed(2)}`}</p>
          </span>
        </div>
        <hr className="my-5 w-[90%] border-t-4" />

        <VerifiedSeller ticket={ticket} />

        <Button onClick={handlePayTicket} className="w-[15rem] bg-customGreen text-2xl text-customWhite">
          {t("pay")}
        </Button>
      </div>
    </>
  )
}
