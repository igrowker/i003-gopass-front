import { ReactElement } from "react"

type InputFieldProps = {
  placeholder: string
  id: string
  icon?: ReactElement
  label?: string
  className?: string
  type?: any
}

export default function InputField({ placeholder, id, icon, label, className, type }: InputFieldProps) {
  return (
    <>
      <label className="block font-semibold" htmlFor={id}>
        {label && label}
      </label>
      <div className="input flex items-center gap-2 rounded-lg border-[2px] bg-customWhite">
        <input type={type} className={`grow ${className ? className : ""}`} placeholder={placeholder} id={id} />
        {icon && <div className="mr-4 h-7 w-7 cursor-pointer text-3xl text-black opacity-70">{icon}</div>}
      </div>
    </>
  )
}
