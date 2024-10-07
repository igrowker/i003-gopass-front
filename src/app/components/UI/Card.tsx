import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setSelectedEntradaId } from "../../../store/entry/entrySlice"
import { formatDate } from "../../utils/formatDate"
import Button from "../core/Button"

interface CardProps {
  ticket: Ticket
}

export default function Card({ ticket }: CardProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const formattedDate = formatDate(ticket.entrada.eventDate)

  const handleGoToBy = () => {
    dispatch(setSelectedEntradaId(ticket.entradaId))
    navigate(`/comprar-entrada`)
  }

  return (
    <>
      <div className="flex justify-center p-2">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img src={ticket.entrada.image} alt="Ticket" />
          </figure>
          <div className="card-body pb-4">
            <h2 className="card-title text-xl font-bold">{ticket?.entrada.gameName}</h2>
            <p className="text-[1.1rem] font-medium">{formattedDate}</p>
            <p className="text-[1.3rem] font-medium">{ticket?.entrada.precio}</p>
            <div className="card-actions justify-end">
              <Button
                onClick={handleGoToBy}
                className="btn relative -mt-8 bg-customGreen text-2xl text-customWhite hover:bg-customBlack"
              >
                {t("buy")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
