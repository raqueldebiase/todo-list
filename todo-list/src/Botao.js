function Botao ({estilo, titulo, onClickHandler}){

    return (
        <button 
            style={estilo} 
            onClick={onClickHandler}>
            {titulo}
        </button>
    );
}

export default Botao;