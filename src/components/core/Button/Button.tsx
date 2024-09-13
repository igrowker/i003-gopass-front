export default function Button({ className, children }: { className: string; children: string }) {
  return (
    <>
      <button className={`btn glass bg-customLigthRed  ${className ? className : ""}`}>{children}</button>
    </>
  )
}
