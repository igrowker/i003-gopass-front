import { useState } from "react"
import { Navbar } from "../UI/Navbar";
import InputField from "../core/InputField/InputField";
import Button from "../core/Button/Button";
import TextArea from "../core/TextArea/TextArea";

export default function VenderEntrada() {
  const [isVerified, setIsVerified] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handleVerified = () => {
    setIsVerified(!isVerified)
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked); 
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center overflow-visible justify-center">

        <div className="flex flex-row text-2xl w-full justify-center relative">

          <h2 className="text-center m-5 font-semibold text-xl -z-20">Revender</h2>

        </div>

        <form className="flex flex-col gap-3 w-[20rem] md:w-[30rem] sm:w-[30rem] lg:w-[40rem]">

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="Nombre del evento" id="fullName" label="Nombre del evento" />

          <InputField type="date" className="border-solid border-2 rounded-md p-2" placeholder="" id="birthdate" label="Fecha" />

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="Nombre del lugar del evento" id="fullName" label="Nombre del lugar del evento" />

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="Dirección del evento" id="address" label="Dirección del evento" />

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="Detalles de la entrada" id="city" label="Detalles de la entrada" />

          <TextArea placeholder="Dejanos tu consulta o describe tu incidencia" label="Explica por qué revendes esta entrada" id="message"></TextArea>

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="Verificar autenticidad de la entrada" id="country" label="Verificar autenticidad de la entrada" />

          <div onClick={handleVerified} className={`p-2 rounded-xl text-customWhite ${isVerified ? 'bg-customGreen' : 'bg-customLigthRed'
            }`}>
            <p>AUTENCIDAD {isVerified ? 'VERIFICADA' : 'NO VERIFICADA'}</p>
          </div>

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="Precio de reventa" id="country" label="Precio de reventa" />

          <div className="mt-4 flex w-auto items-start px-4">
          <input type="checkbox" className="mt-1 h-6 w-6" />
          <p className="ml-2 w-full">
          Declaro que soy consciente de que estoy realizando una reventa de entradas y que toda la información proporcionada en este formulario es verídica. Entiendo que la venta de entradas falsificadas, duplicadas o inválidas puede acarrear sanciones legales y comprometer mi responsabilidad ante las autoridades y los organizadores del evento.
          </p>
        </div>

          <Button className="mt-4 mb-6 bg-customGreen text-white font-semibold -z-10" type="submit" >Contactar</Button>
        </form>

      </div>
    </>
  )
}