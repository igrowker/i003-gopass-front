interface ButtonProps {
  className?: string
  children: string
  type?: any
  onClick?: () => void
}

export default function Button({
  className,
  onClick,
  children,
  type,
}: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`btn glass ${className ? className : ''}`}
      >
        {children}
      </button>
    </>
  )
}
