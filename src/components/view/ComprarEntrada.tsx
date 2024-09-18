import { Navbar } from "../UI/Navbar"

import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"

export default function ComprarEntrada() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center gap-3">
        <span className="w-[22rem]">
          <h1 className="text-xl font-semibold">Entrada de reventa</h1>
        </span>

        <picture>
          <img
            className="h-[20rem] w-[20rem] rounded-lg object-cover"
            src="https://i.pinimg.com/564x/53/f5/dd/53f5ddf910d3fe21698b238aefaf2cf9.jpg"
            alt="Entrada de reventa"
          />
        </picture>

        <div className="flex w-[22rem] justify-around gap-5">
          <span className="flex">
            <GiPositionMarker className="text-xl text-customLigthRed" />
            <p>Camp Nou</p>
          </span>
          <span className="flex gap-3">
            <FaRegCalendarAlt className="text-xl text-customLigthRed" />
            <p> 28/10/2024</p>
          </span>
        </div>
        <h2 className="rounded-lg bg-customGreen p-1 text-[0.7rem] text-customWhite">AUTENTICIDAD VERIFICADA</h2>
        <div className="w-[22rem]">
          <h2 className="text-xl font-semibold">Real Madrid vs Barcelona</h2>
          <sup className="text-left">Entrada de reventa</sup>
        </div>
        <div className="flex w-[22rem] gap-3">
          <h3 className="rounded-e-md border-4 border-customRed p-1 px-2 font-semibold text-customLigthRed">
            Barcelona
          </h3>
          <h3 className="rounded-md border-4 border-customRed bg-customRed p-1 px-2 font-semibold text-customWhite">
            Real Madrid
          </h3>
        </div>
        <hr className="my-2 w-[90%] border-t-4" />
        <p>Vendedor verificado:</p>
      </div>
    </>
  )
}
