import { Ticket } from "../../../store/entry/entrySlice"

interface CardMyTicketsProps {
  ticket: Ticket
}

export const MyTicketsCard: React.FC<CardMyTicketsProps> = ({ ticket }) => {
  return (
    <div className="card bg-base-100 p-4 shadow-xl lg:card-side">
      <figure>
        <img src={ticket.image} alt={ticket.gameName} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{ticket.gameName}</h2>
        <p>{ticket.description}</p>
        <p>{ticket.address}</p>
        <p>{ticket.eventDate}</p>
        <p>Código QR: {ticket.codigoQR}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Mostrar QR</button>
        </div>
      </div>
    </div>
  )
}
