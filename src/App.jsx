import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>  
      </div>

      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Compteur: {count}
        </button>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
