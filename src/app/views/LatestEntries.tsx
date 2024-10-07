import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Ticket } from "../../store/entry/entrySlice"

import Card from "../components/UI/Card"
import { useGetTicketsForSell } from "../../hooks/useGetTicketsForSell"

export default function LatestEntries(): JSX.Element {
  const tickets: Ticket[] = useSelector((state: RootState) => state.entry.tickets)
  const { getTicketsForSellData } = useGetTicketsForSell()
  const ticketsPerPage = tickets.length + 1
  const currentPage = 1

  useEffect(() => {
    getTicketsForSellData(currentPage, ticketsPerPage)
  }, [currentPage, ticketsPerPage])

  const sortedTickets = tickets
    .slice()
    .sort((a, b) => new Date(b.entrada.eventDate).getTime() - new Date(a.entrada.eventDate).getTime())
    .slice(0, 3)

  return (
    <>
      <section className='SectionCard'>
        {tickets.length === 0 ? (
          <div>
            <p className="text-xl font-semibold text-gray-500">No hay entradas disponibles</p>
          </div>
        ) : (
          <>
          {sortedTickets.map((ticket, index) => (
            <Card key={index} ticket={ticket} />
          ))}
        </>
        )}
      </section>
    </>
  )
}
