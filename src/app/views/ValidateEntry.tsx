import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import { useValidateEntry } from "../../hooks/useValidateEntry"

interface ValidateFormElements extends HTMLFormControlsCollection {
  qrCode: HTMLInputElement
}

interface ValidateFormElement extends HTMLFormElement {
  elements: ValidateFormElements
}

function ValidateEntry() {
  const { verified } = useValidateEntry()

  const handleSubmit = async (event: React.FormEvent<ValidateFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const target = form.elements

    const qrCode: string = target.qrCode.value

    await verified(qrCode)

    form.reset()
  }

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
      <form className="mt-8 flex flex-col items-center text-center" onSubmit={handleSubmit}>
        <InputField
          type="text"
          className="w-[22rem] rounded-md border-2 border-solid p-2"
          placeholder="Código alfanumérico debajo del QR"
          id="qrCode"
        />
        <Button className="-z-10 mb-6 mt-12 bg-customGreen font-semibold text-white" type="submit">
          Verificar otra
        </Button>
      </form>
    </>
  )
}

export default ValidateEntry
