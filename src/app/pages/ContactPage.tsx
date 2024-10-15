import { useTranslation } from "react-i18next"
import { FaInstagramSquare } from "react-icons/fa"
import { FaYoutubeSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

import Button from "../../app/components/core/Button"
import InputField from "../../app/components/core/InputField"
import TextArea from "../../app/components/core/TextArea"
import { Navbar } from "../components/UI/Navbar"

export default function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative flex w-full flex-row justify-center text-2xl mt-7 ">
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

      <section className="flex flex-row justify-center space-x-6 text-6xl text-customRed mb-5">
        <Link target="_blank" to="https://www.instagram.com/igrowker/">
          <FaInstagramSquare />
        </Link>
        <Link target="_blank" to="https://www.youtube.com/@Igrowker">
          <FaYoutubeSquare />
        </Link>
        <Link target="_blank" to="https://www.linkedin.com/company/igrowker/">
          <FaLinkedin />
        </Link>
      </section>
    </>
  )
}
