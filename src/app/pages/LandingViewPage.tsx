import { Footer } from "../components/UI/Footer"
import BannerMove from "../components/UI/BannerMove.tsx"
import { Navbar } from "../components/UI/Navbar"
import Grid from "../components/UI/Grid.tsx"
import LatestEntries from "../views/LatestEntries.tsx"

export const LandingView = () => {
  return (
    <>
      <Navbar />
      <BannerMove />
      <Grid />
      <div className="flex w-full justify-center">
        <hr className="w-[95%] border bg-customBlack" />
      </div>
      <h2 className="m-4 text-xl font-bold">Entradas de reventa</h2>
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
