export default function Boton({ titulo, handler, disabled = false }) {
  return (
    <button
      disabled={disabled}
      onClick={handler}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 md:py-2 md:px-4 rounded disabled:bg-slate-500 disabled:cursor-not-allowed"
    >
      {titulo}
    </button>
  );
}
