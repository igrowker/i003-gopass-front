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
      <div className="flex min-h-screen w-full flex-col items-center">
        <section className="mt-2 flex w-full flex-col items-center">
          {tickets.length === 0 ? (
            <div className="absolute flex h-full w-full items-center justify-center">
              <p className="text-xl font-semibold text-gray-500">No hay entradas disponibles</p>
            </div>
          ) : (
            <div className="mt-20 w-[90%]">
              <h2 className="m-5 text-center text-xl font-semibold">{t("myTickets")}</h2>
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
