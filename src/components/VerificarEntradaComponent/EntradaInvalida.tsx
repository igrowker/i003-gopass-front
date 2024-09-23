import Button from '../core/Button/Button'

function EntradaInvalida() {
  return (
    <>
      <section className="flex flex-col items-center p-4">
        <div className="m-4 flex flex-col items-star">
          <div className="mb-10 font-semibold text-xl">
            <h1>Verifica tu entrada</h1>
          </div>
          <div className="bg-customLigthRed p-2 rounded-xl text-center text-customWhite">
            <p>AUTENCIDAD NO VERIFICADA</p>
          </div>
          <div className="font-semibold text-xl pt-7">
            El código que has ingresado no está en nuestra base de datos.
          </div>
        </div>
      </section>
      <section className="mt-8 flex flex-col text-center items-center">
        <Button
          className=" mb-6 bg-customGreen text-white font-semibold -z-10"
          type="submit"
        >
          Verificar otra
        </Button>
      </section>
    </>
  )
}

export default EntradaInvalida
