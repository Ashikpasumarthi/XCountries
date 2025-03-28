// import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';
import { StyledEngineProvider } from '@mui/material';
// import Countries from "./countries";
function App() {
  return (
    <div className="App" >
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      <StyledEngineProvider injectFirst>
        <Outlet />
      </StyledEngineProvider>
    </div >
  );
}

export default App;
