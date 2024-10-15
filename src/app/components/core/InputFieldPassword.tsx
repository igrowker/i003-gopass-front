import { useState } from "react"

export default function InputFieldPassword({
  placeholder,
  id,
  className,
}: {
  placeholder: string
  id: string
  className?: string
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [_password, setPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const password: string = target.value

    setPassword(password)
  }

  return (
    <>
      <label className="input flex items-center gap-2 rounded-lg border-[2px] bg-customWhite">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          id={id}
          className={`grow ${className ? className : ""}`}
          onChange={handlePasswordChange}
        />
        <svg
          onClick={togglePasswordVisibility}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3.5 h-7 w-7 cursor-pointer opacity-70"
        >
          {showPassword ? (
            <path d="M12 4.5C7.305 4.5 3.27 7.288 1.5 12c1.77 4.712 5.805 7.5 10.5 7.5s8.73-2.788 10.5-7.5c-1.77-4.712-5.805-7.5-10.5-7.5zm0 13c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
          ) : (
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </label>
    </>
  )
}
