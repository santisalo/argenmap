import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MapaInner from "./MapaInner";
export default function Mapa({ localidadActual }) {
  const [latLon, setLatLon] = useState([0, 0]);
  useEffect(() => {
    if (localidadActual) {
      console.log(localidadActual);
      setLatLon([localidadActual.centroide.lat, localidadActual.centroide.lon]);
    }
  }, [localidadActual]);

  return (
    <MapContainer center={latLon} zoom={13} scrollWheelZoom={true} zoomAnimation={true}>
      <MapaInner latLon={latLon} />
    </MapContainer>
  );
}
