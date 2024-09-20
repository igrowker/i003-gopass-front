import { Link } from "react-router-dom";
import { Navbar } from "../UI/Navbar";
import InputField from "../core/InputField/InputField";

import Button from "../core/Button/Button";
import TextArea from "../core/TextArea/TextArea";

import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center overflow-visible justify-center">

        <div className="flex flex-row text-2xl w-full justify-center relative">

          <h2 className="text-center m-5 font-semibold text-xl">Contacto</h2>

        </div>



        <form className="flex flex-col gap-3 w-[20rem] md:w-[30rem] sm:w-[30rem] lg:w-[40rem]">

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="Tu nombre" id="fullName" label="Nombre*" />

          <InputField type="email" className="border-solid border-2 rounded-md p-2" placeholder="Tu email" id="email" label="Email*" />

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="Tu teléfono con código de área" id="phone" label="Teléfono" />

          <TextArea placeholder="Dejanos tu consulta o describe tu incidencia" label="Mensaje" id="message"></TextArea>

          <Button className="mt-4 mb-6 bg-customGreen text-white font-semibold" type="submit" >Contactar</Button>
        </form>

      </div>


      <h2 className="text-center m-5 font-semibold text-xl">Siguenos en las redes</h2>

      <section className="flex flex-row space-x-6 justify-center text-6xl text-customRed">
        <Link to=""><FaInstagramSquare /></Link>
        <Link to=""><FaSquareXTwitter /></Link>
        <Link to=""><FaFacebookSquare /></Link>
      </section>


    </>
  )
}