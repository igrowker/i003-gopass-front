import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"
import { useGetAllTickets } from "../../../hooks/useGetAllTickets"
import SearchBar from "./SearchBar"
import { Ticket } from "../../../store/entry/entrySlice"

type GridProps = {
  viewType: "landing" | "allTickets"
}

export default function Grid({ viewType }: GridProps) {
  const { getAllTicketsData } = useGetAllTickets()
  const tickets = useSelector((state: RootState) => state.entry.tickets)
  const [currentPage, setCurrentPage] = useState(1)
  const ticketsPerPage = viewType === "allTickets" ? 15 : 6
  const navigate = useNavigate()

  // Aseguramos que el estado tenga el tipo correcto
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getAllTicketsData(currentPage, ticketsPerPage)
  }, [currentPage, ticketsPerPage])

  useEffect(() => {
    const filtered = tickets.filter((ticket) =>
      ticket.gameName.toLowerCase().includes(searchQuery.toLowerCase())
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
    setSearchQuery(query) // Actualiza el estado de búsqueda
  }

  return (
    <>
      <div className={`flex w-full flex-col border-opacity-50`}>
        <div className={`p-4 ${viewType === "landing" ? "" : "mt-24"}`}>
          {/* Contenedor del título y botón */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Entradas de reventa</h2>
            {viewType === "landing" && (
              <a href="/all-tickets">
                <span className="cursor-pointer rounded-md px-4 py-2 text-customRed">Ver más</span>
              </a>
            )}
          </div>

          {/* Grid de imágenes */}
          <div className={`grid grid-cols-3 gap-4`}>
            {filteredTickets.map((ticket, index) => (
              <div key={index} className="w-full cursor-pointer" onClick={() => handleTicketClick(ticket.entradaId)}>
                <img src={ticket.image} alt={`Imagen ${index + 1}`} className="h-auto w-full rounded-md" />
                <div>
                  <p className="text-center text-[0.8rem]">{ticket.gameName}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación solo para la vista allTickets */}
          {viewType === "allTickets" && (
            <>
              <SearchBar onSearch={handleSearch} />

              <div className="mt-4 flex justify-between">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
                >
                  Anterior
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={tickets.length < ticketsPerPage}
                  className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
                >
                  Siguiente
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}