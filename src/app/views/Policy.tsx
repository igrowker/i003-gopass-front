import React from "react"
import { useTranslation } from "react-i18next"

interface PolicyProps {
  onClose: () => void
}

export const Policy: React.FC<PolicyProps> = ({ onClose }) => {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white w-[90%] shadow-md rounded-lg p-6 mb-10 relative z-10 max-w-3xl mx-auto max-h-full overflow-y-auto">
        <button className="absolute top-4 right-4 text-gray-600 text-3xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("PolicyTitle")}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">{t("PolicyText2")}</p>
        <p className="text-lg text-gray-600 leading-relaxed mb-5">{t("PolicyText3")}</p>
      </div>
    </div>
  )
}
