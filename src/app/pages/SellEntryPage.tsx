import { useState } from "react"
import { Navbar } from "../components/UI/Navbar"
import InputField from "../components/core/InputField"
import Button from "../components/core/Button"
import TextArea from "../components/core/TextArea"

export default function SellEntryPage() {
  const [isVerified, setIsVerified] = useState(false)

  const handleVerified = () => {
    setIsVerified(!isVerified)
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative mt-20 flex w-full flex-row justify-center text-2xl">
          <h2 className="-z-20 m-5 text-center text-xl font-semibold">Revender</h2>
        </div>

        <form className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]">
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Nombre del evento"
            id="fullName"
            label="Nombre del evento"
          />

          <InputField
            type="date"
            className="rounded-md border-2 border-solid p-2"
            placeholder=""
            id="birthdate"
            label="Fecha"
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Nombre del lugar del evento"
            id="fullName"
            label="Nombre del lugar del evento"
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Dirección del evento"
            id="address"
            label="Dirección del evento"
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Detalles de la entrada"
            id="city"
            label="Detalles de la entrada"
          />

          <TextArea
            placeholder="Dejanos tu consulta o describe tu incidencia"
            label="Explica por qué revendes esta entrada"
            id="message"
          ></TextArea>

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Verificar autenticidad de la entrada"
            id="country"
            label="Verificar autenticidad de la entrada"
          />

          <div
            onClick={handleVerified}
            className={`rounded-xl p-2 text-customWhite ${isVerified ? "bg-customGreen" : "bg-customLigthRed"}`}
          >
            <p>AUTENCIDAD {isVerified ? "VERIFICADA" : "NO VERIFICADA"}</p>
          </div>

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Precio de reventa"
            id="country"
            label="Precio de reventa"
          />

          <div className="mt-4 flex w-auto items-start px-4">
            <input type="checkbox" className="mt-1 h-6 w-6" />
            <p className="ml-2 w-full">
              Declaro que soy consciente de que estoy realizando una reventa de entradas y que toda la información
              proporcionada en este formulario es verídica. Entiendo que la venta de entradas falsificadas, duplicadas o
              inválidas puede acarrear sanciones legales y comprometer mi responsabilidad ante las autoridades y los
              organizadores del evento.
            </p>
          </div>

          <Button className="-z-10 mb-6 mt-4 bg-customGreen font-semibold text-white" type="submit">
            Revender
          </Button>
        </form>
      </div>
    </>
  )
}
