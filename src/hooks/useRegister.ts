import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registrarUsuario } from "../service/authService"; 

const generarNumeroTelefonoAleatorio = (): string => {
  const numeroTelefono = Math.floor(100000000 + Math.random() * 900000000); // Generamois un número aleatorio de 9 dígitos para prueba
  return numeroTelefono.toString();
};

const generarDNIAleatorio = (): string => {
  const dni = Math.floor(10000000 + Math.random() * 90000000); // Generamos un número aleatorio de 8 dígitos para el DNI esto es para prueba
  return dni.toString();
};

export const useRegister = () => {
  const navigate = useNavigate();

  const register = async (
    email: string,
    password: string,
    nombre: string = "Usuario", // Valor por defecto
    verificado: boolean = true // Valor por defecto
  ) => {
    const numeroTelefono = generarNumeroTelefonoAleatorio(); 
    const dni = generarDNIAleatorio(); 

    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Por favor ingresa tu correo electrónico y contraseña.",
      });
      return;
    }

    try {
      // Llama a la función del service con todos los parámetros
      await registrarUsuario({
        email,
        password,
        nombre,
        dni,
        numeroTelefono,
        verificado,
      });
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Redirigiendo a iniciar sesión...",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/login"); // Redirige a la página de inicio de sesión
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al registrar",
        text: error instanceof Error ? error.message : "Error desconocido",
      });
    }
  };

  return { register };
};
