import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
//import Exemplo01 from './components/Exemplo01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Exemplo01 nome="tiago" nota={8}/>
    <Exemplo01 nome="gabriel" nota={3}/>
    <Exemplo01 nome="lucas" nota={5}/>  */}
    <App/>
  </React.StrictMode>
)