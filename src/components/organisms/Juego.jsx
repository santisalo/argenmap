import { useEffect, useState } from "react";
import { revisarPuntos } from "../../lib/utils";
import ControlesJuego from "../molecules/ControlesJuego";
import TopBarJuego from "../molecules/TopBarJuego";
import { provincias } from "../../lib/consts";
export default function Juego({
  opcionesJuego = { modoId: 1, filtroId: 1, provincia: null },
  handlerSetLocalidad,
  handlerFinJuego,
}) {
  const [localidades, setLocalidades] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [resultados, setResultados] = useState(null);
  const [localidadActual, setLocalidadActual] = useState(null);
  const [intervalRef, setIntervalRef] = useState(null);
  const [datosTopBar, setDatosTopBar] = useState({
    left: {},
    center: {},
    right: {},
  });
  useEffect(() => {
    if (!localidades) {
      fetch(`/dataset/localidades-censales.json`)
        .then((res) => res.json())
        .then((res) => setLocalidades(res["localidades-censales"]))
        .catch((_) => console.log(_));
    }
    generarDatosTopBarInicial();
  }, []);

  useEffect(() => {
    if (localidades) {
      generarNuevaLocalidad();
    }
  }, [localidades]);

  function generarNuevaLocalidad() {
    if (opcionesJuego.filtroId === 2 && opcionesJuego.provincia) {
      console.log(opcionesJuego.filtroId, opcionesJuego.provincia)
      let localidadesProvincia = localidades.filter(
        (localidad) => localidad.provincia.id === opcionesJuego.provincia
      );
      console.log('localidadesProvincia', localidadesProvincia);
      setLocalidadActual(
        localidadesProvincia[
          Math.floor(Math.random() * localidadesProvincia.length)
        ]
      );
    } else {
      setLocalidadActual(
        localidades[Math.floor(Math.random() * localidades.length)]
      );
    }
    setResultados(null);
  }

  useEffect(() => {
    if (localidadActual) {
      handlerSetLocalidad(localidadActual);
      actualizarDatosTopBar();
    }
  }, [localidadActual]);
  function adivinarHandler(formRespuesta) {
    let resultadoAux = revisarPuntos(localidadActual, formRespuesta);
    setResultados(resultadoAux.resultado);
    setPuntos(puntos + resultadoAux.puntos);
  }

  function generarDatosTopBarInicial() {
    let datosTopBarAux = { ...datosTopBar };
    if (opcionesJuego.modoId >= 3) {
      // POR CANTIDAD
      datosTopBarAux.right.titulo = "Intentos Restantes";
      if (opcionesJuego.modoId === 3) {
        // 10 intentos
        datosTopBarAux.right.valor = 10;
      } else {
        // 20 intentos
        datosTopBarAux.right.valor = 20;
      }
    } else {
      // POR TIEMPO
      datosTopBarAux.right.titulo = "Tiempo Restante";
      if (opcionesJuego.modoId === 1) {
        // 30 segundos
        datosTopBarAux.right.valor = 30;
      } else {
        // 60 segundos
        datosTopBarAux.right.valor = 60;
      }
      actualizarTimer();
    }

    if (opcionesJuego.filtroId === 1) {
      datosTopBarAux.center.valor = "Todo el Pais";
    } else {
      datosTopBarAux.center.valor = provincias.find(
        (x) => x.id === opcionesJuego.provincia
      ).nombre;
    }
    datosTopBarAux.left.titulo = "Puntos";
    datosTopBarAux.left.valor = puntos;
    setDatosTopBar(datosTopBarAux);
  }

  function actualizarTimer() {
    if (!intervalRef) {
      let intervalo = setInterval(() => {
        if (datosTopBar.right.valor === 0) {
          handlerFinJuego(puntos);
          clearInterval(intervalRef);
        }
        let datosTopBarAux = { ...datosTopBar };
        datosTopBarAux.right.valor -= 0.5;
        setDatosTopBar(datosTopBarAux);
      }, 1000);
      setIntervalRef(intervalo);
    }
  }

  function actualizarDatosTopBar() {
    let datosTopBarAux = { ...datosTopBar };
    if (opcionesJuego.modoId === 3 || opcionesJuego.modoId === 4) {
      datosTopBarAux.right.valor--;
    }
    if (opcionesJuego.filtroId === 1) {
      datosTopBarAux.center.valor = "Todo el Pais";
    } else {
      datosTopBarAux.center.valor = provincias.find(
        (x) => x.id === opcionesJuego.provincia
      ).nombre;
    }
    datosTopBarAux.left.titulo = "Puntos";
    datosTopBarAux.left.valor = puntos;
    setDatosTopBar(datosTopBarAux);
    if (datosTopBarAux.right.valor === 0) {
      handlerFinJuego(puntos);
    }
  }

  return (
    <div>
      <TopBarJuego datos={datosTopBar} />
      <div className="my-3 px-12 text-center">
        <h2 className="text-xl font-bold">Adiviná:</h2>
        <ControlesJuego
          localidadActual={localidadActual}
          adivinarHandler={adivinarHandler}
          resultados={resultados}
          siguienteHandler={generarNuevaLocalidad}
          filtroId={opcionesJuego.filtroId}
        />
      </div>
    </div>
  );
}
