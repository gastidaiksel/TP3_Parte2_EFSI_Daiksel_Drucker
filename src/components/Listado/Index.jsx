import Cita from "../Citas/Index.jsx";

const Listado = ({ citas, eliminarCita }) => {
  return (
    <div className="lista-citas">
      {citas.map((cita, index) => (
        <Cita 
          key={index} 
          cita={cita} 
          eliminarCita={eliminarCita}
          index={index}
        />
      ))}
    </div>
  )
}

export default Listado;