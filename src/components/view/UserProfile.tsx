import { Navbar } from "../UI/Navbar"
import Button from "../core/Button/Button"
import InputField from "../core/InputField/InputField"
import Avatar from "../UI/Avatar"

export default function UserProfile() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col items-center overflow-visible justify-center">

        <div className="flex flex-row text-2xl w-full justify-center relative">

          <h2 className="text-center">Mi cuenta</h2>

        </div>

        <div className="Avatar">
          <Avatar></Avatar>
        </div>

        <form className="flex flex-col gap-3 w-[20rem] md:w-[30rem] sm:w-[30rem] lg:w-[40rem]">

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="user.name" id="fullName" label="Nombre Completo" />

          <InputField type="email" className="border-solid border-2 rounded-md p-2" placeholder="user.email" id="email" label="Email" />

          <InputField type="password" className="border-solid border-2 rounded-md p-2" placeholder="Contraseña" id="password" label="Contraseña" />

          <InputField type="date" className="border-solid border-2 rounded-md p-2" placeholder="user.birthdate" id="birthdate" label="Birthdate" />

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="user.address" id="address" label="Address" />

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="user.city" id="city" label="Ciudad" />

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="user.country" id="country" label="País" />

          <InputField type="text" className="border-solid border-2 rounded-md p-2" placeholder="user.dni" id="dni" label="DNI/NIE/Pasaporte" />

          <Button className="mt-4 mb-6 bg-customGreen text-white font-semibold -z-10" type="submit" >Contactar</Button>
        </form>

      </div>

    </>
  )
}