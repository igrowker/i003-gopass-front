import { useTranslation } from "react-i18next"
import { Footer } from "../components/UI/Footer"
import BannerMove from "../components/UI/BannerLanding.tsx"
import { Navbar } from "../components/UI/Navbar"
import Grid from "../components/UI/Grid.tsx"
import LatestEntries from "../views/LatestEntries.tsx"

export const LandingView = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <BannerMove />
      <Grid viewType="landing" />
      <div className="flex w-full justify-center">
        <hr className="w-[95%] border bg-customBlack" />
      </div>
      <h2 className="m-4 text-xl font-bold">{t("resaleTickets")}</h2>
      <section>
        <ul>
          <li>
            <LatestEntries />
          </li>
        </ul>
      </section>
      <Footer />
    </>
  )
}

export default LandingView
