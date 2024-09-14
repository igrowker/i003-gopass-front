import Button from "../Button/Button"

export default function ComprarReventaComponent() {
  return (
    <>
      <div className="flex justify-center p-2 ">
        <div className="card bg-base-100 w-96 shadow-2xl ">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Partido Racing - San Lorenzo"
            />
          </figure>
          <div className="card-body pb-4">
            <h2 className="card-title font-bold text-xl">RACING - SAN LORENZO</h2>
            <p className="font-medium text-[1.1rem]">18 Feb - 18:00 EN AVELLANEDA</p>
            <p className="font-medium text-[1.3rem]">$10</p>
            <div className="card-actions justify-end">
              <Button className="btn btn-primary bg-customGreen hover:bg-customBlack relative -mt-8">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
