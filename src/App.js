
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../src/Core/Route/Routes';

function App() {

 
  return (
    <body>
    <div className="App">
      <Router>
      
      <Routes />
      </Router>
    </div>
    </body>
  );
}

export default App;
