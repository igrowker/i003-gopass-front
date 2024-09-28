import { Footer } from "../components/UI/Footer";
import BannerMove from "../components/UI/BannerMove.tsx"
import { Navbar } from "../components/UI/Navbar"
import Grid from "../components/UI/Grid.tsx";
import Card from "../components/UI/Card.tsx";

export const LandingView = () => {

  return (
    <>
      <Navbar />
      <BannerMove />
      <Grid />
      <div className="w-full flex justify-center">
      <hr className="bg-customBlack w-[95%] border"/>
      </div>
      <h2 className="m-4 text-xl font-bold">Entradas de reventa</h2>
      <section>
        <ul>
          <li>
            <Card />
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default LandingView;