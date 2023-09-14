import { useState } from "react";
import InputAdivinar from "../atoms/InputAdivinar";

export default function ControlesJuego({
  localidadActual,
  adivinarHandler,
  siguienteHandler,
  resultados,
  filtroId,
}) {
  const respuestaInicial = {
    provincia: "",
    departamento: "",
    localidad: "",
  };
  const [formRespuesta, setFormRespuesta] = useState(respuestaInicial);
  function inputHandler(tipoInput, valor) {
    setFormRespuesta({ ...formRespuesta, [tipoInput]: valor });
  }

  return (
    <div className="flex flex-col justify-between text-center mt-4">
      {filtroId === 1 && (
        <InputAdivinar
          resultados={resultados}
          localidadActual={localidadActual}
          handlerInput={inputHandler}
          tipoInput="provincia"
          valor={formRespuesta.provincia}
          label="Provincia: "
        />
      )}
      <InputAdivinar
        resultados={resultados}
        localidadActual={localidadActual}
        handlerInput={inputHandler}
        tipoInput="departamento"
        valor={formRespuesta.departamento}
        label="Departamento: "
      />
      <InputAdivinar
        resultados={resultados}
        localidadActual={localidadActual}
        handlerInput={inputHandler}
        tipoInput="localidad"
        valor={formRespuesta.localidad}
        label="Localidad: "
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
            siguienteHandler();
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
