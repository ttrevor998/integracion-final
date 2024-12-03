import logo from './logo.svg';
import './App.css';
//import SentryPrueba from './components/sentryPrueba';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto integracion continua con Jenkins
        </a>
      </header>
     {/* <SentryPrueba />*/}
    </div>
  );
}

export default App;
