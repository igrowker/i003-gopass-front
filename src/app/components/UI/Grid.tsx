import { useEffect, useState } from "react"
import { useGetTicketsForSell } from "../../../hooks/useGetTicketsForSell"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../../store"
import { Ticket } from "../../../store/entry/entrySlice"
import SearchBar from "./SearchBar"

import { IoIosArrowDropleft } from "react-icons/io"
import { IoIosArrowDropright } from "react-icons/io"

type GridProps = {
  viewType: "landing" | "allTickets"
}

export default function Grid({ viewType }: GridProps) {
  const { t } = useTranslation()
  const { getTicketsForSellData } = useGetTicketsForSell()
  const tickets = useSelector((state: RootState) => state.entry.tickets)
  const [currentPage, setCurrentPage] = useState(1)
  const ticketsPerPage = viewType === "allTickets" ? 10 : 6
  const navigate = useNavigate()

  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    getTicketsForSellData(currentPage, ticketsPerPage)
  }, [currentPage, ticketsPerPage])

  useEffect(() => {

    const filtered = tickets.filter((ticket) => 
      ticket.entrada.compradorId !== 0 &&
      ticket.entrada.gameName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredTickets(filtered)
  }, [tickets, searchQuery])

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleTicketClick = (ticketId: number) => {
    navigate(`/comprar-entrada/${ticketId}`)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <>
      <div className={`flex w-full flex-col border-opacity-50`}>
        <div className={`p-4 ${viewType === "landing" ? "" : "mt-24"}`}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">{t("resaleTickets")}</h2>
            {viewType === "landing" && (
              <a href="/all-tickets">
                <span className="cursor-pointer rounded-md px-4 py-2 text-customRed">{t("viewMore")}</span>
              </a>
            )}
          </div>
          {viewType === "allTickets" && <SearchBar onSearch={handleSearch} />}

          <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8`}>
            {filteredTickets.slice(0, viewType === "landing" ? 4 : 10).map((ticket, index) => (
              <div key={index} className="w-full cursor-pointer" onClick={() => handleTicketClick(ticket.entradaId)}>
                <img src={ticket?.entrada.image} alt={`Imagen ${index + 1}`} className="h-auto w-full rounded-md" />
                <div>
                  <p className="text-center text-[0.8rem]">{ticket?.entrada.gameName}</p>
                </div>
              </div>
            ))}
          </div>

          {viewType === "allTickets" && (
            <>
              <div className="mt-4 flex w-full items-center justify-around">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="flex items-center rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
                >
                  <IoIosArrowDropleft className="mr-2 text-3xl" />
                </button>
                <span className="text-center">Página {currentPage}</span>
                <button
                  onClick={handleNextPage}
                  disabled={tickets.length < ticketsPerPage}
                  className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
                >
                  <IoIosArrowDropright className="mr-2 text-3xl" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}