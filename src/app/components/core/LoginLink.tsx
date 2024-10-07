import { ReactElement } from "react"
import { Link } from "react-router-dom"

interface LabelInputProps {
  children: string
  url: string
  icon?: ReactElement
  iconClassName?: string
}

export default function LabelInput({ children, url, icon, iconClassName }: LabelInputProps) {
  return (
    <>
      <div className="w-[20rem] bg-customWhite bg-opacity-80 rounded-xl hover:bg-customBlack transition-all duration-500">
        <Link
          to={url}
          className="group flex w-full items-center justify-center gap-5 p-2 text-customBlack font-semibold text-center rounded-lg transition-all duration-300 hover:bg-customGray hover:text-customGreen"
        >
          {icon && <span className={`text-3xl ${iconClassName}`}>{icon}</span>}
          {children}
        </Link>
      </div>
    </>
  )
}
