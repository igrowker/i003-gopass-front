import { Link } from "react-router-dom"

import Button from "../core/Button/Button"
import InputField from "../core/InputField/InputField"
import InputFieldPassword from "../core/InputFieldPassword/InputFieldPassword"
import { IoIosMail } from "react-icons/io"


export default function LoginSession() {
  return (
    <>
      <div className="bg-login-image flex h-screen w-full justify-center fixed">
        <div className="mb-36 flex w-full max-w-md flex-col items-center justify-center gap-4 p-2 sm:p-4 md:p-6">
          <picture>
            <source srcSet="/src/assets/isologo.webp" type="image/webp" />
            <source srcSet="/src/assets/isologo.svg" type="image/svg+xml" />
            <img src="/src/assets/isologo.png" alt="Logo" className="w-[15rem]" />
          </picture>

          <form className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-3">
            <h1 className="pt-4 text-left text-2xl font-black -mb-5">Inicia sesión</h1>
            <InputField type="email" placeholder="Email" id="email" icon={<IoIosMail />} />
            <InputFieldPassword placeholder="Contraseña" id="password" />
            <Link className="underline" to="">
              ¿Olvidaste la constraseña?
            </Link>
            <Button type="submit" className="bg-black text-xl text-white hover:bg-customRed hover:text-black">Iniciar sesión</Button>
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
