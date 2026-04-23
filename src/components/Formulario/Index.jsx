import { useState } from "react"
import './formulario.css'

const Formulario = ({ crearCita }) => {

    const [form, setForm] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (Object.values(form).some(v => v.trim() === "")) {
            alert("Todos los campos son obligatorios")
            return
        }

        crearCita({
            Mascota: form.mascota,
            Dueño: form.propietario,
            Fecha: form.fecha,
            Hora: form.hora,
            Sintomas: form.sintomas
        })

        setForm({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre Mascota</label>
            <input 
                type="text" 
                name="mascota" 
                className="u-full-width" 
                placeholder="Nombre Mascota"
                value={form.mascota}
                onChange={handleChange}
            />

            <label>Nombre Dueño</label>
            <input 
                type="text" 
                name="propietario" 
                className="u-full-width" 
                placeholder="Nombre dueño de la mascota"
                value={form.propietario}
                onChange={handleChange}
            />

            <label>Fecha</label>
            <input 
                type="date" 
                name="fecha" 
                className="u-full-width"
                value={form.fecha}
                onChange={handleChange}
            />

            <label>hora</label>
            <input 
                type="time" 
                name="hora" 
                className="u-full-width"
                value={form.hora}
                onChange={handleChange}
            />

            <label>Sintomas</label>
            <textarea 
                name="sintomas" 
                className="u-full-width"
                value={form.sintomas}
                onChange={handleChange}
            ></textarea>

            <button type="submit" className="u-full-width button-primary">
                Agregar Cita
            </button>
        </form>
    )
}

export default Formulario