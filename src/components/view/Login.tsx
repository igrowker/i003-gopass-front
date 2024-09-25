import { Link, useNavigate } from 'react-router-dom'
import UseContext from '../../contexts/UseContext'

import Button from '../core/Button/Button'
import InputField from '../core/InputField/InputField'
import InputFieldPassword from '../core/InputFieldPassword/InputFieldPassword'
import { IoIosMail } from 'react-icons/io'

import logic from '../../logic'
import { SystemError } from 'com/errors'

export default function LoginSession() {
  const navigate = useNavigate()

  const { alert } = UseContext()

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as EventTarget & {
      email: HTMLInputElement
      password: HTMLInputElement
    }
    const email = target.email.value
    const password = target.password.value

    try {
      await logic.autenticarUsuario(email, password)
      navigate('/')
    } catch (error: unknown) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return (
    <>
      <div className="bg-login-image fixed flex h-screen w-full justify-center">
        <div className="mb-36 mt-28 flex w-full max-w-md flex-col items-center justify-center gap-4 p-2 sm:p-4 md:p-6">
          <picture>
            <source srcSet="/src/assets/isologo.webp" type="image/webp" />
            <source srcSet="/src/assets/isologo.svg" type="image/svg+xml" />
            <img
              src="/src/assets/isologo.png"
              alt="Logo"
              className="w-[15rem]"
            />
          </picture>

          <form
            onSubmit={handleLoginSubmit}
            className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-3"
          >
            <h1 className="-mb-5 pt-4 text-left text-2xl font-black">
              Inicia sesión
            </h1>
            <InputField
              className="ml-4"
              type="email"
              placeholder="Email"
              id="email"
              icon={<IoIosMail />}
            />
            <InputFieldPassword placeholder="Contraseña" id="password" />
            <Link className="underline" to="">
              ¿Olvidaste la constraseña?
            </Link>
            <Button
              type="submit"
              className="bg-black text-xl text-white hover:bg-customRed hover:text-black"
            >
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
