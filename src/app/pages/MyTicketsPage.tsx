import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { useGetUserTickets } from "../../hooks/useGetUserTickets"
import { RootState } from "../../store"
import { Ticket } from "../../store/entry/entrySlice"
import { MyTicketsCard } from "../components/UI/MyTicketsCard"
import { Navbar } from "../components/UI/Navbar"

export const MyTickets: React.FC = () => {
  const tickets = useSelector((state: RootState) => state.entry.purchasedTickets)
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
      <div className="mb-5 flex min-h-screen w-full flex-col items-center">
        <section className="flex w-full flex-col items-center">
          {tickets.length === 0 ? (
            <div className="absolute flex h-full w-full items-center justify-center">
              <p className="text-xl font-semibold text-gray-500">{t("noEntriesAvailable")}</p>
            </div>
          ) : (
            <div className="mt-20 w-[90%]">
              <h2 className="m-5 text-center text-xl font-semibold">{t("myTicketsPurchased")}</h2>
              <ul>
                {tickets.map((ticket: Ticket, index) => (
                  <li className="mt-5" key={index}>
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
