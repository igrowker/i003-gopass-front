export default function LabelInput({
  type,
  placeholder,
  className,
}: {
  type: string
  placeholder: string
  className: string
}) {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 border-customWhite border-2">
        <svg
          aria-label="DNI"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70 text-customGreen"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type={`${type}`}
          className={`grow ${className ? className : ""} focus:border-customWhite text-customWhite `}
          placeholder={`${placeholder}`}
        />
      </label>
    </>
  )
}
