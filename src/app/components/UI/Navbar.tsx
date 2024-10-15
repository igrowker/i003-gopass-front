import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { GoHome } from "react-icons/go"
import { IoArrowBack } from "react-icons/io5"

import LOGO from "/img/isologo.svg"
import SideBarMenu from "./SideBarMenu"

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }

  const handleBack = () => {
    if (location.pathname === "/comprar-entrada/") {
      navigate("/all-tickets")
    } else {
      navigate("/")
    }
  }

  return (
    <div className="navbar fixed z-50 flex w-full items-center justify-center bg-customRed">
      <div className="absolute left-0">
        {location.pathname !== "/" && (
          <button onClick={handleBack} className="btn btn-ghost">
            {location.pathname === "/comprar-entrada/" ? (
              <IoArrowBack className="ml-2 h-10 w-10" />
            ) : (
              <GoHome className="ml-2 h-10 w-10" />
            )}
          </button>
        )}
      </div>

      <img className="h-16 w-16" src={LOGO} />
      <div className="absolute right-4">
        <div className="dropdown z-30">
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
      {isSideBarOpen && <SideBarMenu onClose={closeSideBar} isOpen={isSideBarOpen} />}
    </div>
  )
}
