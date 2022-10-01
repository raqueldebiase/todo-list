import Botao from "./Botao"

function FormularioTarefa ({onTarefaAdicionada, onTarefaRemovida}) {
    return(
        <div>
            <input type='text' placeholder="Introduzir tarefa"></input>
            <Botao titulo='Adicionar' onClickHandler={onTarefaAdicionada}></Botao>
            <Botao titulo='Remover' onClickHandler={onTarefaRemovida}></Botao>
        </div>
        
    )
}

export default FormularioTarefa