import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Game from './components/game'
import Nav from './components/nav'


function App() {
  return (
    <Router>
      <div className='app'>
        <div className="app__games">
          <Game />
          <Game />
        </div>






        <Nav />

      </div>
    </Router>
  );
}

export default App;
