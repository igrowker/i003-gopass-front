import { Navbar } from "../UI/Navbar"

import { FaRegCalendarAlt } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi"

import Avatar from "../UI/Avatar"
import RatingCheck from "../core/RatingCheck/RatingCheck"
import Button from "../core/Button/Button"

export default function ComprarEntrada() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center gap-3">
        <span className="my-3 w-[22rem]">
          <h1 className="text-xl font-semibold">Entrada de reventa</h1>
        </span>

        <picture>
          <img
            className="h-[20rem] w-[20rem] rounded-lg object-cover shadow-custom-avatar"
            src="https://i.pinimg.com/564x/53/f5/dd/53f5ddf910d3fe21698b238aefaf2cf9.jpg"
            alt="Entrada de reventa"
          />
        </picture>

        <div className="mt-3 flex w-[22rem] justify-around gap-5">
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
          <sup className="text-left text-sm">Entrada de reventa</sup>
        </div>
        <div className="flex w-[22rem] justify-between gap-3">
          <h3 className="rounded-e-md border-4 border-customRed p-1 px-2 font-semibold text-customLigthRed">
            Barcelona
          </h3>
          <h3 className="rounded-md border-4 border-customRed bg-customRed p-1 px-2 font-semibold text-customWhite">
            Real Madrid
          </h3>
          <h3 className="p-1 pl-10 text-3xl font-semibold">$100</h3>
        </div>
        <hr className="my-2 w-[90%] border-t-4" />
        <div className="flex flex-col p-2">
          <p className="mb-2">Vendedor verificado:</p>
          <div className="flex flex-row">
            <Avatar size="5rem" />
            <div>
              <span className="flex gap-3">
                <p className="mb-2">Franco Lopez Maciel</p>
                <RatingCheck />
              </span>
              <div className="flex flex-col">
                <p className="mb-1">La vende por:</p>
                <p>
                  <em>"No puedo asistir porque se superpone con mi trabajo"</em>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex w-auto items-start px-4">
            <input type="checkbox" className="mt-1 h-6 w-6" />
            <p className="ml-2 w-[20rem]">
              Entiendo que estoy adquiriendo una entrada a través de un tercero en reventa y que la plataforma garantiza
              la autenticidad de la entrada en caso de que sea validada correctamente.
            </p>
          </div>
          <span className="my-8 flex w-full justify-center">
            <Button className="w-[15rem] bg-customGreen text-customWhite">COMPRAR</Button>
          </span>
        </div>
      </div>
    </>
  )
}
