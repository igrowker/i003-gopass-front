import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { IoIosArrowDropleft } from "react-icons/io"
import { IoIosArrowDropright } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import notTicketsImage from "../../../assets/soldout.png"
import { useGetTicketsForSell } from "../../../hooks/useGetTicketsForSell"
import { RootState } from "../../../store"
import { setSelectedTicket, Ticket } from "../../../store/entry/entrySlice"
import SearchBar from "./SearchBar"

type GridProps = {
  viewType: "landing" | "allTickets"
}

export default function Grid({ viewType }: GridProps) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { getTicketsForSellData } = useGetTicketsForSell()
  const tickets = useSelector((state: RootState) => state.entry.tickets)
  const [currentPage, setCurrentPage] = useState(1)
  const ticketsPerPage = viewType === "allTickets" ? 10 : 6
  const navigate = useNavigate()

  const [userVerifiedSms, setUserVerifiedSms] = useState(false)

  useEffect(() => {
    const userVerified = sessionStorage.getItem("user.verificadoSms") === "true"
    setUserVerifiedSms(userVerified)
  }, [])

  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    getTicketsForSellData(currentPage, ticketsPerPage)
  }, [currentPage, ticketsPerPage])

  useEffect(() => {
    const filtered = tickets.filter((ticket) =>
      ticket.entrada.gameName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredTickets(filtered)
  }, [tickets, searchQuery])

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleTicketClick = (ticket: any) => {
    navigate(`/comprar-entrada/`)
    dispatch(setSelectedTicket(ticket))
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
              <Link to="/all-tickets">
                <span className="flex w-[6rem] cursor-pointer rounded-md px-4 py-2 text-customRed">
                  {t("viewMore")}
                </span>
              </Link>
            )}
          </div>
          {viewType === "allTickets" && <SearchBar onSearch={handleSearch} />}

          {filteredTickets.length === 0 ? (
            <div className="flex justify-center">
              <img src={notTicketsImage} alt="No hay entradas" className="h-auto w-full rounded-md" />
            </div>
          ) : (
            userVerifiedSms && (
              <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4`}>
                {filteredTickets.slice(0, viewType === "landing" ? 4 : Infinity).map((ticket, index) => (
                  <div key={index} className="w-full cursor-pointer" onClick={() => handleTicketClick(ticket)}>
                    <img src={ticket?.entrada.image} alt={`Imagen`} className="h-auto w-full rounded-md" />
                    <div>
                      <p className="text-center text-[0.8rem]">{ticket?.entrada.gameName}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
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
                <span className="text-center font-azonix">
                  {t("page")} {currentPage}
                </span>
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
