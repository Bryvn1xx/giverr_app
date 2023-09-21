import './App.css';
import Community from "./pages/Community"
import Ranking from "./pages/Ranking"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Game from './components/game'
import Nav from './components/nav'


const App = () => {
  return (

    <div className='app'>
      {/* <div className="giverr-title-div">
        <h3 className="giverr-title">Giverr</h3>
      </div> */}



      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/games" />
        <Route path="/community" element={<Community />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>

    </div >


  )
}

export default App;
