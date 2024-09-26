import { Link } from "react-router-dom"
import { Navbar } from "../components/UI/Navbar"
import InputField from "../../app/components/core/InputField/InputField"

import Button from "../../app/components/core/Button/Button"
import TextArea from "../../app/components/core/TextArea/TextArea"

import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative flex w-full flex-row justify-center text-2xl">
          <h2 className="-z-20 m-5 text-center text-xl font-semibold">Contacto</h2>
        </div>

        <form className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]">
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Tu nombre"
            id="fullName"
            label="Nombre*"
          />

          <InputField
            type="email"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Tu email"
            id="email"
            label="Email*"
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Tu teléfono con código de área"
            id="phone"
            label="Teléfono"
          />

          <TextArea placeholder="Dejanos tu consulta o describe tu incidencia" label="Mensaje" id="message"></TextArea>

          <Button className="-z-10 mb-6 mt-4 bg-customGreen font-semibold text-white" type="submit">
            Contactar
          </Button>
        </form>
      </div>

      <h2 className="m-5 text-center text-xl font-semibold">Siguenos en las redes</h2>

      <section className="flex flex-row justify-center space-x-6 text-6xl text-customRed">
        <Link to="">
          <FaInstagramSquare />
        </Link>
        <Link to="">
          <FaSquareXTwitter />
        </Link>
        <Link to="">
          <FaFacebookSquare />
        </Link>
      </section>
    </>
  )
}
