import React, {useState} from 'react';
import api from './services/api';
import './App.css';

import logo from "./assets/logo.svg";

function App() {

  const [email, setEmail] = useState('');

  function handleSubmit(event){
    event.preventDefault(); //evita o reload padrao do form

    console.log(email);
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
            onChange={event =>setEmail(event.target.value)}
          />

          <button className="btn_entrar" type="submit">Entrar</button>
         </form>
       </div>
    </div>
  );
}

export default App;
