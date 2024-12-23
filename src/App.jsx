import { useState } from 'react'
import Tips from './componentes/Tips'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Tips />
    </div>
  )
}

export default App
