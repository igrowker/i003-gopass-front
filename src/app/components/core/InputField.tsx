import React, { ReactElement } from "react"

type InputFieldProps = {
  placeholder: string
  id: string
  icon?: ReactElement
  label?: string
  className?: string
  type?: any
  value?: any
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  style?: any
  readonly?: boolean
}

export default function InputField({
  placeholder,
  id,
  icon,
  label,
  className,
  type,
  value,
  onChange,
  style,
  readonly
}: InputFieldProps) {
  return (
    <>
      <label className="block font-semibold" htmlFor={id}>
        {label && label}
      </label>
      <div className="input flex items-center gap-2 rounded-lg border-[2px] bg-customWhite p-0">
        <input
          type={type}
          className={`grow ${className ? className : ""}`}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          style={style}
          readOnly={readonly}
        />
        {icon && <div className="mr-8 h-7 w-7 cursor-pointer text-3xl text-black opacity-70">{icon}</div>}
      </div>
    </>
  )
}
