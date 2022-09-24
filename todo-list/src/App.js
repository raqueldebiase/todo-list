import './App.css';
import Botao from './Botao';
import React, {  useState } from 'react';



function Numero(){
  const [tarefas, setTarefas] = useState (['passar roupa', 'lavar louça', 'arrumar a cama'])

  return(
    <div className='App'>
    <ul>
    {
      tarefas.map(
        (tarefa, key) => <li key={key}>{tarefa}</li>
      )
    }
    </ul>
    <Botao titulo='Adicionar tarefa' onClickHandler={() => setTarefas([...tarefas, 'dar banho no cachorro'])}></Botao>
    </div>
  )

}

export default Numero;
