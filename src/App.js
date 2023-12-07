import React from 'react';
import Exemplo01 from './components/Exemplo01';
import NumAleatorio from './components/NumAleatorio';
function App() {
  return (
    <div>
      <Exemplo01 nome="Tiago" idade="17"/>
      <NumAleatorio max={20} min={40}/>
    </div>
  );
}

export default App;
