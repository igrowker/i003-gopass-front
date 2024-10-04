import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useGetProfile } from "../../hooks/useGetProfile"
import { Navbar } from "../components/UI/Navbar"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"
import { useUpdateProfile } from "../../hooks/useUpdateProfile"

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
  const user = useSelector((state: RootState) => state.user)
  const [userData, setUserData] = useState({
    nombre: user.nombre || "",
    dni: user.dni || "",
    numeroTelefono: user.numeroTelefono || "",
    image: user.image || "",
    city: user.city || "",
    country: user.country || "",
    email: user.email || ""
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
      email: user.email || ""
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
          <Avatar img={userData.image}></Avatar>
        </div>

        <form
          className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
          onSubmit={handleUpdateProfile}
        >
          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={userData.nombre}
            placeholder="Nombre completo"
            id="nombre"
            label={t("fullName")}
          />

          <InputField
            onChange={handleChange}
            type="email"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Email"
            id="email"
            value={userData.email}
            label={t("email")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Teléfono"
            id="numeroTelefono"
            value={userData.numeroTelefono}
            label={t("phone")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Ciudad"
            id="city"
            value={userData.city}
            label={t("city")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="País"
            id="country"
            value={userData.country}
            label={t("country")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="DNI"
            id="dni"
            value={userData.dni}
            label={t("dni")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Imagen"
            id="image"
            value={userData.image}
            label={t("image")}
          />

          <Button className="mb-6 mt-4 font-semibold text-white" type="submit">
            Guardar
          </Button>
        </form>
      </div>
    </>
  )
}
