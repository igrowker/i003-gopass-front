import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { useGetTicketsForSell } from "../../hooks/useGetTicketsForSell"
import { RootState } from "../../store"
import Card from "../components/UI/Card"

import { useTranslation } from "react-i18next"

export default function LatestEntries(): JSX.Element {
  const { t } = useTranslation()
  const tickets = useSelector((state: RootState) => state.entry.tickets)
  const { getTicketsForSellData } = useGetTicketsForSell()

  const ticketsPerPage = tickets.length + 1
  const currentPage = 1

  const [userVerifiedSms, setUserVerifiedSms] = useState(false)

  useEffect(() => {
    const userVerified = sessionStorage.getItem("user.verificadoSms") === "true"
    setUserVerifiedSms(userVerified)
  }, [])

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
      {!userVerifiedSms ? (
        <div className="flex justify-center">
          <h2>
            {t("veriyProfile")}
            <Link className="text-blue-500" to="/user-profile">
              {t("here")}
            </Link>
          </h2>
        </div>
      ) : (
        sortedTickets.map((ticket, index) => <Card key={index} ticket={ticket} />)
      )}
    </>
  )
}
