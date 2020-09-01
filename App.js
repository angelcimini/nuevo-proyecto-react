import React, { useState } from 'react';
import Pregunta from './components/Pregunta';


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [resto, setResto] = useState(0);

  return (
    <div className="container">
      <header>
          <h1>Gasto semanal</h1>
          <div className="contenido-principal contenido">
            <Pregunta 
              setPresupuesto={setPresupuesto}
              setResto={setResto}
            />
          </div>
      </header>
    </div>
  );
}

export default App;
