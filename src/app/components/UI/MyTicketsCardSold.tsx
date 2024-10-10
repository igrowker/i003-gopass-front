import { Ticket } from "../../../store/entry/entrySlice"

interface CardMyTicketsProps {
  ticket: Ticket
}

export const MyTicketsCardSold: React.FC<CardMyTicketsProps> = ({ ticket }) => {
  return (
    <div className="card overflow-hidden rounded-lg bg-white shadow-lg lg:flex lg:flex-row">
      <figure className="lg:w-1/3">
        <img className="h-full w-full object-cover" src={ticket.image} alt={ticket.gameName} />
      </figure>
      <div className="card-body p-6 lg:w-2/3">
        <h2 className="card-title mb-2 text-2xl font-bold">{ticket.gameName}</h2>
        <p className="mb-4 text-gray-700">{ticket.description}</p>
      </div>
    </div>
  )
}
