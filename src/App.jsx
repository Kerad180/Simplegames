import { useState } from 'react'
import { Maincontent } from './components/Maincontent'
import { HorseRacing } from './components/horseRacingComponents/HorseRacing'
import './App.css'

function App() {
  const [switchGame, setSwitchGame] = useState(0)

  const changeSwitch = (gameNumber) => {
    setSwitchGame(gameNumber)
  }


  switch(switchGame) {
    case 0: return (<Maincontent changeSwitch={changeSwitch}/>); break;
    case 1: return (<HorseRacing changeSwitch={changeSwitch}/>); break;
  }
}

export default App
