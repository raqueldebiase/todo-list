import './App.css';
import Botao from './Botao';
import React, { useState } from 'react';



function Numero(){
  const [count, setCount] = useState (0)

  return(
    <div className='App'>
    <p>Clicou {count} vezes</p>
    <Botao titulo='Incrementar' onClickHandler={() => setCount (count+1)}></Botao>
    </div>
  )

}

export default Numero;
