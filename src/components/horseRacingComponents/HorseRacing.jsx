import { useEffect, useState } from "react";
import horse from "./horseClass.jsx";
import { Horse } from "./Horse.jsx";
import { ReturnButton } from "../ReturnButton.jsx"
import { Signature } from "../Signature.jsx";
import './HorseRacing.css';



export const HorseRacing = ({changeSwitch}) => {
    const [isStarted, setIsStarted] = useState(false);
    const [results, setResults] = useState([])


    const horses = [
        new horse(1, 'Black', 'src/components/horseRacingComponents/pictures/black-horse.png'),
        new horse(2, 'Brown', 'src/components/horseRacingComponents/pictures/brown-horse.png'),
        new horse(3, 'Red', 'src/components/horseRacingComponents/pictures/red-horse.png')
    ]

   
    useEffect(() => {
        const interval = setInterval(() => {
            if(results.length < 3 && isStarted) {
                for(let i = 0; i < horses.length; i++) {
                    if(document.getElementById(horses[i].name).firstChild.attributes[2].nodeValue === 'true'){ 
                        if(!results.includes(horses[i].name)) {
                            setResults([...results, horses[i].name])
                        }
                    }
                } 
            }
        },1000)

        return() => clearInterval(interval)
    })

    const setGame = () => {
        setIsStarted(false)
        setResults([]) 
    }
    
    return (            
        <>
            <div id='tracks'>
                {horses.map((horse) => (<Horse key={horse.id} name={horse.name} urlPicture={horse.urlPicture} isStarted = {isStarted}/>))}
            </div>

            <div id="results">
                <ul>
                {results.map((result, i) => (<li key={i}>{(results.indexOf(result)+1)+". "+result}</li>))}
                </ul>       
            </div>

            <section id='containerButtons'>
                <button id='startButton' onClick={() => setIsStarted(true)}>Start</button>
                <button id='resetButton' onClick={() => setGame()}>Reset</button>
            </section>

            <aside>
                <ReturnButton changeSwitch={changeSwitch}/>
            </aside>

            <Signature/>
        </>
    );
}