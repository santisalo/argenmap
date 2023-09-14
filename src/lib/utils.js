export const normalizarTexto = (texto) =>
  texto
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

export const revisarPuntos = (localidadActual, formRespuesta) => {
  let puntosAux = 0;
  const resultado = {
    provincia: false,
    departamento: false,
    localidad: false,
  };

  if (
    normalizarTexto(formRespuesta.provincia) ===
    normalizarTexto(localidadActual.provincia.nombre)
  ) {
    resultado.provincia = true;
    puntosAux += 1;
  }
  if (
    normalizarTexto(formRespuesta.departamento) ===
    normalizarTexto(localidadActual.departamento.nombre)
  ) {
    resultado.departamento = true;
    puntosAux += 5;
  }
  if (
    normalizarTexto(formRespuesta.localidad) ===
    normalizarTexto(localidadActual.nombre)
  ) {
    resultado.localidad = true;
    puntosAux += 8;
  }
  console.log(resultado);

  return {
    resultado,
    puntos: puntosAux,
  };
};
