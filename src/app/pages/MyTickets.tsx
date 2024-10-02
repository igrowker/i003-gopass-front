import { Navbar } from "../components/UI/Navbar"
import { CardMyTickets } from "../components/UI/cardMyTickets"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useMyTickets } from "../../hooks/useMyTickets"
import { useEffect } from "react"
import { Ticket } from "../../store/entry/entrySlice"

export const MyTickets: React.FC = () => {
  const tickets = useSelector((state: RootState) => state.entry.tickets)

  const { getTickets } = useMyTickets()

  useEffect(() => {
    const fetchTickets = async () => {
      await getTickets()
    }
    fetchTickets()
  }, [])

  return (
    <>
      <Navbar />
      <div className="absolute mt-20">
        <h2 className="-z-20 m-5 text-center text-xl font-semibold">My Tickets</h2>
        <ul>
          <li>
            {tickets.map((ticket: Ticket) => (
              <CardMyTickets key={ticket.entradaId} ticket={ticket} />
            ))}
          </li>
        </ul>
      </div>
    </>
  )
}
