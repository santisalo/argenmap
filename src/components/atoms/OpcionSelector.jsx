export default function OpcionSelector({
  titulo,
  handlerSeleccion,
  seleccionado,
}) {
  return (
    <button
      className={
        "bg-blue-200 border-blue-300 border-2 border-opacity-100 hover:bg-blue-300 font-bold py-2 px-1 md:py-6 md:px-4 rounded " +
        (seleccionado ? "bg-blue-600 text-white" : " text-blue-800")
      }
      onClick={() => handlerSeleccion(titulo)}
    >
      {titulo}
    </button>
  );
}
