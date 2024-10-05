import { useEffect } from "react"
// import { useSelector } from "react-redux"
// import { RootState } from "../../../store"
import { useGetAllTickets } from "../../../hooks/useGetAllTickets"
import { Link } from "react-router-dom"

export default function Grid() {
  const { getAllTicketsData } = useGetAllTickets()
  // const tickets = useSelector((state: RootState) => state.entry.tickets)

  useEffect(() => {
    getAllTicketsData()
  }, [])

  return (
    <>
      <div className="flex w-full flex-col border-opacity-50">
        <div className="p-4">
          {/* Contenedor del título y botón */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Entradas de reventa</h2>
            {/* Botón que lleva a todas las imágenes */}

            <Link to="/all-tickets">
              <span className="cursor-pointer rounded-md px-4 py-2 text-customRed">Ver más</span>
            </Link>

          </div>

          {/* Grid de imágenes */}
          <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* {tickets.map((ticket, index) => (
              <div key={index} className="w-full">
                <img src={ticket.image} alt={`Imagen ${index + 1}`} className="h-auto w-full rounded-md" />
                <div>
                  <p className="text-center text-[0.8rem]">{ticket.gameName}</p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}
