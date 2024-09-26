import Avatar from "./Avatar"
import RatingCheck from "../core/RatingCheck/RatingCheck"
import Button from "../core/Button/Button"

export default function VendedorVerificado({ textButton }: { textButton: string }) {
  return (
    <>
      <div className="flex flex-col p-2">
        <p className="mb-2">Vendedor verificado:</p>
        <div className="flex flex-row">
          <Avatar size="5rem" />
          <div>
            <span className="flex gap-3">
              <p className="mb-2">Franco Lopez Maciel</p>
              <RatingCheck />
            </span>
            <div className="flex flex-col">
              <p className="mb-1">La vende por:</p>
              <p>
                <em>"No puedo asistir porque se superpone con mi trabajo"</em>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-auto items-start px-4">
          <input type="checkbox" className="mt-1 h-6 w-6" />
          <p className="ml-2 w-[20rem]">
            Entiendo que estoy adquiriendo una entrada a través de un tercero en reventa y que la plataforma garantiza
            la autenticidad de la entrada en caso de que sea validada correctamente.
          </p>
        </div>
        <span className="my-8 flex w-full justify-center">
          <Button className="-z-20 w-[15rem] bg-customGreen text-2xl text-customWhite">{textButton}</Button>
        </span>
      </div>
    </>
  )
}
