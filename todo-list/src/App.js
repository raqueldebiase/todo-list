import logo from './logo.svg';
import './App.css';
import Botao from './Botao';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Botao></Botao>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raquel De biase
        </a>
      </header>
    </div>
  );
}

export default App;
