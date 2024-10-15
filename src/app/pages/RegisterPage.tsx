import { useTranslation } from "react-i18next"
import { IoIosMail } from "react-icons/io"
import { Link } from "react-router-dom"

import { useRegister } from "../../hooks/useRegister"
import Button from "../components/core/Button"
import Checkbox from "../components/core/Checkbox"
import InputField from "../components/core/InputField"
import InputFieldPassword from "../components/core/InputFieldPassword"

interface RegisterFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
  passwordRepeat: HTMLInputElement
}

interface RegisterFormElement extends HTMLFormElement {
  elements: RegisterFormElements
}

export default function Register() {
  const { t } = useTranslation()
  const { register } = useRegister()

  const handleRegister = async (event: React.FormEvent<RegisterFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const email: string = target.email.value
    const password: string = target.password.value
    const passwordRepeat: string = target.passwordRepeat.value

    await register(email, password, passwordRepeat)

    form.reset()
  }

  return (
    <>
      <div className="bg-login-image fixed flex h-screen w-full justify-center">
        <div className="mb-36 mt-28 flex w-full max-w-md flex-col items-center justify-center gap-4 p-2 sm:p-4 md:p-6">
          <picture>
            <source srcSet="/img/isologo.webp" type="image/webp" />
            <source srcSet="img/isologo.svg" type="image/svg+xml" />
            <img src="/img/isologo.png" alt="Logo" className="w-[15rem]" />
          </picture>

          <form onSubmit={handleRegister} className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-3 px-6">
            <h1 className="-mb-5 pt-4 text-left text-2xl font-black">{t("registerTitle")}</h1>
            <InputField
              className="ml-4"
              type="email"
              placeholder={t("emailPlaceholder")}
              id="email"
              icon={<IoIosMail />}
            />
            <InputFieldPassword placeholder={t("passwordPlaceholder")} id="password" />
            <InputFieldPassword placeholder={t("confirmPasswordPlaceholder")} id="passwordRepeat" />
            <Checkbox />
            <Button type="submit" className="bg-black text-xl text-white hover:bg-customRed hover:text-black">
              {t("createAccountButton")}
            </Button>
            <p className="text-center">
              {t("alreadyHaveAccount")}
              <Link to="/login" className="ml-2 font-bold underline">
                {t("login")}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
