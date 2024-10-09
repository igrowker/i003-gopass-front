import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { HiDownload } from "react-icons/hi"
import { useLocation } from "react-router-dom"
import { formatDate } from "../utils/formatDate"
import { Link } from "react-router-dom"
import QRCode from "react-qr-code"

import { Navbar } from "../components/UI/Navbar"

export default function Ticket() {
  const { t } = useTranslation()
  const location = useLocation()
  // const { ticket } = location.state
  const [isVerified, setIsVerified] = useState(false)

  const ticket = 
    {
      "entradaId": 2,
      "vendedorId": 5,
      "compradorId": 6,
      "fechaReventa": "2024-10-04T23:41:18.3529006",
      "precio": 200,
      "resaleDetail": "TEST",
      "usuario": null,
      "entrada": {
        "gameName": "Partido 2: Equipo A vs Equipo B",
        "description": "Descripción del partido 2",
        "image": "https://media.airedesantafe.com.ar/p/1104be57d6bbde5daa49a8111ee3c158/adjuntos/268/imagenes/003/840/0003840291/1200x0/smart/argentina-espanapng.png",
        "address": "Dirección 2, Ciudad 61",
        "eventDate": "2025-02-02T14:56:16.3433932",
        "codigoQR": "b44f7964-841d-42eb-bd80-b58e42265fc6",
        "verificada": true,
        "usuarioId": 5,
        "usuario": null,
        "reventa": null,
        "id": 2
      },
      "id": 2
    }

  const handleVerified = () => {
    setIsVerified(!isVerified)
  }

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col">
        <div className="m-5 mt-24 text-center text-xl font-semibold">
          <h1>{t("yourEntry")}</h1>
        </div>

        <section className="flex flex-col items-center text-center">
          <div>
            <QRCode className="h-[15rem] w-[15rem]" value={ticket.entrada.codigoQR} />
          </div>
          <div>
            <p className="mt-4">
              <span className="font-semibold">Ref:</span> {ticket.entrada.codigoQR}
            </p>
          </div>
          <div className="m-4 rounded-xl bg-customGreen p-2 text-customWhite">
            <p>{t("authenticityVerified")}</p>
          </div>

          <div className="w-full p-1">
            <h2 className="text-center text-xl font-semibold text-gray-700">{ticket?.entrada.gameName}</h2>
          </div>

          <div className="p-1 pt-3 font-semibold">
            <p>{ticket.entrada.description}</p>
          </div>

          <div className="text flex flex-col gap-3 pt-6 text-xl">
            <div className="flex flex-row">
              <span className="flex gap-3">
                <FaRegCalendarAlt className="mr-1 text-3xl text-customGreen" />
                <p>{formatDate(new Date(ticket.entrada.eventDate))}</p>
              </span>
            </div>
            <div className="flex flex-row">
              <GiPositionMarker className="text-2xl text-customGreen" />{" "}
              <p className="ml-2">{ticket.entrada.address}</p>
            </div>
          </div>

          <div className="flex flex-row space-x-20 pt-10 pb-5 text-xl">
            <p>
              {t("problems")} <Link className="underline underline-offset-1 text-blue-500" to="/contact">{t("contactUs")}</Link>
            </p>

            <button className="text-4xl text-customLigthRed">
              <HiDownload />
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
