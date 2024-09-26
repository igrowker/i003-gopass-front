import LoginLink from "../core/LoginLink/LoginLink"

import { FcGoogle } from "react-icons/fc"
import { IoLogoApple } from "react-icons/io5"
import { SiFacebook } from "react-icons/si"

export default function Login() {
  return (
    <div className="bg-login-image relative flex h-screen w-full justify-center">
      <div className="mb-36 flex w-full max-w-md flex-col items-center justify-center gap-4 p-2 sm:p-4 md:p-6">
        <picture>
          <source srcSet="/src/assets/isologo.webp" type="image/webp" />
          <source srcSet="/src/assets/isologo.svg" type="image/svg+xml" />
          <img src="/src/assets/isologo.png" alt="Logo" className="w-[15rem]" />
        </picture>

        <LoginLink icon={<FcGoogle />} url="" children="Continue With Google" />
        <LoginLink
          icon={<IoLogoApple />}
          url=""
          children="Continue With Apple"
          iconClassName="group-hover:text-white transition duration-500"
        />
        <LoginLink icon={<SiFacebook />} url="" children="Continue With Facebook" iconClassName="text-blue-600" />
        <div className="flex flex-col items-center gap-4 text-[1.1rem] font-medium text-customWhite">
          <p>Or</p>
          <p>Skip For Now</p>
        </div>
        <footer className="absolute bottom-0 mb-6">
          <p className="text-center font-medium text-customWhite">
            I agree to the Terms & Conditions and Privacy Policy
          </p>
        </footer>
      </div>
    </div>
  )
}
