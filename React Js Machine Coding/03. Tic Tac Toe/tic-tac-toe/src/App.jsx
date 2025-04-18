import { useState } from 'react'
import './App.css'
import TicTacToe from './components/TicTacToe'
import Player from './components/Player';

function App() {
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [displayBoard, setDisplayBoard] = useState(false);

  return (
    <>
      {!displayBoard && <Player playerX={playerX} setPlayerX={setPlayerX} playerO={playerO} setPlayerO={setPlayerO} setDisplayBoard={setDisplayBoard} />}
      {displayBoard && <TicTacToe playerX={playerX} playerO={playerO} />}
    </>
  )
}

export default App
