import { HorseButton } from './HorseButton'
import { AsteroidsButton } from './AsteroidsButton'
import { Signature } from './Signature'
import './Maincontent.css'

export const Maincontent = ({changeSwitch}) => {


    return(
        <div id="mainContent">
            <HorseButton changeSwitch={changeSwitch}/>
            <AsteroidsButton changeSwitch={changeSwitch}/>
            <Signature/>
        </div>
    )
    
}