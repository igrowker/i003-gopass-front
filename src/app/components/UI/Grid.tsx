import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { IoIosArrowDropleft } from "react-icons/io"
import { IoIosArrowDropright } from "react-icons/io"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import notTicketsImage from "../../../assets/soldout.png"
import { useGetTicketsForSell } from "../../../hooks/useGetTicketsForSell"
import { RootState } from "../../../store"
import { Ticket } from "../../../store/entry/entrySlice"
import SearchBar from "./SearchBar"

type GridProps = {
  viewType: "landing" | "allTickets"
}

export default function Grid({ viewType }: GridProps) {
  const { t } = useTranslation()
  const { getTicketsForSellData } = useGetTicketsForSell()
  // const tickets = useSelector((state: RootState) => state.entry.tickets)
  const [currentPage, setCurrentPage] = useState(1)
  const ticketsPerPage = viewType === "allTickets" ? 10 : 6
  const navigate = useNavigate()

  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const tickets = [
    {
      entradaId: 1,
      vendedorId: 5,
      compradorId: 6,
      fechaReventa: "2024-10-04T23:38:16.8229516",
      precio: 111,
      resaleDetail: "tasdasdfas",
      usuario: null,
      entrada: {
        gameName: "Partido 1: Equipo A vs Equipo B",
        description: "Descripción del partido 1",
        image:
          "https://media.airedesantafe.com.ar/p/1104be57d6bbde5daa49a8111ee3c158/adjuntos/268/imagenes/003/840/0003840291/1200x0/smart/argentina-espanapng.png",
        address: "Dirección 1, Ciudad 62",
        eventDate: "2025-08-14T14:56:16.3433897",
        codigoQR: "79f12362-d68c-4a13-9754-b25cfbde3d71",
        verificada: true,
        usuarioId: 5,
        usuario: null,
        reventa: null,
        id: 1
      },
      id: 1
    },
    {
      entradaId: 2,
      vendedorId: 5,
      compradorId: 6,
      fechaReventa: "2024-10-04T23:41:18.3529006",
      precio: 200,
      resaleDetail: "TEST",
      usuario: null,
      entrada: {
        gameName: "Partido 2: Equipo A vs Equipo B",
        description: "Descripción del partido 2",
        image:
          "https://media.airedesantafe.com.ar/p/1104be57d6bbde5daa49a8111ee3c158/adjuntos/268/imagenes/003/840/0003840291/1200x0/smart/argentina-espanapng.png",
        address: "Dirección 2, Ciudad 61",
        eventDate: "2025-02-02T14:56:16.3433932",
        codigoQR: "b44f7964-841d-42eb-bd80-b58e42265fc6",
        verificada: true,
        usuarioId: 5,
        usuario: null,
        reventa: null,
        id: 2
      },
      id: 2
    },
    {
      entradaId: 2,
      vendedorId: 5,
      compradorId: 6,
      fechaReventa: "2024-10-04T23:41:18.3529006",
      precio: 200,
      resaleDetail: "TEST",
      usuario: null,
      entrada: {
        gameName: "Partido 2: Equipo A vs Equipo B",
        description: "Descripción del partido 2",
        image:
          "https://media.airedesantafe.com.ar/p/1104be57d6bbde5daa49a8111ee3c158/adjuntos/268/imagenes/003/840/0003840291/1200x0/smart/argentina-espanapng.png",
        address: "Dirección 2, Ciudad 61",
        eventDate: "2025-02-02T14:56:16.3433932",
        codigoQR: "b44f7964-841d-42eb-bd80-b58e42265fc6",
        verificada: true,
        usuarioId: 5,
        usuario: null,
        reventa: null,
        id: 2
      },
      id: 2
    },
    {
      entradaId: 2,
      vendedorId: 5,
      compradorId: 6,
      fechaReventa: "2024-10-04T23:41:18.3529006",
      precio: 200,
      resaleDetail: "TEST",
      usuario: null,
      entrada: {
        gameName: "Partido 2: Equipo A vs Equipo B",
        description: "Descripción del partido 2",
        image:
          "https://media.airedesantafe.com.ar/p/1104be57d6bbde5daa49a8111ee3c158/adjuntos/268/imagenes/003/840/0003840291/1200x0/smart/argentina-espanapng.png",
        address: "Dirección 2, Ciudad 61",
        eventDate: "2025-02-02T14:56:16.3433932",
        codigoQR: "b44f7964-841d-42eb-bd80-b58e42265fc6",
        verificada: true,
        usuarioId: 5,
        usuario: null,
        reventa: null,
        id: 2
      },
      id: 2
    },
    {
      entradaId: 2,
      vendedorId: 5,
      compradorId: 6,
      fechaReventa: "2024-10-04T23:41:18.3529006",
      precio: 200,
      resaleDetail: "TEST",
      usuario: null,
      entrada: {
        gameName: "Partido 2: Equipo A vs Equipo B",
        description: "Descripción del partido 2",
        image:
          "https://media.airedesantafe.com.ar/p/1104be57d6bbde5daa49a8111ee3c158/adjuntos/268/imagenes/003/840/0003840291/1200x0/smart/argentina-espanapng.png",
        address: "Dirección 2, Ciudad 61",
        eventDate: "2025-02-02T14:56:16.3433932",
        codigoQR: "b44f7964-841d-42eb-bd80-b58e42265fc6",
        verificada: true,
        usuarioId: 5,
        usuario: null,
        reventa: null,
        id: 2
      },
      id: 2
    },
    {
      entradaId: 2,
      vendedorId: 5,
      compradorId: 6,
      fechaReventa: "2024-10-04T23:41:18.3529006",
      precio: 200,
      resaleDetail: "TEST",
      usuario: null,
      entrada: {
        gameName: "Partido 2: Equipo A vs Equipo B",
        description: "Descripción del partido 2",
        image:
          "https://media.airedesantafe.com.ar/p/1104be57d6bbde5daa49a8111ee3c158/adjuntos/268/imagenes/003/840/0003840291/1200x0/smart/argentina-espanapng.png",
        address: "Dirección 2, Ciudad 61",
        eventDate: "2025-02-02T14:56:16.3433932",
        codigoQR: "b44f7964-841d-42eb-bd80-b58e42265fc6",
        verificada: true,
        usuarioId: 5,
        usuario: null,
        reventa: null,
        id: 2
      },
      id: 2
    }
  ]

  useEffect(() => {
    getTicketsForSellData(currentPage, ticketsPerPage)
  }, [currentPage, ticketsPerPage])

  // useEffect(() => {
  //   const filtered = tickets.filter((ticket) => {
  //     return ticket.entrada.gameName.toLowerCase().includes(searchQuery.toLowerCase())
  //   })
  //   setFilteredTickets(filtered)
  // }, [tickets, searchQuery])

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

          {filteredTickets.length === 0 ? (
            <div className="flex justify-center">
              <img src={notTicketsImage} alt="No hay entradas" className="h-auto w-full rounded-md" />
            </div>
          ) : (
            <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8`}>
              {filteredTickets.slice(0, viewType === "landing" ? 4 : Infinity).map((ticket, index) => (
                <div key={index} className="w-full cursor-pointer" onClick={() => handleTicketClick(ticket.entradaId)}>
                  <img src={ticket?.entrada.image} alt={`Imagen`} className="h-auto w-full rounded-md" />
                  <div>
                    <p className="text-center text-[0.8rem]">{ticket?.entrada.gameName}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

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
