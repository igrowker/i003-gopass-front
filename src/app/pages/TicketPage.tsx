import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { HiDownload } from "react-icons/hi"

import { Navbar } from "../components/UI/Navbar"

export default function Ticket() {
  const { t } = useTranslation()
  const [isVerified, setIsVerified] = useState(false)

  const handleVerified = () => {
    setIsVerified(!isVerified)
  }

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col">
        <div className="m-5 text-center text-xl font-semibold">
          <h1>{t("yourEntry")}</h1>
        </div>

        <section className="flex flex-col items-center text-center">
          <div>
            <img
              className="h-80 w-80"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
            ></img>
          </div>
          <div>
            <p>
              <span className="font-semibold">Ref:</span> 78735287573928
            </p>
          </div>
          <div
            onClick={handleVerified}
            className={`rounded-xl p-2 text-customWhite ${isVerified ? "bg-customGreen" : "bg-customLigthRed"}`}
          >
            <p>
              {t("authenticity")} {isVerified ? t("verified") : t("notVerified")}
            </p>
          </div>

          <div className="pt-7 text-xl font-semibold">Real Madrid - Barcelona</div>

          <div className="p-1 pt-3 font-semibold">
            <p>Sector: B - Entrada: 12 - Fila: 9 - Asiento: 48</p>
          </div>

          <div className="text flex flex-col gap-3 pt-6 text-xl">
            <div className="flex flex-row">
              <FaRegCalendarAlt className="text-2xl text-customLigthRed" />
              <p>28 de octubre 2024</p>
            </div>
            <div className="flex flex-row">
              <GiPositionMarker className="text-2xl text-customLigthRed" /> <p>Camp Nou</p>
            </div>
          </div>

          <div className="flex flex-row space-x-20 pt-20">
            <p>
              {t("problems")} <a>{t("contactUs")}</a>
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
