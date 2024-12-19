import { HorseButton } from './HorseButton'
import { AsteroidsButton } from './AsteroidsButton'
import './Maincontent.css'

export const Maincontent = ({changeSwitch}) => {


    return(
        <div id="mainContent">
            <HorseButton changeSwitch={changeSwitch}/>
            <AsteroidsButton changeSwitch={changeSwitch}/>
        </div>
    )
    
}