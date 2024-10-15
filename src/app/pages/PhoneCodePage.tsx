import { useTranslation } from "react-i18next"
import InputField from "../components/core/InputField"
import { MdOutlinePassword } from "react-icons/md"
import Button from "../components/core/Button"

import { usePhoneCode } from "../../hooks/usePhoneCode"

interface ResetFormElements extends HTMLFormControlsCollection {
  phoneCode: HTMLInputElement
}

interface ResetFormElement extends HTMLFormElement {
  elements: ResetFormElements
}

export default function ForgotPassword() {
  const { t } = useTranslation()
  const { phoneCodeCorrect } = usePhoneCode()

  const handlePhoneCode = async (event: React.FormEvent<ResetFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const phoneCode = target.phoneCode.value
    const phoneCodeNumber = Number(phoneCode)

    await phoneCodeCorrect(phoneCodeNumber)
  }

  return (
    <>
      <img className="absolute -z-50 h-screen w-full" src="/photo-1674307419403-9f4991ce4ce1.avif" />

      <div className="flex h-screen flex-col items-center justify-center">
        <p className="mb-6 text-3xl font-black text-customWhite">{t("enterCode")}.</p>

        <form onSubmit={handlePhoneCode} className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-4">
          <InputField
            className="ml-4"
            type="text"
            placeholder={t("phoneCode")}
            id="phoneCode"
            icon={<MdOutlinePassword />}
            label={t("phoneCode")}
          />
          <Button type="submit" className="bg-black text-xl text-white hover:bg-customRed hover:text-black">
            {t("send")}
          </Button>
        </form>
      </div>
    </>
  )
}
