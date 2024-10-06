import Button from "../core/Button"
import { useTranslation } from "react-i18next"

export default function Card() {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex justify-center p-2">
        <div className="card w-96 bg-base-100 shadow-2xl">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Partido Racing - San Lorenzo"
            />
          </figure>
          <div className="card-body pb-4">
            <h2 className="card-title text-xl font-bold">RACING - SAN LORENZO</h2>
            <p className="text-[1.1rem] font-medium">18 Feb - 18:00 EN AVELLANEDA</p>
            <p className="text-[1.3rem] font-medium">$10</p>
            <div className="card-actions justify-end">
              <Button className="btn relative -mt-8 bg-customGreen text-2xl text-customWhite hover:bg-customBlack">
                {t("buy")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
