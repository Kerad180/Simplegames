import { HorseButton } from './HorseButton'
import './Maincontent.css'

export const Maincontent = ({changeSwitch}) => {


    return(
        <div id="mainContent">
            <HorseButton changeSwitch={changeSwitch}/>
        </div>
    )
    
}