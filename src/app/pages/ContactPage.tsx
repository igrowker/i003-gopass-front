import { Link } from "react-router-dom"
import { Navbar } from "../components/UI/Navbar"
import { useTranslation } from "react-i18next"
import InputField from "../../app/components/core/InputField"

import Button from "../../app/components/core/Button"
import TextArea from "../../app/components/core/TextArea"

import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"

export default function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative flex w-full flex-row justify-center text-2xl">
          <h2 className="-z-20 m-5 text-center text-xl font-semibold">{t("contact")}</h2>
        </div>

        <form className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]">
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Tu nombre"
            id="fullName"
            label={t("name*")}
          />

          <InputField
            type="email"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Tu email"
            id="email"
            label={t("email*")}
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Tu teléfono con código de área"
            id="phone"
            label={t("phone")}
          />

          <TextArea placeholder={t("leaveUsYourQueryOrDescribeYourIncident")} label="Mensaje" id="message"></TextArea>

          <Button className="-z-10 mb-6 mt-4 bg-customGreen font-semibold text-white" type="submit">
            {t("contact")}
          </Button>
        </form>
      </div>

      <h2 className="m-5 text-center text-xl font-semibold">{t("followUsOnSocialMedia")}</h2>

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
