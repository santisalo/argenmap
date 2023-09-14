import { useState } from "react";
import Boton from "../atoms/Boton";
import SelectorOpciones from "../molecules/SelectorOpciones";
import SelectorProvincia from "../molecules/SelectorProvincia";

export default function MenuInicial({ comenzarHandler }) {
  const [opcionModoJuego, setOpcionModoJuego] = useState(1);
  const [opcionFiltro, setOpcionFiltro] = useState(1);
  const [provincia, setProvincia] = useState(null);
  return (
    <div className="mb-2 px-4 md:my-3 md:px-12">
      <div className="w-full h-full flex flex-col md:justify-between text-center">
        <h2 className="text-xl font-bold">Como Jugar:</h2>
        <p>
          Elegí el modo de juego e intentá adivinar provincia, departamento y localidad!
        </p>
        <h2 className="text-xl font-bold mt-4">Modos de Juego:</h2>
        <SelectorOpciones
          handlerCambioOpcion={setOpcionModoJuego}
          seleccionado={opcionModoJuego}
          opciones={[
            { id: 1, label: "Por Tiempo (30s)" },
            { id: 2, label: "Por Tiempo (1m)" },
            { id: 3, label: "Por Cantidad (10 intentos)" },
            { id: 4, label: "Por Cantidad (20 intentos)" },
          ]}
        />
        <h2 className="text-xl font-bold mt-4">Filtros:</h2>
        <SelectorOpciones
          handlerCambioOpcion={setOpcionFiltro}
          seleccionado={opcionFiltro}
          opciones={[
            { id: 1, label: "Todo el Pais" },
            { id: 2, label: "Por Provincia" },
          ]}
        />
        {opcionFiltro === 2 && (
          <SelectorProvincia
            handlerSeleccion={e => setProvincia(e.target.value)}
            seleccionado={provincia}
          />
        )}
        <div className="mt-4">
          <Boton
            titulo="Comenzar"
            handler={() =>
              comenzarHandler(opcionModoJuego, opcionFiltro, provincia)
            }
            disabled={opcionModoJuego === null || opcionFiltro === null}
          />
        </div>
      </div>
    </div>
  );
}
