export default function Button({ className }: { className: string }) {
  return (
    <>
      <button className={`btn glass ${className ? className : ""}`}>Glass button</button>
    </>
  )
}
