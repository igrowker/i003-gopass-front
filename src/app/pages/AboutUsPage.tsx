import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { MdOutlineLogin } from "react-icons/md"

export const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div
      className="mx-auto max-w-7xl p-5 font-sans"
      style={{
        backgroundImage: "url('/soccer-ball-on.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <Link to="/">
        <MdOutlineLogin className="absolute right-0 m-2 cursor-pointer text-5xl font-extrabold text-customBlack" />
      </Link>

      <h2 className="mb-10 text-center text-2xl font-bold text-gray-800">{t("aboutUsTitle")}</h2>
      <p className="mb-10 text-center text-lg leading-relaxed text-gray-600">{t("welcomeText")}</p>

      <div className="rounded-lg bg-white bg-opacity-80 p-6 shadow-md">
        <h3 className="mb-4 text-2xl font-semibold text-gray-800">{t("ourMissionTitle")}</h3>
        <p className="mb-5 text-lg leading-relaxed text-gray-600">{t("ourMissionText")}</p>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">{t("ourHistoryTitle")}</h3>
        <p className="mb-5 text-lg leading-relaxed text-gray-600">{t("ourHistoryText")}</p>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">{t("ourTeamTitle")}</h3>
        <p className="mb-5 text-lg leading-relaxed text-gray-600">{t("ourTeamText")}</p>

        <h3 className="mb-4 text-2xl font-semibold text-gray-800">{t("contactUsTitle")}</h3>
        <p className="mb-5 text-lg leading-relaxed text-gray-600">{t("contactUsText")}</p>
      </div>
    </div>
  )
}
