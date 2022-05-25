import React from 'react';
import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png';
import Tarea from './Componentes/tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt="Logo" />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React' />
      </div>
    </div>
  );
}

export default App;