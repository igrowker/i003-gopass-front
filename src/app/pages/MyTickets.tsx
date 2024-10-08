import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { useGetUserTickets } from "../../hooks/useGetUserTickets"
import { RootState } from "../../store"
import { Ticket } from "../../store/entry/entrySlice"

export const MyTickets: React.FC = () => {
  // const tickets = useSelector((state: RootState) => state.entry.tickets)
  const { t } = useTranslation()

  const { getUserTicketsData } = useGetUserTickets()

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
    const fetchTickets = async () => {
      await getUserTicketsData()
    }
    fetchTickets()
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <section className="relative mt-20">
          {tickets.length === 0 ? (
            <div>
              <p className="text-xl font-semibold text-gray-500">No hay entradas disponibles</p>
            </div>
          ) : (
            <div className="absolute mt-20">
              <h2 className="-z-20 m-5 text-center text-xl font-semibold">{t("myTickets")}</h2>
              <ul>
                {tickets.map((ticket: Ticket, index) => (
                  <li key={index}>
                    <MyTicketsCard ticket={ticket} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
