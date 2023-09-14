import { useEffect, useState } from "react";

export default function InputAdivinar({
  resultados,
  localidadActual,
  handlerInput,
  tipoInput,
  valor,
  label,
}) {
  const [correcta, setCorrecta] = useState({
    provincia: null,
    departamento: null,
    localidad: null,
  });
  useEffect(() => {
    if (localidadActual) {
      console.log(localidadActual);
      if (tipoInput === "localidad") {
        setCorrecta({ ...correcta, [tipoInput]: localidadActual.nombre });
      } else {
        setCorrecta({
          ...correcta,
          [tipoInput]: localidadActual[tipoInput].nombre,
        });
      }
    }
  }, [localidadActual]);

  return (
    <>
      <h4 className="text-xl text-black mt-1 mb-2">
        {label}
        {localidadActual && resultados && !resultados[tipoInput] ? (
          <b className="text-green-300">{correcta[tipoInput]}</b>
        ) : (
          <></>
        )}
      </h4>
      <input
        value={valor}
        onChange={(e) => handlerInput(tipoInput, e.target.value)}
        className={
          "block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 border-2" +
          (resultados
            ? resultados[tipoInput]
              ? " border-green-500 bg-green-200"
              : " border-red-500 bg-red-200"
            : "")
        }
      />
    </>
  );
}
