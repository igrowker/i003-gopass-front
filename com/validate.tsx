import { ContentError, MatchError } from "../com/errors.tsx"

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const FULL_NAME_REGEX = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/
export const CITY_REGEX = /^[a-zA-Z\u00C0-\u017F\s]+$/
export const COUNTRY_REGEX = /^[a-zA-Z\u00C0-\u017F\s]+$/
export const DOCUMENT_REGEX = /^[A-Z0-9]{5,20}$/
export const QR_CODE_REGEX =
  /^[a-zA-Z0-9]{1,2953}$|^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/

function validateEmail(email: string) {
  if (!EMAIL_REGEX.test(email)) {
    throw new ContentError("El correo electrónico no es válido")
  }
}

function validateFullName(fullName: string) {
  if (!FULL_NAME_REGEX.test(fullName)) {
    throw new ContentError("El nombre completo no es válido")
  }
}

function validatePassword(password: string) {
  if (!PASSWORD_REGEX.test(password)) {
    throw new ContentError("La contraseña no es válida")
  }
}

function validateCity(city: string) {
  if (!CITY_REGEX.test(city)) {
    throw new ContentError("El nombre de la ciudad no es válido")
  }
}
function validateCountry(country: string) {
  if (!COUNTRY_REGEX.test(country)) {
    throw new ContentError("El nombre del país no es válido")
  }
}
function validateDocument(document: string) {
  if (!DOCUMENT_REGEX.test(document)) {
    throw new ContentError("El documento no es válido")
  }
}

function validatePasswordsMatch(password: string, passwordRepeat: string) {
  if (password !== passwordRepeat) {
    throw new MatchError("Contraseñas no coinciden")
  }
}

function validateQrCode(qrCode: string) {
  if (!QR_CODE_REGEX.test(qrCode)) {
    throw new Error("El código QR no es válido")
  }
}

const validate = {
  email: validateEmail,
  fullName: validateFullName,
  password: validatePassword,
  city: validateCity,
  country: validateCountry,
  document: validateDocument,
  passwordsMatch: validatePasswordsMatch,
  qrCode: validateQrCode
}

export default validate
