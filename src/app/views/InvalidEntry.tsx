import { useTranslation } from "react-i18next"

import Button from "../components/core/Button"

function InvalidEntry({ onVerifyAnother }: { onVerifyAnother: () => void }) {
  const { t } = useTranslation()
  const handleVerifyAnother = () => {
    // Implementa la navegación a la página de verificación de entradas
    onVerifyAnother()
  }

  return (
    <>
      <section className="flex flex-col items-center p-4">
        <div className="items-star m-4 flex flex-col">
          <div className="mb-10 text-xl font-semibold">
            <h1>{t("checkAnEntry")}</h1>
          </div>
          <div className="rounded-xl bg-customLigthRed p-2 text-center text-customWhite">
            <p>{t("unverifiedAuthenticity")}</p>
          </div>
          <div className="pt-7 text-xl font-semibold">{t("codeIsNotInDatabase")}</div>
        </div>
      </section>
      <section className="mt-8 flex flex-col items-center text-center">
        <Button onClick={handleVerifyAnother} className="mb-6 bg-customGreen font-semibold text-white">
          {t("verifyAnother")}
        </Button>
      </section>
    </>
  )
}

export default InvalidEntry
