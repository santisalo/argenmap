import { useEffect } from "react";

export default function TopBarJuego({ datos }) {
  useEffect(() => {
    console.log(datos);
  }, [datos]);

  return (
    <div className="h-12 md:h-14 bg-slate-300 flex items-center justify-around">
      <div className="w-1/3 text-center">
        <p className="text-xs text-slate-800">{datos.left.titulo}</p>
        <p className="text-slate-800 font-bold">{datos.left.valor}</p>
      </div>
      <h3 className="w-1/3 text-center text-slate-800 text-xl">
        {datos.center.valor}
      </h3>
      <div className="w-1/3 text-center">
        <p className="text-xs text-slate-800">{datos.right.titulo}</p>
        <p className="text-slate-800 font-bold">{datos.right.valor}</p>
      </div>
    </div>
  );
}
