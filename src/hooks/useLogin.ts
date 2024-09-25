import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { autenticarUsuario } from "../service/authService";

export const useLogin = () => {
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Por favor ingresa tu correo electrónico y contraseña.",
      });
      return;
    }

    try {
      const token = await autenticarUsuario(email, password);
      localStorage.setItem("authToken", token);

      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: "Redirigiendo...",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/"); // Redirige a la página que nosotros deseemos
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: error instanceof Error ? error.message : "Error desconocido",
      });
    }
  };

  return { login };
};
