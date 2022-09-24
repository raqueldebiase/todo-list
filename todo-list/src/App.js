import './App.css';
import React, { useState } from 'react';
import FormularioTarefa from './FormulatioTarefa';



function Numero(){
  const [tarefas, setTarefas] = useState (['passar roupa', 'lavar louça', 'arrumar a cama'])

  return(
    <div className='App'>
    <FormularioTarefa onTarefaAdicionada={() => setTarefas([...tarefas, 'lavar roupa'])}></FormularioTarefa>
    </div>
  )

}

export default Numero;
