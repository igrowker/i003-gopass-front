import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpApi from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json" // Ruta para cargar archivos de traducción
    },
    detection: {
      order: ["navigator", "querystring", "cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"]
    },
    react: {
      useSuspense: false // Opcional: desactiva el suspense de React
    }
  })

export default i18n
