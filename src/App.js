import React from 'react';
import api from './services/api';
import './App.css';

import logo from "./assets/logo.svg";

function App() {

  function handleSubmit(event){
    event.preventDefault(); //evita o reload padrao do form
  }

  return (
    <div className="container">
       <img src={logo} alt="Aircnc"/>

       <div className="content">
         <p>
           Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
         </p>
         <form onSubmit={handleSubmit}>
           <label htmlFor="email">E-mail *</label>
           <input 
            type="email" 
            id="email" 
            placeholder= "seu melhor e-mail"
          />

          <button className="btn_entrar" type="submit">Entrar</button>
         </form>
       </div>
    </div>
  );
}

export default App;
