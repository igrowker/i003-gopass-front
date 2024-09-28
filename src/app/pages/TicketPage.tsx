import { useState } from "react"
import { Navbar } from "../components/UI/Navbar"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"
import { HiDownload } from "react-icons/hi"


export default function Ticket() {
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
        <div className="text-center m-5 font-semibold text-xl">
          <h1>Tu entrada</h1>
        </div>

        <section className="flex flex-col text-center items-center">
          <div>
            <img className="w-80 h-80" src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"></img>
          </div>
          <div>
            <p><span className="font-semibold">Ref:</span> 78735287573928</p>
          </div>
          <div onClick={handleVerified} className={`p-2 rounded-xl text-customWhite ${isVerified ? 'bg-customGreen' : 'bg-customLigthRed'
            }`}>
            <p>AUTENCIDAD {isVerified ? 'VERIFICADA' : 'NO VERIFICADA'}</p>
          </div>

          <div className="font-semibold text-xl pt-7">Real Madrid - Barcelona</div>

          <div className="pt-3 font-semibold p-1">
            <p>Sector: B - Entrada: 12 - Fila: 9 - Asiento: 48</p>
          </div>


          <div className="pt-6 flex flex-col gap-3 text-xl text">
            <div className="flex flex-row">
              <FaRegCalendarAlt className="text-customLigthRed text-2xl" /><p>28 de octubre 2024</p>
            </div>
            <div className="flex flex-row">
              <GiPositionMarker className="text-customLigthRed text-2xl" /> <p>Camp Nou</p>
            </div>
          </div>

          <div className="flex flex-row space-x-20 pt-20">
          <p>¿Problemas? <a>Contáctanos</a></p>
          
          <button className="text-customLigthRed text-4xl"><HiDownload /></button>
          </div>
          
        </section>
      </div>

    </>
  )
}