import react from 'react'
import Game from '../components/game'
const Home = () => {
  return (
    <div className='home'>
      <div className="game-window">
        <Game />
      </div>
    </div>
  )
}

export default Home