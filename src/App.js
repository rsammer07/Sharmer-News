import { Link, Route, Navigate, Routes } from 'react-router';
import './App.css';
import logo from "./logo2.png"
import masthead from "./masthead.png"

function App() {

  let routes = (
    <Routes>
      
    </Routes>
  )

  return (
    <div className="App">
      <header className="App-header">
        <div><img id='headerLogo' src={logo} alt="logo"/></div>
        <div><img id='masthead' src={masthead} alt="masthead"/></div>
      </header>
      <body>
        <nav>
          {/* {routes} */}
          <p>Home</p>
          <p>Politics</p>
          <p>Sports</p>
        </nav>
        <main>
          <h2>Main display</h2>
        </main>
      </body>
    </div>
  );
}

export default App;
