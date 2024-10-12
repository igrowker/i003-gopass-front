import { useTranslation } from "react-i18next"

export const Faq = () => {
  const { t } = useTranslation()

  return (
    <div className="faq-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("faq")}</h2>

      <div className="faq mb-6">
        <h3 className="text-xl font-medium text-gray-700 mb-2">{t("howDoesTicket...")}</h3>
        <p className="text-gray-600">{t("weUseAdvancedTechnology...")}</p>
      </div>

      <div className="faq mb-6">
        <h3 className="text-xl font-medium text-gray-700 mb-2">{t("whatkindOf...")}</h3>
        <p className="text-gray-600">{t("currentlyYouCanVerify...")}</p>
      </div>

      <div className="faq mb-6">
        <h3 className="text-xl font-medium text-gray-700 mb-2">{t("howDoIKnowIf...")}</h3>
        <p className="text-gray-600">{t("youWillReceiveConfirmation...")}</p>
      </div>
    </div>
  )
}
