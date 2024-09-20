import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LOGO from "../../assets/isologo.png"
import SideBarMenu from "./SideBarMenu/SideBarMenu"

export const Navbar = () => {
  const navigate = useNavigate()
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }


  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="navbar relative flex w-full items-center justify-center bg-customRed">
      <div className="absolute left-0">
        <button onClick={handleGoBack} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <img className="h-16 w-16" src={LOGO} />
      <div className="absolute right-4">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost" onClick={toggleSideBar}>
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
      {isSideBarOpen && <SideBarMenu isOpen={isSideBarOpen} />}
    </div>
  )
}
