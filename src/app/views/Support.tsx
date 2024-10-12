import { useState } from "react"
import { useTranslation } from "react-i18next"

import { TroubleshootingGuide } from "../views/TroubleshootingGuide"

export const Support = () => {
  const { t } = useTranslation()
  const [showGuide, setShowGuide] = useState(false)

  const handleShowGuide = () => {
    setShowGuide(true)
  }

  const handleCloseGuide = () => {
    setShowGuide(false)
  }

  return (
    <div className="support-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soporte al Cliente</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-5">{t("supportText")}</p>

      <h3 className="text-xl font-medium text-gray-700 mb-2">{t("contactOptions")}</h3>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        {/* <li>
          <strong>{t("liveChat")}</strong> {t("clickChatButton")}
        </li> */}
        <li>
          <strong>{t("emailLabel")}</strong> {t("emailSupport")}
        </li>
        <li>
          <strong>{t("phoneLabel")}</strong> {t("phoneSupport")}
        </li>
      </ul>

      <h3 className="text-xl font-medium text-gray-700 mb-2">{t("technicalIssues")}</h3>
      <p className="text-lg text-gray-600 leading-relaxed mb-5">
        {t("technicalSupportText")}
        <span className="text-blue-500 underline cursor-pointer" onClick={handleShowGuide}>
          {t("troubleshootingGuide")}
        </span>{" "}
        {t("orContactSupport")}
      </p>

      {showGuide && <TroubleshootingGuide onClose={handleCloseGuide} />}
    </div>
  )
}
