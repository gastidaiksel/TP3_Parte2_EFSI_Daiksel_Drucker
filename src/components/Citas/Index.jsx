import './citas.css'

const Cita = ({ cita, eliminarCita, index }) => {
  return (
    <article className="cita">
      <h3>{cita.Mascota}</h3>
      <p><strong>Dueño:</strong> {cita['Dueño']}</p>
      <p><strong>Fecha:</strong> {cita.Fecha}</p>
      <p><strong>Hora:</strong> {cita.Hora}</p>
      <p><strong>Síntomas:</strong> {cita.Sintomas}</p>
      <button 
        className="eliminar-btn"
        onClick={() => eliminarCita(index)}
      >Eliminar</button> 
    </article>
  )
}

export default Cita;