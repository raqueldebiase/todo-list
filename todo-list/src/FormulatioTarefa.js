import Botao from "./Botao"

function FormularioTarefa () {
    return(
        <div>
            <input type='text' placeholder="Introduzir tarefa"></input>
            <Botao titulo='Adicionar' onClickHandler={() => alert('Addicionada nova tarefa')}></Botao>
        </div>
        
    )
}

export default FormularioTarefa