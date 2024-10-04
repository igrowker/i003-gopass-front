import { useSelector } from "react-redux"
import { RootState } from "../../store"

import { Navbar } from "../components/UI/Navbar"
import InputField from "../components/core/InputField"
import Button from "../components/core/Button"
import TextArea from "../components/core/TextArea"

import { userVerifyTicket } from "../../hooks/useVerifyTicket"
import { useSellTicket } from "../../hooks/useSellTicket"

interface ValidateFormElements extends HTMLFormControlsCollection {
  eventName: any
  eventDate: any
  placeName: any
  address: any
  details: any
  message: any
  price: any
  codigoQR: HTMLInputElement
}

interface ValidateFormElement extends HTMLFormElement {
  elements: ValidateFormElements
}

export default function SellEntryPage() {
  const { verifiedTicket } = userVerifyTicket()
  const { sellTicketPost } = useSellTicket()
  const codigoQR = useSelector((state: RootState) => state.entry.tickets[0]?.codigoQR)
  const entry = useSelector((state: RootState) => state.entry.tickets[0])

  const handleVerifySubmitTicket = async (event: React.FormEvent<ValidateFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const target = form.elements

    const codigoQR: string = target.codigoQR.value

    await verifiedTicket(codigoQR)
  }

  const handleSubmitTicket = async (event: React.FormEvent<ValidateFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const target = form.elements

    const eventName = target.eventName.value
    const eventDate = target.eventDate.value
    const address = target.address.value
    const details = target.details.value
    const message = target.message.value
    const price = target.price.value

    await sellTicketPost(codigoQR, eventName, eventDate, address, details, message, price)
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative mt-20 flex w-full flex-row justify-center text-2xl">
          <h2 className="-z-20 m-5 text-center text-xl font-semibold">Revender</h2>
        </div>

        <form
          className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
          onSubmit={handleVerifySubmitTicket}
        >
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Verificar autenticidad de la entrada"
            id="codigoQR"
            label="Verificar Ticket"
          />
          <Button className="mb-6 mt-12 bg-customGreen font-semibold text-white" type="submit">
            Verificar Ticket
          </Button>
        </form>

        <form
          onSubmit={handleSubmitTicket}
          className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
        >
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Nombre del evento"
            id="eventName"
            label="Nombre del evento"
            value={entry?.gameName || ""}
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder=""
            id="eventDate"
            label="Fecha"
            value={entry?.eventDate}
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Nombre del lugar del evento"
            id="address"
            label="Dirección del evento"
            value={entry?.address}
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Detalles de la entrada"
            id="details"
            label="Detalles de la entrada"
            value={entry?.description}
          />

          <TextArea
            placeholder="Dejanos tu consulta o describe tu incidencia"
            label="Explica por qué revendes esta entrada"
            id="message"
          ></TextArea>

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Precio de reventa"
            id="price"
            label="Precio de reventa"
          />

          <div className="mt-4 flex w-auto items-start px-4">
            <input type="checkbox" required className="mt-1 h-6 w-6" />
            <p className="ml-2 w-full">
              Declaro que soy consciente de que estoy realizando una reventa de entradas y que toda la información
              proporcionada en este formulario es verídica. Entiendo que la venta de entradas falsificadas, duplicadas o
              inválidas puede acarrear sanciones legales y comprometer mi responsabilidad ante las autoridades y los
              organizadores del evento.
            </p>
          </div>

          <Button className="mb-6 mt-4 font-semibold text-white" type="submit">
            Revender
          </Button>
        </form>
      </div>
    </>
  )
}
