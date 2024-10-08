import { useTranslation } from "react-i18next"
import { Navbar } from "../components/UI/Navbar"
import InputField from "../components/core/InputField"
import { IoIosMail } from "react-icons/io"
// import useReserPassword from "../hooks/useReserPassword"

interface ResetFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
}

interface ResetFormElement extends HTMLFormElement {
  elements: ResetFormElements
}


export default function ForgotPassword() {
  const { t } = useTranslation()
  // const { reset } = useReserPassword()

  const handleLoginSubmit = async (event: React.FormEvent<ResetFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const email = target.email.value


    // await reset(email)

    form.reset()
  }

  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col items-center justify-center">

        <form
          onSubmit={handleLoginSubmit}
          className="flex w-[90%] flex-col gap-5  rounded-2xl bg-[#e0e0e0e2] p-3 px-6"
        >
          <InputField
            className="ml-4"
            type="email"
            placeholder={t("emailPlaceholder")}
            id="email"
            icon={<IoIosMail />}
          
          />
        </form>
      </div>

    </>
  )
}


