import { Footer } from "../../UI/Footer";
import { Navbar } from "../../UI/Navbar";
import { Link } from "react-router-dom";

export const LandingView = () => {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="flex w-full flex-col border-opacity-50">
          {/* Contenido principal */}
          <div className="card bg-base-300 rounded-box grid h-[40vh] place-items-center">
            content
          </div>

          {/* Divisor visual */}
          <div className="divider bg-[#00BF63]"></div>

          {/* Galería de imágenes */}
          <div className="p-4">
            {/* Contenedor del título y botón */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Entradas de reventa</h2>
              {/* Botón que lleva a todas las imágenes */}
              <Link to="/all-images">
                <Link to="/all-images">
                  <span className="text-customRed px-4 py-2 rounded-md cursor-pointer">
                    Ver más
                  </span>
                </Link>
              </Link>
            </div>

            {/* Grid de imágenes */}
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="w-full">
                  <img src={image} alt={`Imagen ${index + 1}`} className="w-full h-auto rounded-md" />
                  <div>
                    <p>Nombre de partido</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor visual */}
        <div className="divider bg-[#00BF63]"></div>

      </main>
      <Footer />
    </>
  );
};

export default LandingView;