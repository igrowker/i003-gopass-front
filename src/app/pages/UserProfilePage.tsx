import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../store"
import { useGetProfile } from "../../hooks/useGetProfile"
import { Navbar } from "../components/UI/Navbar"
import { updateProfile } from "../../service/updateProfile"
import { setUser, User } from "../../store/user/userSlice"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"

// interface UserProfileFormElements extends HTMLFormControlsCollection {
//   nombre: HTMLInputElement
//   email: HTMLInputElement
//   numeroTelefono: HTMLInputElement
//   birthdate: HTMLInputElement
//   city: HTMLInputElement
//   country: HTMLInputElement
//   dni: HTMLInputElement
// }

// interface UserProfileFormElement extends HTMLFormElement {
//   elements: UserProfileFormElements
// }

export default function UserProfile() {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { getProfileData } = useGetProfile()
  const user = useSelector((state: RootState) => state.user)

  const [formData, setFormData] = useState<Partial<User>>({
    nombre: user.nombre,
    email: user.email,
    telefono: user.telefono,
    city: user.city,
    country: user.country,
    dni: user.dni,
    image: user.image,
  })

  useEffect(() => {
    getProfileData()
  }, [])

// Manejar los cambios en el formulario
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { id, value } = e.target
  setFormData({
    ...formData,
    [id]: value, // Actualiza el campo correspondiente
  })
}

// Manejar el envío del formulario
const handleUpdateProfile = async (event: React.FormEvent) => {
  event.preventDefault()

  try {
    const updatedUser = await updateProfile(formData)
    dispatch(setUser({
      ...user,
      ...updatedUser,
    })) // Actualiza el estado global después de guardar
  } catch (error) {
    console.error("Error al actualizar perfil", error)
  }
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
        <Avatar img={formData.image || user.image}></Avatar>
      </div>

      <form
        className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]"
        onSubmit={handleUpdateProfile}
      >
        <InputField
          onChange={handleChange}
          type="text"
          className="rounded-md border-2 border-solid p-2"
          value={formData.nombre}
          placeholder={t("user.nombre")}
          id="nombre"
          label={t("nombre")}
        />

        <InputField
          onChange={handleChange}
          type="email"
          className="rounded-md border-2 border-solid p-2"
          value={formData.email}
          placeholder={t("user.email")}
          id="email"
          label={t("email")}
        />

        <InputField
          onChange={handleChange}
          type="text"
          className="rounded-md border-2 border-solid p-2"
          value={formData.telefono}
          placeholder={t("user.numeroTelefono")}
          id="telefono"
          label={t("numeroTelefono")}
        />

        <InputField
          onChange={handleChange}
          type="text"
          className="rounded-md border-2 border-solid p-2"
          value={formData.city}
          placeholder={t("user.city")}
          id="city"
          label={t("city")}
        />

        <InputField
          onChange={handleChange}
          type="text"
          className="rounded-md border-2 border-solid p-2"
          value={formData.country}
          placeholder={t("user.country")}
          id="country"
          label={t("country")}
        />

        <InputField
          onChange={handleChange}
          type="text"
          className="rounded-md border-2 border-solid p-2"
          value={formData.dni}
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