import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useGetProfile } from "../../hooks/useGetProfile"
import { Navbar } from "../components/UI/Navbar"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"

interface UserProfileFormElements extends HTMLFormControlsCollection {
  fullName: HTMLInputElement
  email: HTMLInputElement
  phone: HTMLInputElement
  birthdate: HTMLInputElement
  city: HTMLInputElement
  country: HTMLInputElement
  dni: HTMLInputElement
}

interface UserProfileFormElement extends HTMLFormElement {
  elements: UserProfileFormElements
}

export default function UserProfile() {
  const { t } = useTranslation()

  const { getProfileData } = useGetProfile()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    getProfileData()
  }, [])

  const handleUpdateProfile = (event: React.FormEvent<UserProfileFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const fullName: string = target.fullName.value
    const email: string = target.email.value
    const phone: string = target.phone.value
    const city: string = target.city.value
    const country: string = target.country.value
    const dni: string = target.dni.value
  }

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative mt-24 flex w-full flex-row justify-center text-2xl">
          <h2 className="text-center">{t("myAccount")}</h2>
        </div>

        <div className="Avatar">
          <Avatar></Avatar>
        </div>

        <form
          className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
          onSubmit={handleUpdateProfile}
        >
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={user.nombre}
            placeholder={t("user.fullName")}
            id="fullName"
            label={t("fullName")}
          />

          <InputField
            type="email"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("user.email")}
            id="email"
            label={t("email")}
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("user.phone")}
            id="phone"
            label={t("phone")}
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("user.city")}
            id="city"
            label={t("city")}
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("user.country")}
            id="country"
            label={t("country")}
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("user.dni")}
            id="dni"
            label={t("dni")}
          />

          <Button className="mb-6 mt-4 font-semibold text-white" type="submit">
            Guardar
          </Button>
        </form>
      </div>
    </>
  )
}
