import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store"
import { useGetProfile } from "../../hooks/useGetProfile"
import { Navbar } from "../components/UI/Navbar"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"
import { updateProfile } from "../../service/updateProfile"
import { updateUser } from "../../store/user/userSlice"

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
  const dispatch = useDispatch()

  const { getProfileData } = useGetProfile()
  const user = useSelector((state: RootState) => state.user)

  const [formData, setFormData] = useState({
    fullName: user.nombre,
    email: user.email,
    phone: user.numeroTelefono,
    city: user.city,
    country: user.country,
    dni: user.dni
  })

  useEffect(() => {
    getProfileData()
  }, [])

  useEffect(() => {
    setFormData({
      fullName: user.nombre,
      email: user.email,
      phone: user.numeroTelefono,
      city: user.city,
      country: user.country,
      dni: user.dni
    })
  }, [user])

  const handleUpdateProfile = async (event: React.FormEvent<UserProfileFormElement>) => {
    event.preventDefault()

    try {
      const updatedUser = await updateProfile({
        nombre: formData.fullName,
        email: formData.email,
        numeroTelefono: formData.phone,
        city: formData.city,
        country: formData.country,
        dni: formData.dni
      })

      dispatch(updateUser(updatedUser))
    } catch (error: any) {
      alert(error.message)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
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
          <Avatar img={user.image}></Avatar>
        </div>

        <form
          className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
          onSubmit={handleUpdateProfile}
        >
          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            value={formData.fullName}
            placeholder="Nombre completo"
            id="fullName"
            label={t("fullName")}
          />

          <InputField
            onChange={handleChange}
            type="email"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Email"
            id="email"
            value={formData.email}
            label={t("email")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Teléfono"
            id="phone"
            value={formData.phone}
            label={t("phone")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Ciudad"
            id="city"
            value={formData.city}
            label={t("city")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="País"
            id="country"
            value={formData.country}
            label={t("country")}
          />

          <InputField
            onChange={handleChange}
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="DNI"
            id="dni"
            value={formData.dni}
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
