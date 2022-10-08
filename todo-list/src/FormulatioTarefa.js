import Botao from "./Botao"

function FormularioTarefa ({onTarefaAdicionada, onTarefaRemovida, onNovaTarefa }) {

    function hello(e){
        return console.log(e.target.value);
    }

    return(
        <div>
            <input type='text' placeholder="Introduzir tarefa" onChange={onNovaTarefa}></input>
            <Botao titulo='Adicionar' onClickHandler={onTarefaAdicionada}></Botao>
            <Botao titulo='Remover' onClickHandler={onTarefaRemovida}></Botao>
        </div>
        
    )
}

export default FormularioTarefa