import { useTranslation } from "react-i18next"
import { IoIosMail } from "react-icons/io"

import { useResetPassword } from "../../hooks/useResetPassword.ts"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField.tsx"
import InputFieldPassword from "../components/core/InputFieldPassword"

interface ResetFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
  passwordRepeat: HTMLInputElement
}

interface ResetFormElement extends HTMLFormElement {
  elements: ResetFormElements
}

export default function ResetPassword() {
  const { reset } = useResetPassword()
  const { t } = useTranslation()

  const handleLoginSubmit = async (event: React.FormEvent<ResetFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const email = target.email.value
    const password = target.password.value
    const passwordRepeat: string = target.passwordRepeat.value

    await reset(email, password, passwordRepeat)
  }

  return (
    <>
      <img className="absolute -z-50 h-screen w-full" src="/public/camp.webp" />

      <div className="bg-oldCampNou fixed flex h-screen w-full justify-center bg-cover bg-center">
        <div className="mb-36 mt-28 flex w-full max-w-md flex-col items-center justify-center gap-4 p-2 sm:p-4 md:p-6">
          <form
            onSubmit={handleLoginSubmit}
            className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-3 px-6"
          >
            <h1 className="-mb-5 pt-4 text-left text-2xl font-black">{t("Reset password")}</h1>
            <InputField
              className="ml-4"
              type="email"
              placeholder={t("emailPlaceholder")}
              id="email"
              icon={<IoIosMail />}
            />
            <InputFieldPassword placeholder={t("passwordPlaceholder")} id="password" />
            <InputFieldPassword placeholder={t("confirmPasswordPlaceholder")} id="passwordRepeat" />
            <Button type="submit" className="bg-black text-xl text-white hover:bg-customRed hover:text-black">
              {t("Cambiar contraseña")}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
