import React, { useState } from "react";
import JuegoTemplate from "../templates/JuegoTemplate";
import TopBar from "../molecules/TopBar";
import MapaLeaflet from "../molecules/MapaLeaflet";
import FooterCopy from "../atoms/FooterCopy";
const mapaLeafletDefault = {
  localidadActual: { centroide: { lat: -37.5567163, lon: -63.3792535 } },
  zoom: 5,
};
export default function JuegoPage() {
  const [localidadActual, setLocalidadActual] = useState(mapaLeafletDefault.localidadActual)
  return (
    <main className="h-screen">
      <div className="contenido-top">
        <TopBar titulo="Argenmap" />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 contenido-principal">
        <div className="contenedor-leaflet md:h-full">
        { localidadActual && <MapaLeaflet localidadActual={localidadActual} zoom={13} />}
        </div>
        <JuegoTemplate handlerSetLocalidad={setLocalidadActual} />
      </div>
      <div className="contenido-bottom">
        <FooterCopy contenido="Copyright 2022" />
      </div>
    </main>
  );
}
