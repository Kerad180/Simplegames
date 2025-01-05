
export const AsteroidsRules = () => {
    return(
        <div id="asteroidsRules"
        style={{display: isGameStart ? "none" : "block"}}>
        <p>Run away from asterodis!</p>
        <p>Press &larr; or &rarr;</p>
        <button id="asteroidsStartButton"
          style={{display: isGameStart ? "none" : "block"}}
          onClick={() => {setIsGameStart(true), setGameOver(false)}}>
          Start
        </button>
      </div>
    )
}