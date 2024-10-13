import { useTranslation } from "react-i18next"

import BannerMove from "../components/UI/BannerLanding.tsx"
import { Footer } from "../components/UI/Footer"
import Grid from "../components/UI/Grid.tsx"
import { Navbar } from "../components/UI/Navbar"
import LatestEntries from "../views/LatestEntries.tsx"

export const LandingView = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <BannerMove />
        <Grid viewType="landing" />
        <div className="my-4 flex w-full justify-center">
          <hr className="w-[95%] border bg-customBlack" />
        </div>
        <h2 className="m-4 text-center text-xl font-bold md:text-2xl lg:text-3xl">{t("latestTickets")}</h2>
        <section className="mb-8">
          <ul className="space-y-4">
            <li>
              <LatestEntries />
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default LandingView
