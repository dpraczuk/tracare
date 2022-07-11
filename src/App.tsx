import { Link} from 'react-router-dom';
import './App.css';
import logo from '../src/assets/Tracare-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <Link to={'/Main'}>Tracare website.</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
