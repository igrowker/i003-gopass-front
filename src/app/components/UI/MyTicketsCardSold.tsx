// import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa"
// import QRCode from "react-qr-code"
import { Ticket } from "../../../store/entry/entrySlice"

// import { formatDate } from "../../utils/formatDate"

interface CardMyTicketsProps {
  ticket: Ticket
}

export const MyTicketsCardSold: React.FC<CardMyTicketsProps> = ({ ticket }) => {
  // const formattedDate = formatDate(new Date(ticket.entrada.eventDate))

  return (
    <div className="card overflow-hidden rounded-lg bg-white shadow-lg lg:flex lg:flex-row">
      <figure className="lg:w-1/3">
        <img className="h-full w-full object-cover" src={ticket.image} alt={ticket.gameName} />
      </figure>
      <div className="card-body p-6 lg:w-2/3">
        <h2 className="card-title mb-2 text-2xl font-bold">{ticket.gameName}</h2>
        <p className="mb-4 text-gray-700">{ticket.description}</p>
        {/* <div className="mb-2 flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          <p>{ticket.entrada.address}</p>
        </div>
        <div className="mb-4 flex items-center text-gray-600">
          <FaCalendarAlt className="mr-2" />
          <p>{formattedDate}</p>
        </div>
        <p className="mb-4 text-sm font-semibold text-gray-500">Ref: {ticket.entrada.codigoQR}</p>
        <div className="flex justify-center lg:justify-end">
          <QRCode className="h-40 w-40" value={ticket.entrada.codigoQR} />
        </div> */}
      </div>
    </div>
  )
}
