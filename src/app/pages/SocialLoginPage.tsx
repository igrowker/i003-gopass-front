import { useTranslation } from "react-i18next"
import { FcGoogle } from "react-icons/fc"
import { IoLogoApple } from "react-icons/io5"
import { SiFacebook } from "react-icons/si"

import LoginLink from "../components/core/LoginLink"

export default function Login() {
  const { t } = useTranslation()

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
          children={t("continueWithApple")}
          iconClassName="group-hover:text-white transition duration-500"
        />
        <LoginLink icon={<SiFacebook />} url="" children={t("continueWithFacebook")} iconClassName="text-blue-600" />
        <div className="flex flex-col items-center gap-4 text-[1.1rem] font-medium text-customWhite">
          <p>{t("or")}</p>
          <p>{t("skipForNow")}</p>
        </div>
        <footer className="absolute bottom-0 mb-6">
          <p className="text-center font-medium text-customWhite">{t("AgreeTermsAndConditions")}</p>
        </footer>
      </div>
    </div>
  )
}
