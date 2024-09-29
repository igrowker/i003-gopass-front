import Button from "../components/core/Button"

function InvalidEntry() {
  return (
    <>
      <section className="flex flex-col items-center p-4">
        <div className="items-star m-4 flex flex-col">
          <div className="mb-10 text-xl font-semibold">
            <h1>Verifica una entrada</h1>
          </div>
          <div className="rounded-xl bg-customLigthRed p-2 text-center text-customWhite">
            <p>AUTENCIDAD NO VERIFICADA</p>
          </div>
          <div className="pt-7 text-xl font-semibold">
            El código que has ingresado no está en nuestra base de datos.
          </div>
        </div>
      </section>
      <section className="mt-8 flex flex-col items-center text-center">
        <Button className="-z-10 mb-6 bg-customGreen font-semibold text-white" type="submit">
          Verificar otra
        </Button>
      </section>
    </>
  )
}

export default InvalidEntry
