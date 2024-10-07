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
      <div className="card-body p-4">
        <h2 className="card-title">{ticket.entrada.gameName}</h2>
        <p>{ticket.entrada.description}</p>
        <p>{ticket.entrada.address}</p>
        <p>{formattedDate}</p>
        <p>Código QR: {ticket.entrada.codigoQR}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Mostrar QR</button>
        </div>
      </div>
    </div>
  )
}
