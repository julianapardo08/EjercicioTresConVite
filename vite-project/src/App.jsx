import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const integrantes = ["Steven Díaz","Juliana Pardo"]
  const listItems = integrantes.map((integrante,index) =>
    <ol key={index}>{integrante}</ol> 
  );
  const nuevos_registros = [];

  return (
    <div className="App">
      <h1>Bienvenido a Vite Con React</h1>
      <h4>Los integrantes que realizan esta página son:</h4>
      <ul>{listItems}</ul>  
      <form>
        <label>Nombre:</label>
        <input/>
        <label>Apellido:</label>
        <input/>
        <label>Número camada:</label>
        <input/>
        <label>Interes:</label>
        <select>
          <option>Deportes</option>
          <option>Juegos</option>
          <option>Libros</option>
          <option>Otro</option>
        </select>
        <button>Registrarse</button>
      </form>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
