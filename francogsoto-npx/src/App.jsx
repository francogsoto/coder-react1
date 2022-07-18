import logo from './logo.svg';
import './App.css';
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons"
import NavBar from './components/NavBar/NavBar';
import Cartwidget from './components/NavBar/Cartwidget/Cartwidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer saludo="Bienvenido a Ecommerce" /> 
      <header className="App-header">
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
          Aprendiendo React
        </a>
        
      </header>
      
    </div>
  );
}

export default App;
