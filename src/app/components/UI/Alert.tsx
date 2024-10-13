import Button from "../core/Button"

interface AlertProps {
  message: string
  onAccept: () => void
}

export default ({ message, onAccept }: AlertProps) => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="flex w-[22rem] flex-col items-center justify-center rounded-2xl bg-black bg-opacity-90 p-4">
      <p className="mb-4 text-center text-2xl font-semibold text-white">{message}</p>
      <Button
        className="ml-4 mt-4 w-[10rem] rounded-md bg-white px-4 py-2 text-2xl text-black hover:bg-customLigthRed hover:text-customWhite"
        onClick={onAccept}
      >
        Aceptar
      </Button>
    </div>
  </div>
)
