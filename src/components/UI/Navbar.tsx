import LOGO from "../../assets/isologo.png"

export const Navbar = () => {
  return (
    <div className="navbar relative flex w-full items-center justify-center bg-customRed">
      <img className="h-20 w-20" src={LOGO} />
      <div className="absolute right-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
