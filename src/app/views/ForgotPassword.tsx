import { useTranslation } from "react-i18next"
import { Navbar } from "../components/UI/Navbar"
import InputField from "../components/core/InputField"
import { IoIosMail } from "react-icons/io"
import Button from "../components/core/Button"
import { useForgotPassword } from "../../hooks/useForgotPassword"

interface ResetFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
}

interface ResetFormElement extends HTMLFormElement {
  elements: ResetFormElements
}

export default function ForgotPassword() {
  const { t } = useTranslation()
  const { forgot } = useForgotPassword()

  const handleLoginSubmit = async (event: React.FormEvent<ResetFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const email = target.email.value

    await forgot(email)

    form.reset()
  }

  return (
    <>
      <img className="absolute -z-50 h-screen w-full" src="/public/ronaldinho.webp" />

      <div className="flex h-screen flex-col items-center justify-center">
        <p className="mb-6 text-3xl font-black text-customWhite">Restablezca su contraseña.</p>

        <form onSubmit={handleLoginSubmit} className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-4">
          <InputField
            className="ml-4"
            type="email"
            placeholder={t("emailPlaceholder")}
            id="email"
            icon={<IoIosMail />}
            label={t("enterEmail")}
          />
          <Button type="submit" className="bg-black text-xl text-white hover:bg-customRed hover:text-black">
            {t("Send")}
          </Button>
        </form>
      </div>
    </>
  )
}
