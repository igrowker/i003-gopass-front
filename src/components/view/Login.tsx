import LabelInput from "./core/LabelInput"

export default function LoginSession() {
  return (
    <>
      <div className="bg-login-image relative flex h-screen w-full justify-center">
        <div className="mb-36 flex w-full max-w-md flex-col items-center justify-center gap-4 p-2 sm:p-4 md:p-6">
          <picture>
            <source srcSet="/src/assets/isologo.webp" type="image/webp" />
            <source srcSet="/src/assets/isologo.svg" type="image/svg+xml" />
            <img src="/src/assets/isologo.png" alt="Logo" className="w-[15rem]" />
          </picture>

          <LabelInput />
        </div>
      </div>
    </>
  )
}
