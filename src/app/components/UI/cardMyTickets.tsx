import { Ticket } from "../../../store/entry/entrySlice"

interface CardMyTicketsProps {
  ticket: Ticket
}

export const CardMyTickets: React.FC<CardMyTicketsProps> = ({ ticket }) => {
  // Formatear la fecha
  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false 
  }).format(new Date(ticket.entrada.eventDate));

  return (
    <div className="card bg-base-100 p-4 shadow-xl lg:card-side">
      <figure>
        <img src={ticket.entrada.image} alt={ticket.entrada.gameName} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{ticket.entrada.gameName}</h2>
        <p>{ticket.entrada.description}</p>
        <p>{ticket.entrada.address}</p>
        <p>{formattedDate}</p> {/* Fecha formateada */}
        <p>Código QR: {ticket.entrada.codigoQR}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Mostrar QR</button>
        </div>
      </div>
    </div>
  )
}