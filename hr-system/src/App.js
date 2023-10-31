import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <button className="btn btn-primary">Botão de Bootstrap</button>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Exemplo de Rótulo</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Exemplo de entrada" />
        </div>
      </form>
    </div>
  );
}

export default App;
