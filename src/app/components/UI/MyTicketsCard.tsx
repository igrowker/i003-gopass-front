import { useTranslation } from "react-i18next"

import { Ticket } from "../../../store/entry/entrySlice"
import { formatDate } from "../../utils/formatDate"

interface CardMyTicketsProps {
  ticket: Ticket
}

export const MyTicketsCard: React.FC<CardMyTicketsProps> = ({ ticket }) => {
  const { t } = useTranslation()
  const formattedDate = formatDate(ticket.entrada.eventDate)

  return (
    <div className="card bg-base-100 p-4 shadow-xl lg:card-side">
      <figure>
        <img src={ticket.entrada.image} alt={ticket.entrada.gameName} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-2xl mt-2">{ticket.entrada.gameName}</h2>
        <p>{ticket.entrada.description}</p>
        <p>{ticket.entrada.address}</p>
        <p>{formattedDate}</p>
        <p className="mt-4">Código QR:</p>
        <p>{ticket.entrada.codigoQR}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-red-500 text-customWhite mt-4 px-10">QR</button>
        </div>
      </div>
    </div>
  )
}
