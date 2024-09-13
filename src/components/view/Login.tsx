import LoginLink from "./core/LoginLink"

import { FcGoogle } from "react-icons/fc"
import { IoLogoApple } from "react-icons/io5"
import { SiFacebook } from "react-icons/si"

export default function Login() {
  return (
    <div
      className="flex w-full h-screen justify-center relative"
      style={{
        backgroundImage: "url(/src/assets/login-image.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-md p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center gap-4 mb-36">
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
        <div className="text-customWhite flex flex-col items-center gap-4 text-xl font-medium">
          <p>Or</p>
          <p>Skip For Now</p>
        </div>
      </div>
    </div>
  )
}
