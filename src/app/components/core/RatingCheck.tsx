export default function RatingCheck({ className }: { className?: string }) {
  return (
    <>
      <div className={`rating rating-sm ${className ? className : ""}`}>
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
      </div>
    </>
  )
}
