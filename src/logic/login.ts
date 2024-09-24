import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const autenticarUsuario = async (email: string, password: string) => {
  try {
    // Hacer la petición para obtener todos los usuarios
    const response = await api.get("/users")

    interface User {
      email: string
      password: string
    }

    // Filtrar los usuarios con el email y password proporcionados
    const user: Object = response.data.find((user: User) => user.email === email && user.password === password)

    if (user) {
      console.log("Login successful", user)
      return user // Devuelve el usuario encontrado
    } else {
      throw new Error("Invalid email or password")
    }
  } catch (error) {
    console.error("Error logging in", error)
    throw error
  }
}

export default autenticarUsuario
