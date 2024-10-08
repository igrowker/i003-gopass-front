import { useTranslation } from "react-i18next"

import RatingCheck from "../components/core/RatingCheck"
import Avatar from "../components/UI/Avatar"

import { useEffect } from "react"
import { useGetSellerInfo } from "../../hooks/useGetSellerInfo"

import { RootState } from "../../store"
import { useSelector } from "react-redux"

import { Ticket } from "../../store/entry/entrySlice"

export default function VerifiedSeller({ ticket }: { ticket: Ticket }) {
  const { t } = useTranslation()
  const { getUserSellerInfo } = useGetSellerInfo(ticket.vendedorId)
  const user = useSelector((state: RootState) => state.user)

  useEffect(() => {
    getUserSellerInfo()
  }, [])

  return (
    <>
      <div className="flex flex-col p-2">
        <p className="mb-2">{t("verifiedSeller")}</p>
        <div className="flex flex-row">
          <Avatar size="5rem" img={user.image} />
          
          <div>
            <span className="flex gap-3">
              <p className="mb-2">{user.nombre}</p>
              <RatingCheck />
            </span>
            <div className="flex flex-col">
              <p className="mb-1">La vende por:</p>
              <p>
                <em>{ticket.resaleDetail}</em>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-auto items-start px-4">
          <input type="checkbox" className="mt-1 h-6 w-6" />
          <p className="ml-2 w-[20rem]">"Entiendo que estoy..."</p>
        </div>
      </div>
    </>
  )
}
