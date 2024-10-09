import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { IoSettingsOutline } from "react-icons/io5"
import { IoTicketOutline } from "react-icons/io5"
import { LuBadgePercent } from "react-icons/lu"
import { MdOutlineVerifiedUser } from "react-icons/md"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { useGetProfile } from "../../../hooks/useGetProfile"
import { logoutUser } from "../../../service/authService"
import { RootState } from "../../../store/"
import Avatar from "./Avatar"

export default function SideBarMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { getProfileData } = useGetProfile()

  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    getProfileData()
  }, [])

  const handleLogout = () => {
    logoutUser()
    navigate("/login")
  }

  const handleClickOutside = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).closest(".sidebar-menu") === null) {
      onClose()
    }
  }

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 z-10 flex items-start justify-start bg-black bg-opacity-30"
    >
      <div
        className={`h-screen w-1/2 rounded-r-lg bg-gradient-to-r from-black to-gray-800 p-2 pb-14 text-customWhite ${isOpen ? "animate-slide-in" : "animate-slide-out"} `}
      >
        <div className="flex flex-col items-center gap-4">
          <Avatar img={user?.image} />
          <h2 className="font-azonix">{user?.nombre}</h2>
          <p>{user?.email}</p>
          <hr className="w-full border-2" />
          <div>
            <ul className="my-2 flex flex-col gap-5">
              <Link to="/user-profile">
                <li className="flex cursor-pointer items-center gap-2">
                  <IoSettingsOutline />
                  <p>{t("myAccount")}</p>
                </li>
              </Link>
              <Link to="/my-tickets">
                <li className="flex cursor-pointer items-center gap-2">
                  <IoTicketOutline />
                  <p>{t("buyTickets")}</p>
                </li>
              </Link>
              <Link to="/my-tickets-sold">
                <li className="flex cursor-pointer items-center gap-2">
                  <IoTicketOutline />
                  <p>{t("sellTickets")}</p>
                </li>
              </Link>
              <Link to="/vender-entrada">
                <li className="flex cursor-pointer items-center gap-2">
                  <LuBadgePercent />
                  <p>{t("resell")}</p>
                </li>
              </Link>
              <Link to="/verificar-entrada/">
                <li className="flex cursor-pointer items-center gap-2">
                  <MdOutlineVerifiedUser />
                  <p>{t("verify")}</p>
                </li>
              </Link>
            </ul>
          </div>
          <hr className="w-full border-2" />
          <div>
            <ul className="flex flex-col gap-5 pt-5 text-center">
              <li className="cursor-pointer">
                <p>{t("help")}</p>
              </li>
              <li className="cursor-pointer">
                <p>{t("about")}</p>
              </li>
              <li className="cursor-pointer" onClick={handleLogout}>
                <p>{t("signOut")}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
