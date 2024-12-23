import { useState } from 'react'
import Tips from './componentes/Tips'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <div className="icon">
        <img src="./imagenes/ircdev.png" alt="Logo" className="animated-logo" />
      </div>
      <Tips />
    </div>
  )
}

export default App
