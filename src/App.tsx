import logo from '../src/assets/Tracare-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
            <Link to={'/home'}>Home</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/workouts'}>Workouts</Link>
            <Link to={'/settings'}>Settings</Link>
            <Link to={'/account'}>Account</Link>
        </p> */}
      </header>
    </div>
  );
}

export default App;
