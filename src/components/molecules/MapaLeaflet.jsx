import { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import MapaInnerLeaflet from "./MapaInnerLeaflet";
const mapaLeafletDefault = {
  localidadActual: { centroide: { lat: -37.5567163, lon: -63.3792535 } },
  zoom: 5,
};
export default function MapaLeaflet({
  localidadActual = mapaLeafletDefault.localidadActual,
  zoom = mapaLeafletDefault.zoom,
}) {
  const [latLon, setLatLon] = useState([0, 0]);
  const [zoomActual, setZoomActual] = useState(13);
  useEffect(() => {
    if (localidadActual) {
      console.log(localidadActual);
      setLatLon(
        [localidadActual.centroide.lat, localidadActual.centroide.lon]
      );
      setZoomActual(zoom);
    }
  }, [localidadActual]);

  return (
    <MapContainer
      center={latLon}
      zoom={zoomActual}
      scrollWheelZoom={true}
      zoomAnimation={true}
      style={{ width: "100%", height: "100%" }}
    >
      <MapaInnerLeaflet latLon={latLon} />
    </MapContainer>
  );
}
