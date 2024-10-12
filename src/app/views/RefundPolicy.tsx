import { useState } from "react"
import { useTranslation } from "react-i18next"

import { Policy } from "../views/Policy"

export const RefundPolicy = () => {
  const { t } = useTranslation()
  const [showPolicy, setShowPolicy] = useState(false)

  const handleShowPolicy = () => {
    setShowPolicy(true)
  }

  const handleClosePolicy = () => {
    setShowPolicy(false)
  }

  return (
    <div className="refund-section">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("refundPolicyTitle")}</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-5">
        {t("refundPolicyText1")}{" "}
        <span className="text-blue-500 underline cursor-pointer" onClick={handleShowPolicy}>
          {t("refundPolicyLink")}
        </span>
        {t("refundPolicyText2")}
      </p>
      {showPolicy && <Policy onClose={handleClosePolicy} />}
    </div>
  )
}
