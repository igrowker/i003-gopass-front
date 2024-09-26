import { Footer } from "../../UI/Footer";
import BannerMove from "../../UI/BannerMove";
import { Navbar } from "../../UI/Navbar";
import Grid from "../../UI/Grid";
import Card from "../../UI/Card";

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