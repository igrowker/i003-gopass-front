import axios, { InternalAxiosRequestConfig } from "axios"

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  //  Authorization: `Bearer ${sessionStorage.getItem("token")}`
  }
})


const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.url === '/login') return config;
  const tokenInfo = sessionStorage.getItem('token');

  config.headers.Authorization = `Bearer ${tokenInfo}`;
  
  return config;
};


httpClient.interceptors.request.use(requestInterceptor)
