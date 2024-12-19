import './AsteroidsButton.css'

export const AsteroidsButton = ({changeSwitch}) => {


    return(
        <button id="asteroidsButton" onClick={() => changeSwitch(2)}><img src={'./src/components/pictures/spaceship.png'} ></img></button>
    )
}