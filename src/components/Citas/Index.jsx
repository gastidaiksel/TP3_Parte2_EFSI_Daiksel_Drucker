import './citas.css'

const Cita = ({cita}) => {
  return (
    <article className="cita">
      <h3>{cita.Mascota}</h3>
      <p>
        <strong>Dueño:</strong> {cita['Dueño']}
      </p>
      <p>
        <strong>Fecha:</strong> {cita.Fecha}
      </p>
      <p>
        <strong>Hora:</strong> {cita.Hora}
      </p>
      <p>
        <strong>Síntomas:</strong> {cita.Sintomas}
      </p>
      <button className="eliminar-btn">Eliminar ×</button> 
    </article>
  )
}
export default Cita;