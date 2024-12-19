import './HorseButton.css'

export const HorseButton = ({changeSwitch}) => {


    return(
        <button id="horseButton" onClick={() => changeSwitch(1)}><img src={'./src/components/pictures/black-horse.png'} ></img></button>
    )
}