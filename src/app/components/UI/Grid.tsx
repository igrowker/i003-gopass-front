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
  const tickets = useSelector((state: RootState) => state.entry.tickets) // Using Redux state
  const { getAllTicketsData } = useGetAllTickets()
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const ticketsPerPage = viewType === "allTickets" ? 15 : 6
  const navigate = useNavigate()



  const totalTickets = tickets.length
  const totalPages = Math.ceil(totalTickets / ticketsPerPage)

  useEffect(() => {
    // Filtrar entradas basadas en la búsqueda
    const filtered = tickets.filter((ticket) =>
      ticket.entrada.gameName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredTickets(filtered)
  }, [searchQuery])

  useEffect(() => {
    getAllTicketsData(currentPage, ticketsPerPage);
  }, [currentPage, ticketsPerPage]);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
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
          {/* Título y botón */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Entradas de reventa</h2>
            {viewType === "landing" && (
              <a href="/all-tickets">
                <span className="cursor-pointer rounded-md px-4 py-2 text-customRed">Ver más</span>
              </a>
            )}
          </div>
  
          {/* Solo mostrar SearchBar si el viewType es "allTickets" */}
          {viewType === "allTickets" && <SearchBar onSearch={handleSearch} />}
  
          {/* Grilla de imágenes */}
          <div className={`grid gap-4 grid-cols-2`}>
            {filteredTickets.slice(0, viewType === "landing" ? 4 : 10).map((ticket, index) => (
              <div key={index} className="w-full cursor-pointer" onClick={() => handleTicketClick(ticket.entradaId)}>
                <img src={ticket.entrada.image} alt={`Imagen ${index + 1}`} className="h-auto w-full rounded-md" />
                <div>
                  <p className="text-center text-[1rem]">{ticket.entrada.gameName}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Paginación solo para "allTickets" */}
          {viewType === "allTickets" && (
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
              >
                Anterior
              </button>
  
              {/* Números de las páginas */}
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === index + 1 ? "bg-customGreen text-white" : "bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
  
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}