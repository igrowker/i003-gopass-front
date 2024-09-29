import { Navbar } from "../components/UI/Navbar"
import { useTranslation } from "react-i18next"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"

export default function UserProfile() {
  const { t } = useTranslation()
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

        <form className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]">
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
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
            type="password"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("user.password")}
            id="password"
            label={t("password")}
          />

          <InputField
            type="date"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("user.birthdate")}
            id="birthdate"
            label={t("birthdate")}
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

          <Button className="-z-10 mb-6 mt-4 bg-customGreen font-semibold text-white" type="submit">
            Guardar
          </Button>
        </form>
      </div>
    </>
  )
}
