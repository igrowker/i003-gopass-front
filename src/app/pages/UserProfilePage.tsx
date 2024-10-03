import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useGetProfile } from "../../hooks/useGetProfile"
import { Navbar } from "../components/UI/Navbar"
import { updateProfile } from "../../service/updateProfile"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"

interface UserProfileFormElements extends HTMLFormControlsCollection {
  nombre: HTMLInputElement
  email: HTMLInputElement
  numeroTelefono: HTMLInputElement
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

  const handleUpdateProfile = async (event: React.FormEvent<UserProfileFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const nombre: string = target.nombre.value
    const email: string = target.email.value
    const numeroTelefono: string = target.numeroTelefono.value
    const city: string = target.city.value
    const country: string = target.country.value
    const dni: string = target.dni.value

    const image: string = user.image

    await updateProfile(nombre, dni, numeroTelefono, image, city, country)
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
          <Avatar img={user.image}></Avatar>
        </div>

        <form
          className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
          onSubmit={handleUpdateProfile}
        >
          <InputField
            onChange={handleUpdateProfile}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={user.nombre}
            placeholder={t("user.nombre")}
            id="nombre"
            label={t("nombre")}
          />

          <InputField
            onChange={handleUpdateProfile}
            type="email"
            className="rounded-md border-2 border-solid p-2"
            value={user.email}
            placeholder={t("user.email")}
            id="email"
            label={t("email")}
          />

          <InputField
            onChange={handleUpdateProfile}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={user.telefono}
            placeholder={t("user.numeroTelefono")}
            id="numeroTelefono"
            label={t("numeroTelefono")}
          />

          <InputField
            onChange={handleUpdateProfile}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={user.city}
            placeholder={t("user.city")}
            id="city"
            label={t("city")}
          />

          <InputField
            onChange={handleUpdateProfile}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={user.country}
            placeholder={t("user.country")}
            id="country"
            label={t("country")}
          />

          <InputField
            onChange={handleUpdateProfile}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={user.dni}
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
