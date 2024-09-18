import { Navbar } from "../UI/Navbar"
import Button from "../core/Button/Button"
import InputField from "../core/InputField/InputField"

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


        <picture>
          <img src="src/assets/isologo.webp" className="w-[10rem] h-[10rem] rounded-full my-6 shadow-2xl"></img>
        </picture>

        <form className="flex flex-col gap-3 w-[20rem] md:w-[30rem] sm:w-[30rem] lg:w-[40rem]">

          <InputField type="text" className="" placeholder="user.name" id="fullName" label="Nombre Completo" />

          <InputField type="email" className="" placeholder="user.email" id="email" label="Email" />

          <InputField type="password" className="" placeholder="Contraseña" id="password" label="Contraseña" />

          <InputField type="date" className="" placeholder="user.birthdate" id="birthdate" label="Birthdate" />

          <InputField type="text" className="" placeholder="user.address" id="address" label="Address" />

          <InputField type="text" className="" placeholder="user.city" id="city" label="Ciudad" />

          <InputField type="text" className="" placeholder="user.country" id="country" label="País" />

          <InputField type="text" className="" placeholder="user.dni" id="dni" label="DNI/NIE/Pasaporte" />

          <Button className="mt-4 mb-6 bg-green-700 text-white font-semibold" type="submit" >Guardar</Button>
        </form>

      </div>

    </>
  )
}