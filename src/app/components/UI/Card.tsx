import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setSelectedTicket, Ticket } from "../../../store/entry/entrySlice"
import { formatDate } from "../../utils/formatDate"
import Button from "../core/Button"

interface CardProps {
  ticket: Ticket
}

export default function Card({ ticket }: CardProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formattedDate = formatDate(new Date(ticket.entrada.eventDate))

  const handleGoToBy = () => {
    dispatch(setSelectedTicket(ticket))
    navigate(`/comprar-entrada`)
  }

  return (
    <div className="flex justify-center p-2">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <figure className="relative h-48 w-full md:h-64">
          <img src={ticket.entrada.image} alt="Ticket" className="h-full w-full object-cover" />
        </figure>
        <div className="card-body pb-4">
          <h2 className="card-title text-xl font-extrabold">{ticket?.entrada.gameName}</h2>
          <p className="text-[1.1rem] font-bold text-gray-700">{formattedDate}</p>
          <p className="text-[1.3rem] font-medium">{ticket?.entrada.precio}</p>
          <div className="card-actions justify-end">
            <Button
              onClick={handleGoToBy}
              className="btn relative my-2 bg-customRed text-2xl text-customWhite hover:bg-customBlack"
            >
              {t("buy")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
