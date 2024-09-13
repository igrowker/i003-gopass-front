import { Link } from "react-router-dom"
import { ReactElement } from "react"

interface LabelInputProps {
  children: string
  url: string
  icon?: ReactElement
  iconClassName?: string
}

export default function LabelInput({ children, url, icon, iconClassName }: LabelInputProps) {
  return (
    <>
      <div className="w-[20rem] sm:w-auto bg-customWhite bg-opacity-80 p-2 rounded-xl hover:bg-customBlack transition-all duration-500">
        <Link
          to={url}
          className="group flex items-center justify-center gap-5 text-customBlack font-semibold text-center py-1 px-2 rounded-lg transition-all duration-300 hover:bg-customGray hover:text-customGreen"
        >
          {icon && <span className={`text-3xl ${iconClassName}`}>{icon}</span>}
          {children}
        </Link>
      </div>
    </>
  )
}
