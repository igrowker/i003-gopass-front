interface ButtonProps {
  className?: string
  children: string
  type?: any
}

export default function Button({ className, children, type }: ButtonProps) {
  return (
    <>
      <button type={type} className={`btn glass ${className ? className : ""}`}>
        {children}
      </button>
    </>
  )
}
