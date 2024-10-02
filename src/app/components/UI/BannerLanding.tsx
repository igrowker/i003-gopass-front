import { useEffect, useState } from "react"

const imagesBanner = [
  "/bannerImg/b1.avif",
  "/bannerImg/b2.avif",
  "/bannerImg/b3.avif",
  "/bannerImg/b4.avif",
  "/bannerImg/b5.avif",
  "/bannerImg/b6.avif",
  "/bannerImg/b7.avif",
  "/bannerImg/b8.avif",
  "/bannerImg/b9.avif",
  "/bannerImg/b10.avif",
  "/bannerImg/b11.avif",
  "/bannerImg/b12.avif"
]

export default function BannerLanding() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesBanner.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center">
      <div className="carousel m-3 mt-24 w-full items-center justify-center rounded-md">
        <div className="carousel-item relative w-full">
          <div className="h-64 w-full md:h-96 lg:h-[500px]">
            <img src={imagesBanner[currentIndex]} alt="banner" className="h-full w-full rounded-md object-cover" />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"></div>
        </div>
      </div>
    </div>
  )
}
