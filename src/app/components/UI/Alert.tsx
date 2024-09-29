// import './Alert.css'
import Button from '../core/Button'

interface AlertProps {
  message: string
  onAccept: () => void
}

export default ({ message, onAccept }: AlertProps) => (
  <div className="w-full flex flex-col items-center h-screen  justify-center">
    <div className="rounded-2xl relative flex-col mt-20 flex justify-center items-center bg-black bg-opacity-90 p-4 w-[25rem] h-[20%]">
      <p className="mb-4 text-white text-2xl font-semibold">{message}</p>
      <Button
        className="bg-white mt-4 text-black w-[10rem] text-2xl hover:bg-customLigthRed hover:text-customWhite px-4 py-2 ml-4 rounded-md"
        onClick={onAccept}
      >
        Aceptar
      </Button>
    </div>
  </div>
)
