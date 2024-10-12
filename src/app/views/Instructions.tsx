import { useTranslation } from "react-i18next"

export const Instructions = () => {
  const { t } = useTranslation()

  return (
    <div className="instructions-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("stepByStep")}</h2>

      <h3 className="text-xl font-medium text-gray-700 mb-2">{t("howToVerify...")}</h3>
      <ol className="list-decimal list-inside text-gray-600 mb-6">
        <li>{t("verifyStep1")}</li>
        <li>{t("verifyStep2")}</li>
        <li>{t("verifyStep3")}</li>
      </ol>

      <h3 className="text-xl font-medium text-gray-700 mb-2">{t("howToSell...")}</h3>
      <ol className="list-decimal list-inside text-gray-600 mb-6">
        <li>{t("sellStep1")}</li>
        <li>{t("sellStep2")}</li>
        <li>{t("sellStep3")}</li>
        <li>{t("sellStep4")}</li>
      </ol>

      <h3 className="text-xl font-medium text-gray-700 mb-2">{t("howToBuy")}</h3>
      <ol className="list-decimal list-inside text-gray-600 mb-6">
        <li>{t("buyStep1")}</li>
        <li>{t("buyStep2")}</li>
        <li>{t("buyStep3")}</li>
      </ol>
    </div>
  )
}
