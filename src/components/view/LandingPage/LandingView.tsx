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
      <section>
        <ul>
          <li>
            <Card/>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default LandingView;