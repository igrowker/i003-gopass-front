import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { MdOutlineLogin } from "react-icons/md"

import { Faq } from "../views/Faq"
import { Instructions } from "../views/Instructions"
import { RefundPolicy } from "../views/RefundPolicy"
import { Support } from "../views/Support"

export const HelpSupport = () => {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-7xl p-5 font-sans">
      <Link to="/">
        <MdOutlineLogin className="absolute right-0 m-2 cursor-pointer text-5xl font-extrabold text-customBlack" />
      </Link>

      <h2 className="mb-10 text-center text-2xl font-bold text-gray-800">{t("help&SupportGP")}</h2>
      <p className="mb-10 text-center text-lg leading-relaxed text-gray-600">{t("wellcomeToTheHelp...")}</p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <Faq />
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <Instructions />
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <Support />
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <RefundPolicy />
        </div>
      </div>
    </div>
  )
}
