// import Button from "../components/core/Button"
// import InputField from "../components/core/InputField"
// import { useValidateEntry } from "../../hooks/useValidateEntry"
// import { useState } from "react"

// interface ValidateFormElements extends HTMLFormControlsCollection {
//   codigoQR: HTMLInputElement
// }

// interface ValidateFormElement extends HTMLFormElement {
//   elements: ValidateFormElements
// }

// function ValidateEntry({ onValidate }) {
//   const { verified } = useValidateEntry()

//   const handleSubmit = async (event: React.FormEvent<ValidateFormElement>) => {
//     event.preventDefault()
//     const form = event.currentTarget
//     const target = form.elements

//     const codigoQR: string = target.codigoQR.value

//     await verified(codigoQR)
//     onValidate()

//     form.reset()
//   }

//   return (
//     <>
//       <section className="flex w-full flex-col items-center p-4">
//         <div className="items-star m-4 flex flex-col">
//           <div className="text-xl font-semibold">
//             <h1>Verificar una entrada</h1>
//           </div>
//           <div className="pt-7 text-xl font-semibold">Ingresa el código</div>
//           <div className="text flex flex-col gap-3 pt-6 text-xl"></div>
//         </div>
//       </section>
//       <form className="mt-8 flex flex-col items-center text-center" onSubmit={handleSubmit}>
//         <InputField
//           type="text"
//           className="w-[22rem] rounded-md border-2 border-solid p-2"
//           placeholder="Código alfanumérico debajo del QR"
//           id="codigoQR"
//         />
//         <Button className="mb-6 mt-12 bg-customGreen font-semibold text-white" type="submit">
//           Verificar
//         </Button>
//       </form>
//     </>
//   )
// }

// export default ValidateEntry

import Button from "../components/core/Button"
import InputField from "../components/core/InputField"
import { useValidateEntry } from "../../hooks/useValidateEntry"

interface ValidateFormElements extends HTMLFormControlsCollection {
  codigoQR: HTMLInputElement
}

interface ValidateFormElement extends HTMLFormElement {
  elements: ValidateFormElements
}

function ValidateEntry({ onValidate }: { onValidate: (isValid: boolean) => void }) {
  const { verified } = useValidateEntry()

  const handleSubmit = async (event: React.FormEvent<ValidateFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const target = form.elements

    const codigoQR: string = target.codigoQR.value

    // Asume que `verified` retorna un booleano que indica si es válido o no
    const isValid = await verified(codigoQR)

    // Llamamos a `onValidate` con `isValid` como argumento
    onValidate(isValid)

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
          id="codigoQR"
        />
        <Button className="mb-6 mt-12 bg-customGreen font-semibold text-white" type="submit">
          Verificar
        </Button>
      </form>
    </>
  )
}

export default ValidateEntry