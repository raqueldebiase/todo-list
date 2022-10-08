import {Button} from './styles';

function Botao ({estilo, titulo, onClickHandler}){

    return (
        <Button 
            
            onClick={onClickHandler}>
            {titulo}
        </Button>
    );
}

export default Botao;