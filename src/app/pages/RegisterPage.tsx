import { Link, useNavigate } from "react-router-dom"

import Button from "../components/core/Button/Button"
import InputField from "../components/core/InputField/InputField"
import InputFieldPassword from "../components/core/InputFieldPassword/InputFieldPassword"
import Checkbox from "../components/core/Checkbox/Checkbox"
import { IoIosMail } from "react-icons/io"

import logic from "../../logic"

interface RegisterFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
  passwordRepeat: HTMLInputElement
}

interface RegisterFormElement extends HTMLFormElement {
  elements: RegisterFormElements
}

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = async (event: React.FormEvent<RegisterFormElement>) => {
    event.preventDefault()

    const target = event.currentTarget.elements

    const email: string = target.email.value
    const password: string = target.password.value
    const passwordRepeat: string = target.password.value

    try {
      await logic.registrarUsuario(email, password, passwordRepeat)
      navigate("/login")
    } catch (error: unknown) {
      if (error instanceof Error) alert(error.message)
    }
  }

  return (
    <>
      <div className="bg-login-image fixed flex h-screen w-full justify-center">
        <div className="mb-36 mt-28 flex w-full max-w-md flex-col items-center justify-center gap-4 p-2 sm:p-4 md:p-6">
          <picture>
            <source srcSet="/src/assets/isologo.webp" type="image/webp" />
            <source srcSet="/src/assets/isologo.svg" type="image/svg+xml" />
            <img src="/src/assets/isologo.png" alt="Logo" className="w-[15rem]" />
          </picture>

          <form onSubmit={handleRegister} className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-3">
            <h1 className="-mb-5 pt-4 text-left text-2xl font-black">Registro</h1>
            <InputField className="ml-4" type="email" placeholder="Email" id="email" icon={<IoIosMail />} />
            <InputFieldPassword placeholder="Contraseña" id="password" />
            <InputFieldPassword placeholder="Confirmar Contraseña" id="passwordRepeat" />
            <Checkbox />
            <Button type="submit" className="bg-black text-xl text-white hover:bg-customRed hover:text-black">
              Crear Cuenta
            </Button>
            <p className="text-center">
              Ya tienes una cuenta?
              <Link to="/login" className="ml-2 font-bold underline">
                Inicia Sesion
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
