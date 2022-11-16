
import { useState } from 'react';
import './App.css';
import {Escoger_num} from './components/Escoger_num';

function App() {
const [tam_actual, set_tam_actual] = useState(' ningun_Estado');
  
{/* componentes siempre con mayuscula */}
return (
    <div className="App">
      <h1>Probando padre hijo componentes:{tam_actual} </h1>{/*para actualizar el estado */}
      <Escoger_num 
      Escoger_num_seleccionado={tam_actual}
      onEscoger_num_seleecionado={(num) => set_tam_actual(num)}
      /> 
    </div>
  )
}

export default App
