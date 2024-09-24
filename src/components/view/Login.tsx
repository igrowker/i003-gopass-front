import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

import Button from "../core/Button/Button"
import InputField from "../core/InputField/InputField"
import InputFieldPassword from "../core/InputFieldPassword/InputFieldPassword"
import { IoIosMail } from "react-icons/io"

//import logic from "../../logic"

export default function LoginSession() {
  const navigate = useNavigate()

//import Swal from 'sweetalert2';

const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const target = event.target as typeof event.target & {
    email: { value: string };
    password: { value: string };
  };

  const email = target.email.value.trim();
  const password = target.password.value.trim();

  if (!email || !password) {
    Swal.fire({
      icon: "warning",
      title: "Campos vacíos",
      text: "Por favor ingresa tu correo electrónico y contraseña.",
    });
    return;
  }

  try {
    const response = await fetch("https://localhost:7220/api/Usuario/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Supongamos que la API devuelve un token o información de usuario
    // Puedes almacenar el token en localStorage o en el estado de tu aplicación
    const { token } = data;
    localStorage.setItem("authToken", token);

    Swal.fire({
      icon: "success",
      title: "Inicio de sesión exitoso",
      text: "Redirigiendo...",
      timer: 1500,
      showConfirmButton: false,
    });
    navigate("/"); // Redirige a la página principal después del login exitoso

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error al iniciar sesión",
      text: error instanceof Error ? error.message : "Error desconocido",
    });
  }
};



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
