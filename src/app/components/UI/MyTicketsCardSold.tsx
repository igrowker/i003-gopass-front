import { Ticket } from "../../../store/entry/entrySlice"
import { formatDate } from "../../utils/formatDate"

interface CardMyTicketsProps {
  ticket: Ticket
}

export const MyTicketsCardSold: React.FC<CardMyTicketsProps> = ({ ticket }) => {
  const formattedDate = formatDate(new Date(ticket.eventDate))

  return (
    <div className="card overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl lg:flex lg:flex-row">
      <figure className="lg:w-1/3">
        <img className="h-full w-full object-cover" src={ticket.image} alt={ticket.gameName} />
      </figure>
      <div className="card-body bg-gray-50 p-6 lg:w-2/3">
        <h2 className="card-title mb-2 text-2xl font-bold text-gray-800">{ticket.gameName}</h2>
        <p className="mb-4 text-gray-600">{ticket.description}</p>
        <p className="mb-4 text-gray-600">{formattedDate}</p>
      </div>
    </div>
  )
}
