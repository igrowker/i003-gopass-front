import { Link } from "react-router-dom"

export const PageNotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-[url('/diego404.avif')] bg-cover bg-center bg-no-repeat">
      <div className="flex h-screen w-full flex-col bg-black bg-opacity-40 shadow-2xl">
        <Link to="/" className="mt-8 self-center px-6 text-xl font-black text-customGreen underline">
          <img src="/favicon.png" alt="404" className="mt-10 w-[10rem] self-center" />
        </Link>
        <h1 className="mt-10 text-center text-7xl font-black text-white">
          <span className="text-customLigthRed">404</span> - Page Not Found
        </h1>
        <p className="mt-8 text-center text-2xl font-black text-white">
          Sorry, the page you are looking for doesn't exist.
        </p>
      </div>
    </div>
  )
}
