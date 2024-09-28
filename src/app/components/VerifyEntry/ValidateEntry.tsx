import Button from '../core/Button/Button'
import InputField from '../core/InputField/InputField'

function ValidateEntry() {
  return (
    <>
      <section className="flex flex-col items-center p-4 w-full">
        <div className="m-4 flex flex-col items-star">
          <div className=" font-semibold text-xl">
            <h1>Verificar una entrada</h1>
          </div>
          <div className="font-semibold text-xl pt-7">Ingresa el código</div>
          <div className="pt-6 flex flex-col gap-3 text-xl text"></div>
        </div>
      </section>
      <section className="mt-8 flex flex-col text-center items-center">
        <InputField
          type="text"
          className="border-solid border-2 rounded-md p-2 w-[22rem]"
          placeholder="Código alfanumérico debajo del QR"
          id="fullName"
        />
        <Button
          className="mt-12 mb-6 bg-customGreen text-white font-semibold -z-10"
          type="submit"
        >
          Verificar otra
        </Button>
      </section>
    </>
  )
}

export default ValidateEntry
