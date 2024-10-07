import { useTranslation } from "react-i18next"

import { useBuyTicket } from "../../hooks/useBuyTicket"
import Button from "../components/core/Button"
import RatingCheck from "../components/core/RatingCheck"
import Avatar from "../components/UI/Avatar"

export default function VerifiedSeller({ textButton, ticket }: { textButton: string }) {
  const { t } = useTranslation()
  const { buyResellTicket } = useBuyTicket()

  const handleBuyTicket = async () => {
    await buyResellTicket(ticket.entrada.id)
    console.log(ticket.entrada.id)
  }

  return (
    <>
      <div className="flex flex-col p-2">
        <p className="mb-2">{t("verifiedSeller")}</p>
        <div className="flex flex-row">
          <Avatar size="5rem" img="" />
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
          <p className="ml-2 w-[20rem]">"IUnderstandThatIAm..."</p>
        </div>
        <span className="my-8 flex w-full justify-center">
          <Button onClick={handleBuyTicket} className="w-[15rem] bg-customGreen text-2xl text-customWhite">
            {textButton}
          </Button>
        </span>
      </div>
    </>
  )
}
