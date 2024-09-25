// src/components/view/Register.tsx

import { Link } from "react-router-dom";
import Button from "../core/Button/Button";
import InputField from "../core/InputField/InputField";
import InputFieldPassword from "../core/InputFieldPassword/InputFieldPassword";
import Checkbox from "../core/Checkbox/Checkbox";
import { IoIosMail } from "react-icons/io";
import { useRegister } from "../../hooks/useRegister";
import Swal from "sweetalert2";

export default function Register() {
  const { register } = useRegister();

  const handleRegisterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as EventTarget & {
      email: HTMLInputElement;
      password: HTMLInputElement;
      confirmPassword: HTMLInputElement;
    };

    const email = target.email.value.trim();
    const password = target.password.value.trim();
    const confirmPassword = target.confirmPassword.value.trim();

    // Validación de coincidencia de contraseñas
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Contraseñas no coinciden",
        text: "Por favor, asegúrate de que las contraseñas sean iguales.",
      });
      return;
    }

    // Llama al método de registro del hook con parámetros por defecto
    await register(email, password); // Se llamará con nombre, dni y numeroTelefono por defecto
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

          <form onSubmit={handleRegisterSubmit} className="flex w-[90%] flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-3">
            <h1 className="-mb-5 pt-4 text-left text-2xl font-black">Regístrate</h1>
            <InputField className="ml-4" type="email" placeholder="Email" id="email" icon={<IoIosMail />} />
            <InputFieldPassword placeholder="Contraseña" id="password" />
            <InputFieldPassword placeholder="Confirmar Contraseña" id="confirmPassword" />
            <Checkbox />
            <Button type="submit" className="bg-black text-xl text-white hover:bg-customRed hover:text-black">
              Crear Cuenta
            </Button>
            <p className="text-center">
              ¿Ya tienes una cuenta?
              <Link to="/login" className="ml-2 font-bold underline">
                Inicia Sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
