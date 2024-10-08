type TexAreaProps = {
  placeholder: string
  id: string
  label?: string
}

export default function TextArea({placeholder, id, label}: TexAreaProps ) {
  return (
    <>
      <label className="form-control font-semibold " htmlFor={id}>
        {label && label}
        <div className="label">
        </div>
        <textarea className="border-solid border-2 rounded-md p-2 h-24" placeholder={placeholder} id={id}></textarea>
      </label>
    </>
  )
}