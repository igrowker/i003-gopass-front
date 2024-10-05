import { Navbar } from "../components/UI/Navbar"
import { CardMyTickets } from "../components/UI/cardMyTickets"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useGetUserTickets } from "../../hooks/useGetUserTickets"
import { useEffect } from "react"
import { Ticket } from "../../store/entry/entrySlice"

export const MyTickets: React.FC = () => {
  const tickets = useSelector((state: RootState) => state.entry.tickets)

  const { getUserTicketsData } = useGetUserTickets()

  useEffect(() => {
    const fetchTickets = async () => {
      await getUserTicketsData()
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
