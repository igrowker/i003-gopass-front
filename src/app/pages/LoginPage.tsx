import { Link } from "react-router-dom"
import { IoIosMail } from "react-icons/io"
import { useLogin } from "../../hooks/useLogin.ts"
import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import InputFieldPassword from "../components/core/InputFieldPassword"

interface LoginFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
  password: HTMLInputElement
  passwordRepeat: HTMLInputElement
}

interface LoginFormElement extends HTMLFormElement {
  elements: LoginFormElements
}

export default function LoginSession() {
  const { login } = useLogin()

  const handleLoginSubmit = async (event: React.FormEvent<LoginFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const target = form.elements

    const email = target.email.value
    const password = target.password.value

    await login(email, password)

    form.reset()
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

          <form onSubmit={handleLoginSubmit} className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-3">
            <h1 className="-mb-5 pt-4 text-left text-2xl font-black">Inicia sesión</h1>
            <InputField className="ml-4" type="email" placeholder="Email" id="email" icon={<IoIosMail />} />
            <InputFieldPassword placeholder="Contraseña" id="password" />
            <Link className="underline" to="">
              ¿Olvidaste la constraseña?
            </Link>
            <Button type="submit" className="bg-black text-xl text-white hover:bg-customRed hover:text-black">
              Iniciar sesión
            </Button>
            <p className="text-center">
              ¿Aún no tienes cuenta?
              <Link to="/register" className="ml-2 font-bold underline">
                Regístrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
