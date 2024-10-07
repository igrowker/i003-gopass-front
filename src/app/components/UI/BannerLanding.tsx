import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { RootState } from "../../../store"

export default function BannerLanding() {
  // const tickets = useSelector((state: RootState) => state.entry.tickets)

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
    }
  ]

  const imagesBanner =
    tickets.length > 0
      ? tickets.map((ticket) => ticket.entrada.image)
      : [
          "https://images.unsplash.com/photo-1569863959165-56dae551d4fc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesBanner.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [imagesBanner.length])

  return (
    <div className="flex justify-center">
      <div className="carousel m-3 mt-24 w-full items-center justify-center rounded-md">
        <div className="carousel-item relative w-full">
          <div className="h-64 w-full sm:h-80 md:h-96 lg:h-[500px]">
            <img src={imagesBanner[currentIndex]} alt="banner" className="h-full w-full rounded-md object-contain" />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
        </div>
      </div>
    </div>
  )
}
