import { useState } from 'react'
import { Maincontent } from './components/Maincontent'
import { RaceTracks } from './components/horsesGameComponents/Game.jsx'
import './App.css'

function App() {
  const [switchGame, setSwitchGame] = useState(1)

  const changeSwitch = (gameNumber) => {
    setSwitchGame(gameNumber)
  }


  switch(switchGame) {
    case 0: return (<Maincontent changeSwitch={changeSwitch}/>); break;
    case 1: return (<RaceTracks changeSwitch={changeSwitch}/>); break;
  }
}

export default App
