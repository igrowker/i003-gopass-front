import { useState } from "react"

import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { RootState } from "../../store/"
import { Navbar } from "../components/UI/Navbar"
import VerifiedSeller from "../views/VerifiedSeller"
import Button from "../components/core/Button"
import { formatDate } from "../utils/formatDate"

export default function BuyEntryPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const ticket = useSelector((state: RootState) => state.entry.ticketToResell)
  const [isChecked, setIsChecked] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")

  const handleBuyClick = () => {
    if (!isChecked) {
      setWarningMessage("Debes aceptar las condiciones")
    } else {
      navigate(`/pagar-entrada/`, { state: { ticket } })
    }
  }

  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setIsChecked(event.target.checked)
    if (event.target.checked) {
      setWarningMessage("")
    }
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center gap-3 p-3">
        <span className="my-3 mt-20 w-[22rem]">
          <h1 className="text-xl font-semibold">{t("buy")}</h1>
        </span>

        <picture className="w-full max-w-md">
          <img
            className="h-48 w-full rounded-lg object-cover shadow-custom-avatar md:h-64"
            src={ticket?.entrada.image}
            alt={t("resaleEntry")}
          />
        </picture>

        <div className="mt-3 flex w-full max-w-md justify-between gap-5 font-semibold">
          <span className="flex">
            <GiPositionMarker className="mr-2 text-4xl text-customLigthRed" />
            <p>{ticket?.entrada.address}</p>
          </span>
          <span className="flex gap-3">
            <FaRegCalendarAlt className="mr-1 text-3xl text-customLigthRed" />
            <p>{formatDate(new Date(ticket?.entrada.eventDate))}</p>
          </span>
        </div>
        <h2 className="rounded-lg bg-customGreen p-1 px-2 text-[0.8rem] text-customWhite">
          {t("authenticityVerified")}
        </h2>
        <div className="w-full p-1">
          <h2 className="text-center text-xl font-semibold text-gray-700">{ticket?.entrada.gameName}</h2>
        </div>
        <div className="flex w-[22rem] justify-end">
          <h3 className="p-1 text-2xl font-semibold">{`Precio: ${ticket?.precio} $`}</h3>
        </div>
        <hr className="my-2 w-[90%] border-t-4" />

        <VerifiedSeller ticket={ticket} />
        <div className="mt-4 flex w-auto items-start px-4">
          <input type="checkbox" className="req mt-1 h-5 w-5" checked={isChecked} onChange={handleCheckboxChange} />
          <p className="ml-2 w-[20rem]">
            "Entiendo que estoy adquiriendo una entrada a través de un tercero en reventa y que la plataforma garantiza
            la autenticidad de la entrada en caso de que sea validada correctamente."
          </p>
        </div>
        {warningMessage && <p className="mt-2 text-xl text-customRed">{warningMessage}</p>}
        <span className="my-8 flex w-full justify-center">
          <Button onClick={handleBuyClick} className="w-[15rem] bg-customGreen text-2xl text-customWhite">
            {t("buy")}
          </Button>
        </span>
      </div>
    </>
  )
}
