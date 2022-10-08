import './App.scss';
import React, { useState } from 'react';
import FormularioTarefa from './FormulatioTarefa';



function App(){
  const [novaTarefa, setNovaTarefa] = useState('teste 2')
  const [tarefas, setTarefas] = useState (['passar roupa', 'lavar louça', 'arrumar a cama'])

  function removerTarefa(){
    let tarefasTemp = [...tarefas]
    tarefasTemp.pop()
    setTarefas(tarefasTemp)

  }

  return(
    <div className='App'>
    <FormularioTarefa 
      onNovaTarefa={(e) => setNovaTarefa(e.target.value)}
      onTarefaAdicionada={() => setTarefas([...tarefas, novaTarefa])}
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
