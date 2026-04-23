import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Index.jsx'
import Subtitulo from './components/Subtitulo/Index.jsx'
import Listado from './components/Listado/Index.jsx'

const citasIniciales = [
  {
    Mascota: "Nina",
    Dueño: "Martin",
    Fecha: "2021-08-05",
    Hora: "08:20",
    Sintomas: "Le duele la pierna"
  },
  {
    Mascota: "Sifon",
    Dueño: "Flecha",
    Fecha: "2023-08-05",
    Hora: "09:24",
    Sintomas: "Duerme mucho"
  },
  {
    Mascota: "Floki",
    Dueño: "Ari",
    Fecha: "2023-08-05",
    Hora: "16:15",
    Sintomas: "No está comiendo"
  }
]

function App() {
  const [citas, setCitas] = useState(citasIniciales)

  const crearCita = (cita) => {
    setCitas([...citas, cita])
  }
  
  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index)
    setCitas(nuevasCitas)
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="app-container">
        <div className="app-column app-column--left">
          <Subtitulo subtitulo="Crear mi cita" />
          <Formulario crearCita={crearCita} />
        </div>
        <div className="app-column app-column--right">
          <Subtitulo subtitulo="Administra tus citas" />
          <Listado citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  )
}

export default App