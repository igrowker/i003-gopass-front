import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useGetProfile } from "../../hooks/useGetProfile"
import { Navbar } from "../components/UI/Navbar"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"

export default function UserProfile() {
  const { t } = useTranslation()

  const { getProfileData } = useGetProfile()
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    getProfileData()
  }, [])

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

        <form className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]" onSubmit="">
          <InputField
            onChange=""
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={user.nombre}
            placeholder="Nombre completo"
            id="fullName"
            label={t("fullName")}
          />

          <InputField
            onChange=""
            type="email"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Email"
            id="email"
            value={user.email}
            label={t("email")}
          />

          <InputField
            onChange=""
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Teléfono"
            id="phone"
            value={user.numeroTelefono}
            label={t("phone")}
          />

          <InputField
            onChange=""
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Ciudad"
            id="city"
            value={user.city}
            label={t("city")}
          />

          <InputField
            onChange=""
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="País"
            id="country"
            value={user.country}
            label={t("country")}
          />

          <InputField
            onChange=""
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="DNI"
            id="dni"
            value={user.dni}
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
