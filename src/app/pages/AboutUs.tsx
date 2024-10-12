import { useTranslation } from "react-i18next"

export const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div
      className="max-w-7xl mx-auto p-5 font-sans"
      style={{
        backgroundImage: "url('/soccer-ball-on.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">{t("aboutUsTitle")}</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-10 text-center">{t("welcomeText")}</p>

      <div className="bg-white bg-opacity-80 shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("ourMissionTitle")}</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">{t("ourMissionText")}</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("ourHistoryTitle")}</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">{t("ourHistoryText")}</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("ourTeamTitle")}</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">{t("ourTeamText")}</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t("contactUsTitle")}</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">{t("contactUsText")}</p>
      </div>
    </div>
  )
}
