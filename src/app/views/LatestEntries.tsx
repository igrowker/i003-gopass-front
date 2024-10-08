import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useGetTicketsForSell } from "../../hooks/useGetTicketsForSell"
import { RootState } from "../../store"
import { Ticket } from "../../store/entry/entrySlice"
import Card from "../components/UI/Card"

export default function LatestEntries(): JSX.Element {
  const tickets: Ticket[] = useSelector((state: RootState) => state.entry.tickets)

  const { getTicketsForSellData } = useGetTicketsForSell()
  const ticketsPerPage = tickets.length + 1
  const currentPage = 1

  useEffect(() => {
    getTicketsForSellData(currentPage, ticketsPerPage)
  }, [currentPage, ticketsPerPage])

  // Filtrar entradas con compradorId !== 0
  const filteredTickets = tickets.filter((ticket) => ticket.compradorId === 0)

  const sortedTickets = filteredTickets
    .slice()
    .sort((a, b) => new Date(b.entrada.eventDate).getTime() - new Date(a.entrada.eventDate).getTime())
    .slice(0, 3)

  return (
    <>
      {sortedTickets.map((ticket, index) => (
        <Card key={index} ticket={ticket} />
      ))}
    </>
  )
}
