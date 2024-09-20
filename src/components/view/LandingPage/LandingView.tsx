import { Footer } from "../../UI/Footer";
import { Navbar } from "../../UI/Navbar";

export const LandingView = () => {

  return (
    <>
      <Navbar />
      <main>
        <div className="flex w-full flex-col border-opacity-50">
          <div className="card bg-base-300 rounded-box grid h-[40vh] place-items-center">
            content
          </div>
          <div className="divider bg-[#00BF63]"></div>
          <div className="card bg-base-300 rounded-box grid h-[40vh] place-items-center">
            content
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
