import { Navbar } from "../components/UI/Navbar"
import { MyTicketsCard } from "../components/UI/MyTicketsCard"

import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { useGetUserTickets } from "../../hooks/useGetUserTickets"
import { RootState } from "../../store"
import { Ticket } from "../../store/entry/entrySlice"


export const MyTickets: React.FC = () => {
  const tickets = useSelector((state: RootState) => state.entry.tickets)
  const { t } = useTranslation()

  const { getUserTicketsData } = useGetUserTickets()

  useEffect(() => {
    const fetchTickets = async () => {
      await getUserTicketsData()
    }
    fetchTickets()
  }, [])

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <section className="mt-20 absolute">
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
