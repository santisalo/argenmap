import { useState } from "react";
import MenuInicial from "../organisms/MenuInicial";
import Juego from "../organisms/Juego";
import FinJuego from "../organisms/FinJuego";

export default function JuegoTemplate({handlerSetLocalidad}) {
  const [pantalla, setPantalla] = useState("menuInicial");
  const [opcionesJuego, setOpcionesJuego] = useState(null);
  const [puntajeFinal, setPuntajeFinal] = useState(0)
  function comenzarHandler(modoId, filtroId, provincia = null) {
    console.log(modoId, filtroId, provincia);
    setOpcionesJuego({ modoId, filtroId, provincia });
    setPantalla("juego");
  }
  function handlerFinJuego(puntajeFinal) {
    setPantalla("finJuego");
    setPuntajeFinal(puntajeFinal)    
  }
  function irAlMenuInicial() {
    setPantalla("menuInicial");
    setOpcionesJuego(null);
    setPuntajeFinal(0)
  }
  const pantallas = {
    menuInicial: <MenuInicial comenzarHandler={comenzarHandler} />,
    juego: <Juego opcionesJuego={opcionesJuego} handlerSetLocalidad={handlerSetLocalidad} handlerFinJuego={handlerFinJuego} />,
    finJuego: <FinJuego puntajeFinal={puntajeFinal} handlerVolverMenu={irAlMenuInicial} />,
  };
  return (
    <div className="h-full">
    {pantallas[pantalla]}
    </div>
    );
}
