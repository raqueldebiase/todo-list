import './App.scss';
import React, { useState } from 'react';
import FormularioTarefa from './FormulatioTarefa';



function App(){
  const [tarefas, setTarefas] = useState (['passar roupa', 'lavar louça', 'arrumar a cama'])

  function removerTarefa(){
    let tarefasTemp = [...tarefas]
    tarefasTemp.pop()
    setTarefas(tarefasTemp)

  }

  return(
    <div className='App'>
    <FormularioTarefa 
      onTarefaAdicionada={() => setTarefas([...tarefas, 'teste'])}
      onTarefaRemovida={() => removerTarefa()}></FormularioTarefa>
      <ul>
        {
          tarefas.map(
            (tarefa, key) => <li key={key}>{tarefa}</li>
          )
        }
      </ul>
    </div>
  );

}

export default App;
