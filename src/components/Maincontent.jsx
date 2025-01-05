import { HorseButton } from './HorseButton'
import { AsteroidsButton } from './AsteroidsButton'
import { Signature } from './Signature'
import './Maincontent.css'
import { useEffect } from 'react'

export const Maincontent = ({changeSwitch}) => {

    useEffect(() => {
        if(window.innerWidth <= 1000) {
            alert("The platform provides games for playing on a computer, so I suggest to play on computer monitor")
        }
    },[])

    return(
        <div id="mainContent">
            <HorseButton changeSwitch={changeSwitch}/>
            <AsteroidsButton changeSwitch={changeSwitch}/>
            <Signature/>
        </div>
    )
    
}