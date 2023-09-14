import React from "react";
import { provincias } from "../../lib/consts";

export default function SelectorProvincia({ handlerSeleccion }) {  
  return (
    <select onChange={handlerSeleccion} className="mt-2 p-2 bg-slate-600 text-white rounded mx-2">
      {provincias.map((provincia) => (
        <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
      ))}
    </select>
  );
}
