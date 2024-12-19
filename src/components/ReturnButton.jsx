import "./ReturnButton.css"

export const ReturnButton = ({changeSwitch}) => {
    return(
        <button id="returnButton" onClick={() => changeSwitch(0)}>Return</button>
    )
}