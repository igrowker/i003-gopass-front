import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Ticket } from "../../store/entry/entrySlice"

import Card from "../components/UI/Card"
import { useGetTicketsForSell } from "../../hooks/useGetTicketsForSell"

export default function LatestEntries(): JSX.Element {
  const tickets: Ticket[] = useSelector((state: RootState) => state.entry.tickets)
  const { getTicketsForSellData } = useGetTicketsForSell()
  const ticketsPerPage = 3
  const currentPage = 1

  useEffect(() => {
    getTicketsForSellData(currentPage, ticketsPerPage)
  }, [currentPage, ticketsPerPage])

  const sortedTickets = tickets
    .slice()
    .sort((a, b) => new Date(b.fechaReventa).getTime() - new Date(a.fechaReventa).getTime())
    .slice(0, 3)

  return (
    <>
      {sortedTickets.map((ticket, index) => (
        <Card key={index} ticket={ticket} />
      ))}
    </>
  )
}
