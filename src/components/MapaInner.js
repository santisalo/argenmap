import React, { useEffect } from "react";
import { Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function MapaInner({ latLon }) {
  const map = useMap();
  useEffect(() => {
    map.setView(latLon, 13);
  }, [latLon]);

  return (
    <>
      <TileLayer
        attribution="aaa"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={latLon}>
      </Marker>
    </>
  );
}
