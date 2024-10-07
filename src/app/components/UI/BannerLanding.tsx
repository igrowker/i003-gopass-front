import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"

export default function BannerLanding() {
  const tickets = useSelector((state: RootState) => state.entry.tickets)

  const imagesBanner =
    tickets.length > 0
      ? tickets.map((ticket) => ticket.entrada.image)
      : [
          "https://images.unsplash.com/photo-1569863959165-56dae551d4fc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesBanner.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [imagesBanner.length])

  return (
    <div className="flex justify-center">
      <div className="carousel m-3 mt-24 w-full items-center justify-center rounded-md">
        <div className="carousel-item relative w-full">
          <div className="h-64 w-full sm:h-80 md:h-96 lg:h-[500px]">
            <img src={imagesBanner[currentIndex]} alt="banner" className="h-full w-full rounded-md object-contain" />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
        </div>
      </div>
    </div>
  )
}
