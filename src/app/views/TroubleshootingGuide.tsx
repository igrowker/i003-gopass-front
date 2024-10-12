import { useTranslation } from "react-i18next"

export const TroubleshootingGuide = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white w-[90%] shadow-md rounded-lg p-6 mb-10 relative z-10 max-w-3xl mx-auto h-1/2 overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-600 text-3xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("troubleshootingGuideTitle")}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">{t("troubleshootingGuideIntro")}</p>

        <h3 className="text-xl font-medium text-gray-700 mb-2">{t("loginIssuesTitle")}</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>{t("loginIssue1")}</li>
          <li>{t("loginIssue2")}</li>
          <li>{t("loginIssue3")}</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-700 mb-2">{t("ticketVerificationIssuesTitle")}</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>{t("verificationIssue1")}</li>
          <li>{t("verificationIssue2")}</li>
          <li>{t("verificationIssue3")}</li>
        </ul>
      </div>
    </div>
  )
}
