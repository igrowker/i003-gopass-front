import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useGetTicketsForSell } from "../../hooks/useGetTicketsForSell"
import { RootState } from "../../store"
import { Ticket } from "../../store/entry/entrySlice"
import Card from "../components/UI/Card"

export default function LatestEntries(): JSX.Element {
  // const tickets: Ticket[] = useSelector((state: RootState) => state.entry.tickets)

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
      {tickets.map((ticket, index) => (
        <Card key={index} ticket={ticket} />
      ))}
    </>
  )
}
