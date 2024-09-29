import { Navbar } from "../components/UI/Navbar"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import Avatar from "../components/UI/Avatar"

export default function UserProfile() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center overflow-visible">
        <div className="relative mt-24 flex w-full flex-row justify-center text-2xl">
          <h2 className="text-center">Mi cuenta</h2>
        </div>

        <div className="Avatar">
          <Avatar></Avatar>
        </div>

        <form className="flex w-[20rem] flex-col gap-3 sm:w-[30rem] md:w-[30rem] lg:w-[40rem]">
          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="user.name"
            id="fullName"
            label="Nombre Completo"
          />

          <InputField
            type="email"
            className="rounded-md border-2 border-solid p-2"
            placeholder="user.email"
            id="email"
            label="Email"
          />

          <InputField
            type="password"
            className="rounded-md border-2 border-solid p-2"
            placeholder="Contraseña"
            id="password"
            label="Contraseña"
          />

          <InputField
            type="date"
            className="rounded-md border-2 border-solid p-2"
            placeholder="user.birthdate"
            id="birthdate"
            label="Birthdate"
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="user.address"
            id="address"
            label="Address"
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="user.city"
            id="city"
            label="Ciudad"
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="user.country"
            id="country"
            label="País"
          />

          <InputField
            type="text"
            className="rounded-md border-2 border-solid p-2"
            placeholder="user.dni"
            id="dni"
            label="DNI/NIE/Pasaporte"
          />

          <Button className="-z-10 mb-6 mt-4 bg-customGreen font-semibold text-white" type="submit">
            Guardar
          </Button>
        </form>
      </div>
    </>
  )
}
