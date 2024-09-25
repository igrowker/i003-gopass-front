
const API_URL = "https://localhost:7220/api/Usuario/Login";


export const autenticarUsuario = async (
  email: string,
  password: string
): Promise<string> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Error en la autenticación"); 
  }

  const data = await response.json();
  return data.token; 
};


export const registrarUsuario = async (usuario: {
  email: string;
  password: string;
  nombre: string;
  dni: string;
  numeroTelefono: string;
  verificado: boolean;
}) => {
  // Lógica para hacer la petición al backend y registrar al usuario
  const response = await fetch('https://localhost:7220/api/Usuario/Register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) {
    throw new Error('Error al registrar el usuario.');
  }

  return await response.json();
};
