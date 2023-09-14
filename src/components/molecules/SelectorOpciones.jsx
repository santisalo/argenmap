import OpcionSelector from "../atoms/OpcionSelector";

export default function SelectorOpciones({
  opciones = [],
  handlerCambioOpcion,
  seleccionado,
}) {
  return (
    <div className="grid grid-cols-2 px-2 mt-4 gap-6">
      {opciones.map((opcion) => (
        <OpcionSelector
          key={opcion.id}
          seleccionado={seleccionado === opcion.id}
          titulo={opcion.label}
          handlerSeleccion={() => handlerCambioOpcion(opcion.id)}
        />
      ))}
    </div>
  );
}
