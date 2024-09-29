import Button from "../components/core/Button"
import InputField from "../components/core/InputField"

function ValidateEntry() {
  return (
    <>
      <section className="flex w-full flex-col items-center p-4">
        <div className="items-star m-4 flex flex-col">
          <div className="text-xl font-semibold">
            <h1>Verificar una entrada</h1>
          </div>
          <div className="pt-7 text-xl font-semibold">Ingresa el código</div>
          <div className="text flex flex-col gap-3 pt-6 text-xl"></div>
        </div>
      </section>
      <section className="mt-8 flex flex-col items-center text-center">
        <InputField
          type="text"
          className="w-[22rem] rounded-md border-2 border-solid p-2"
          placeholder="Código alfanumérico debajo del QR"
          id="fullName"
        />
        <Button className="-z-10 mb-6 mt-12 bg-customGreen font-semibold text-white" type="submit">
          Verificar otra
        </Button>
      </section>
    </>
  )
}

export default ValidateEntry
