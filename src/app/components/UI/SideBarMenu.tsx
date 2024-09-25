import { Link, useNavigate } from "react-router-dom"

import { IoSettingsOutline } from "react-icons/io5"
import { IoTicketOutline } from "react-icons/io5"
import { LuBadgePercent } from "react-icons/lu"
import { MdOutlineVerifiedUser } from "react-icons/md"

import logic from "../../logic/"

import Avatar from "./Avatar"
import logoutUser from "../../../privateRoutes/logoutUser"

export default function SideBarMenu({ isOpen }: { isOpen: boolean }) {
  const navigate = useNavigate()

  const handleLogout = () => {
<<<<<<< HEAD:src/app/components/UI/SideBarMenu.tsx
    logoutUser()
=======
    logic.logoutUser()
>>>>>>> 7d05489 (add logout user funciton 7#):src/components/UI/SideBarMenu.tsx
    navigate("/login")
  }

  return (
    <div className="fixed inset-0 z-10 flex items-start justify-start bg-black bg-opacity-30">
      <div
        className={`h-screen w-1/2 rounded-r-lg bg-gradient-to-r from-black to-gray-800 p-2 pb-14 text-customWhite ${isOpen ? "animate-slide-in" : "animate-slide-out"} `}
      >
        <div className="flex flex-col items-center gap-4">
          <Avatar />
          <h2 className="font-azonix">FRANCO</h2>
          <p>franquito@email.com</p>
          <hr className="w-full border-2" />
          <div>
            <ul className="my-2 flex flex-col gap-5">
              <Link to="/user-profile">
                <li className="flex cursor-pointer items-center gap-2">
                  <IoSettingsOutline />
                  Mi Cuenta
                </li>
              </Link>
              <Link to="/">
                <li className="flex cursor-pointer items-center gap-2">
                  <IoTicketOutline />
                  Entradas
                </li>
              </Link>
              <Link to="/vender-entrada">
                <li className="flex cursor-pointer items-center gap-2">
                  <LuBadgePercent />
                  Revender
                </li>
              </Link>
              <Link to="/verificar-entrada/">
                <li className="flex cursor-pointer items-center gap-2">
                  <MdOutlineVerifiedUser />
                  Verificar
                </li>
              </Link>
            </ul>
          </div>
          <hr className="w-full border-2" />
          <div>
            <ul className="flex flex-col gap-5 pt-5 text-center">
              <li className="cursor-pointer">Help & Support</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer" onClick={handleLogout}>
                Sign Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
