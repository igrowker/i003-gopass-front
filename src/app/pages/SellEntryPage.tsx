import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { useSellTicket } from "../../hooks/useSellTicket"
import { userVerifyTicket } from "../../hooks/useVerifyTicket"
import { RootState } from "../../store"
import { clearEntry } from "../../store/entry/entrySlice"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import TextArea from "../components/core/TextArea"
import { Navbar } from "../components/UI/Navbar"

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
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { verifiedTicket } = userVerifyTicket()
  const { sellTicketPost } = useSellTicket()
  const codigoQR = useSelector((state: RootState) => state.entry.ticketToResell?.codigoQR)
  const entry = useSelector((state: RootState) => state.entry.ticketToResell)

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
    dispatch(clearEntry())
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative mt-24 flex w-full flex-row justify-center text-2xl">
          <h2 className="-z-20 m-5 text-center text-xl font-semibold">{t("resell")}</h2>
        </div>

        <form
          className="mt-6 flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
          onSubmit={handleVerifySubmitTicket}
        >
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("verifyAuthenticityEntry")}
            id="codigoQR"
            label={t("checkTicket")}
          />
          <Button className="mt-4 bg-customGreen text-2xl font-semibold text-white" type="submit">
            {t("verifyAnEntry")}
          </Button>
          <hr className="my-8 border-2" />
        </form>

        <form
          onSubmit={handleSubmitTicket}
          className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
        >
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("eventName")}
            id="eventName"
            label={t("eventName")}
            value={entry?.gameName || ""}
            readonly
          />

          <InputField
            type="text"
            className="hidden"
            placeholder="dd/mm/yyyy"
            id="eventDate"
            readonly
            value={entry?.eventDate}
          />
          <div className="-mt-[4.5rem]">
            <InputField
              type="text"
              className="rounded-md border-2 border-solid p-2"
              placeholder="dd/mm/yyyy hh:mm"
              id="eventDateFake"
              label={t("date")}
              value={
                entry?.eventDate
                  ? new Date(entry.eventDate).toLocaleString("es-AR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                      timeZone: "America/Argentina/Buenos_Aires"
                    })
                  : ""
              }
              readonly
            />
          </div>

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("eventAddress")}
            id="address"
            label={t("eventAddress")}
            value={entry?.address}
            readonly
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("entryDetails")}
            id="details"
            label={t("entryDetails")}
            value={entry?.description}
            readonly
          />

          <TextArea
            placeholder={t("explainTheReasonForSelling")}
            label={t("explainWhyYouAreSelling")}
            id="message"
          ></TextArea>

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("resalePrice")}
            id="price"
            label={t("resalePrice")}
            style={{ backgroundColor: "white" }}
          />

          <div className="mt-4 flex w-auto items-start px-4">
            <input type="checkbox" required className="mt-1 h-6 w-6" />
            <p className="ml-2 w-full">{t("declaration")}</p>
          </div>

          <Button className="mb-6 mt-4 bg-customGreen text-2xl font-semibold text-white" type="submit">
            {t("resell")}
          </Button>
        </form>
      </div>
    </>
  )
}
