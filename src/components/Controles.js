import { useEffect, useState } from "react";

export default function Controles({
  localidadActual,
  comenzarHandler,
  adivinarHandler,
  resultados,
}) {
  const respuestaInicial = {
    provincia: "",
    departamento: "",
    localidad: "",
  };
  const [formRespuesta, setFormRespuesta] = useState(respuestaInicial);
  if (!localidadActual) {
    return (
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={comenzarHandler}
        >
          Comenzar
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-between text-center">
        <h3 className="text-2xl text-black mb-4 font-bold">Adiviná:</h3>
        
        <h4 className="text-xl text-black mt-1 mb-2">Departamento 🤐: {localidadActual && resultados ? <b className="text-green-300">{localidadActual.departamento.nombre}</b> : <></>}</h4>
        <input
          value={formRespuesta.departamento}
          onChange={(e) =>
            setFormRespuesta({ ...formRespuesta, departamento: e.target.value })
          }
          className={
            "block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 border-2" +
            (resultados
              ? resultados.departamento
                ? " border-green-500 bg-green-200"
                : " border-red-500 bg-red-200"
              : "")
          }
        />
        <h4 className="text-xl text-black mt-1 mb-2">Localidad 😈: {localidadActual && resultados ? <b className="text-green-300">{localidadActual.nombre}</b> : <></>}</h4>
        <input
          value={formRespuesta.localidad}
          onChange={(e) =>
            setFormRespuesta({ ...formRespuesta, localidad: e.target.value })
          }
          className={
            "block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 border-2" +
            (resultados
              ? resultados.localidad
                ? " border-green-500 bg-green-200"
                : " border-red-500 bg-red-200"
              : "")
          }
        />

        {!resultados ? (
          <button
            onClick={() => adivinarHandler(formRespuesta)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Adivinar
          </button>
        ) : (
          <button
            onClick={() => {
              comenzarHandler();
              setFormRespuesta(respuestaInicial);
            }}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Siguiente
          </button>
        )}
      </div>
    );
  }
}
