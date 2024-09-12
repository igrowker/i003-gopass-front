import { Link } from "react-router-dom"

import LabelInput from "./core/LabelInput"
import LabelInputPassword from "./core/LabelInputPassword"

export default function Login() {
  return (
    <div className="flex w-full h-screen justify-center relative top-24 ">
      <div className="w-full max-w-md p-2 sm:p-4 md:p-6 flex flex-col items-center gap-4">
        <picture>
          <source srcSet="/src/assets/isologo.webp" type="image/webp" />
          <source srcSet="/src/assets/isologo.svg" type="image/svg+xml" />
          <img src="/src/assets/isologo.png" alt="Logo" className="h-32 w-32" />
        </picture>
        <LabelInput type="text" placeholder="DNI" className="text-customBlack" />
        <LabelInputPassword className="text-customBlack" />
        <div>
          <p className="text-customWhite font-semibold">¿No estás registrado? </p>
          <Link className="text-customGreen font-bold" to="/register">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  )
}
