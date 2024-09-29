import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"

import { Navbar } from "../components/UI/Navbar"
import VerifiedSeller from "../views/VerifiedSeller"

export default function PayEntryPage() {
  return (
    <>
      <Navbar />
      <div className="mt-3 flex w-full flex-col items-center">
        <div className="flex w-full justify-start md:w-[20rem] md:justify-center">
          <h1 className="ml-4 text-xl font-semibold md:ml-0">Checkout</h1>
        </div>

        <div className="my-1 flex w-full justify-center p-3">
          <picture className="flex w-[11rem] justify-center">
            <img
              className="h-[15rem] w-full max-w-xs rounded-lg object-cover shadow-custom-avatar"
              src="https://i.pinimg.com/564x/53/f5/dd/53f5ddf910d3fe21698b238aefaf2cf9.jpg"
              alt="Entrada de reventa"
            />
          </picture>
          <div className="flex w-auto flex-col gap-1 p-2">
            <h2 className="rounded-lg bg-customGreen p-1 text-center text-[0.7rem] text-customWhite">
              AUTENTICIDAD VERIFICADA
            </h2>
            <h2 className="font-semibold">Real Madrid vs Barcelona</h2>
            <sup className="text-left text-sm">Entrada de reventa</sup>
            <span className="flex gap-3">
              <FaRegCalendarAlt className="text-xl text-customLigthRed" />
              <p> 28/10/2024</p>
            </span>
            <span className="flex">
              <GiPositionMarker className="text-xl text-customLigthRed" />
              <p>Camp Nou</p>
            </span>
            <div className="flex w-auto justify-start gap-3 text-[0.8rem]">
              <h3 className="rounded-md border-4 border-customRed p-1 px-2 font-semibold text-customLigthRed">
                Barcelona
              </h3>
              <h3 className="rounded-md border-4 border-customRed bg-customRed p-1 px-2 font-semibold text-customWhite">
                Real Madrid
              </h3>
            </div>
            <span>
              <h3 className="p-1 text-3xl font-semibold">$100</h3>
            </span>
          </div>
        </div>
        <hr className="my-5 w-[90%] border-t-4" />
        <div className="flex w-[20rem] flex-col gap-1 text-[1rem] font-semibold">
          <span className="flex justify-between">
            <p>Comisión GOPASS (8%): </p>
            <p>$8</p>
          </span>
          <span className="flex justify-between">
            <p>Total: </p>
            <p>$108</p>
          </span>
        </div>
        <hr className="my-5 w-[90%] border-t-4" />
        <VerifiedSeller textButton="Pagar" />
      </div>
    </>
  )
}
