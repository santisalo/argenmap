import Boton from "../atoms/Boton";

export default function FinJuego({ puntajeFinal, handlerVolverMenu }) {
  return (
    <div className="my-3 px-12 text-center">
      <h2 className="text-2xl font-bold">Game Over</h2>
      <p className="text-xl mt-3">Puntaje Final: {puntajeFinal}</p>
      <div className="mt-3">
        <Boton titulo="Volver al Menú" handler={handlerVolverMenu} />
      </div>
    </div>
  );
}
