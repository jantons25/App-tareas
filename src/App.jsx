import { useState } from 'react'
import './App.css'
import Logo from './Componentes/Logo'
import ListaDeTareas from './Componentes/ListaDeTareas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Logo />
      <div className='taras-lista-principal'>
        <div className='container__tareas'>
          <h1>Mis Tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </div>
  )
}

export default App
