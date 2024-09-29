export default function Checkbox() {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="label-text text-[1rem] font-semibold">No soy un Robot</span>
        <label className="label">
          <input type="checkbox" required className="h-6 w-6 cursor-pointer" />
        </label>
      </div>
    </>
  )
}
