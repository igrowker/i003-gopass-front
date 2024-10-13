import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { useGetProfile } from "../../hooks/useGetProfile"
import { useUpdateProfile } from "../../hooks/useUpdateProfile"
import { useVerifyPhone } from "../../hooks/useVerifyPhone"
import { RootState } from "../../store"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"
import { Navbar } from "../components/UI/Navbar"

interface UpdateFormElements extends HTMLFormControlsCollection {
  nombre: HTMLInputElement
  dni: HTMLInputElement
  numeroTelefono: HTMLInputElement
  city: HTMLInputElement
  country: HTMLInputElement
  email: HTMLInputElement
  image: HTMLInputElement
}

interface UpdateFormElement extends HTMLFormElement {
  elements: UpdateFormElements
}

export default function UserProfile() {
  const { t } = useTranslation()

  const { updatedProfile } = useUpdateProfile()
  const { getProfileData } = useGetProfile()
  const { verifiedPhone } = useVerifyPhone()

  const user = useSelector((state: RootState) => state.user.userProfile)
  const [userData, setUserData] = useState({
    nombre: user.nombre || "",
    dni: user.dni || "",
    numeroTelefono: user.numeroTelefono || "",
    image: user.image || "",
    city: user.city || "",
    country: user.country || "",
    email: user.email || "",
    verificadoSms: user.verificadoSms || false
  })

  useEffect(() => {
    getProfileData()
  }, [])

  useEffect(() => {
    setUserData({
      nombre: user.nombre || "",
      dni: user.dni || "",
      numeroTelefono: user.numeroTelefono || "",
      image: user.image || "",
      city: user.city || "",
      country: user.country || "",
      email: user.email || "",
      verificadoSms: user.verificadoSms || false
    })
  }, [user])

  const handleUpdateProfile = async (event: React.FormEvent<UpdateFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const nombre = target.nombre.value
    const dni = target.dni.value
    const numeroTelefono = target.numeroTelefono.value
    const image = target.image.value
    const city = target.city.value
    const country = target.country.value

    await updatedProfile(nombre, dni, numeroTelefono, image, city, country)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setUserData((prevUser) => ({
      ...prevUser,
      [id]: value
    }))
  }

  const handleValidatePhoneNumber = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const numeroTelefono = userData.numeroTelefono

    await verifiedPhone(numeroTelefono)
  }
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative mb-2 mt-32 flex w-full flex-row justify-center text-2xl">
          <h2 className="text-center">{t("myAccount")}</h2>
        </div>

        <div className="Avatar">
          <Avatar img={userData.image}></Avatar>
        </div>

        <form
          className="mt-2 flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
          onSubmit={handleUpdateProfile}
        >
          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={userData.nombre}
            placeholder={t("fullName")}
            id="nombre"
            label={t("fullName")}
          />

          <InputField
            onChange={handleChange}
            type="email"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("email")}
            id="email"
            value={userData.email}
            label={t("email")}
          />
          <div className="relative">
            <InputField
              onChange={handleChange}
              type="text"
              className="w-full rounded-md border-2 border-solid p-2"
              placeholder={t("phone")}
              id="numeroTelefono"
              value={userData.numeroTelefono}
              label={t("phone")}
            />
            <div className="absolute right-0 top-3 flex h-full items-center">
              {user.numeroTelefono &&
                (userData.verificadoSms ? (
                  <span className="ml-2 p-2 text-green-500">{t("verifiedPhone")}</span>
                ) : (
                  <button
                    onClick={handleValidatePhoneNumber}
                    className="relative right-1 h-[2.4rem] w-[8.1rem] rounded-md bg-customGreen p-2 text-white"
                  >
                    {t("validatePhone")}
                  </button>
                ))}
            </div>
          </div>

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("city")}
            id="city"
            value={userData.city}
            label={t("city")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("country")}
            id="country"
            value={userData.country}
            label={t("country")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("dni")}
            id="dni"
            value={userData.dni}
            label={t("dni")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder={t("image")}
            id="image"
            value={userData.image}
            label={t("image")}
          />

          <Button className="mb-6 mt-6 bg-customGreen text-2xl font-semibold text-white" type="submit">
            {t("save")}
          </Button>
        </form>
      </div>
    </>
  )
}
