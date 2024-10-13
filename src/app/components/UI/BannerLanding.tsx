import { useEffect, useState } from "react"
import { imagesBanner } from "../../utils/imagesBanner"

export default function BannerLanding() {
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
          <div className="w-full">
            <img
              src={imagesBanner[currentIndex]}
              alt="banner"
              className="h-64 w-full rounded-md object-cover sm:h-96 md:h-[50vh] lg:h-[60vh] lg:w-full"
            />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
        </div>
      </div>
    </div>
  )
}
