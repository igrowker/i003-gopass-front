import QRCode from "react-qr-code"


import { Ticket } from "../../../store/entry/entrySlice"
import { formatDate } from "../../utils/formatDate"

interface CardMyTicketsProps {
  ticket: Ticket
}

export const MyTicketsCard: React.FC<CardMyTicketsProps> = ({ ticket }) => {
  const formattedDate = formatDate(ticket.entrada.eventDate)

  return (
    <div className="card bg-base-100 p-4 shadow-xl lg:card-side">
      <figure>
        <img src={ticket.entrada.image} alt={ticket.entrada.gameName} />
      </figure>
      <div className="card-body flex flex-col items-center p-4">
        <h2 className="card-title">{ticket.entrada.gameName}</h2>
        <p>{ticket.entrada.description}</p>
        <p>{ticket.entrada.address}</p>
        <p>{formattedDate}</p>
        <p className="text-sm font-semibold">Ref: {ticket.entrada.codigoQR}</p>
        <div className="card-actions justify-end"></div>
        <QRCode className="h-[15rem] w-[15rem]" value={ticket.entrada.codigoQR} />
      </div>
    </div>
  )
}
