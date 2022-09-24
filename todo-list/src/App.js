import logo from './logo.svg';
import './App.css';
import Botao from './Botao';
import { renderMatches } from 'react-router-dom';
import React from 'react';



class Numero extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  render (){
    return (
      <div className="App">
      <p>Clicou {this.state.count} vezes</p>
      <Botao titulo="+" onClickHandler={() => this.setState({count: this.state.count+1})}></Botao>
      </div>
    );
  }
}

export default Numero;
