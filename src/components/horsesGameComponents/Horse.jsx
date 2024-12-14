import { useEffect, useReducer, useState, Component, useRef, useCallback } from 'react';
import './Horse.css'
import { RaceTracks } from './Game';




export const Horse = ({name, urlPicture, isStarted}) => {

    const[move, setMove] = useState(10);
    const[isFirstMove, setIsFirstMove] = useState(true)
    const[number, setNumber] = useState(Math.floor(Math.random() * 100))
    const[isFinish, setIsFinish] = useState(false)  

   

    useEffect(() => {  
        if(isStarted) {      
            if(isFirstMove && move <= 750) {
                setNumber(Math.floor(Math.random() * 100))  
                setMove(move + number)
                setIsFirstMove(false)

            } else {   
                const interval = setInterval(() => {
                    if(move <= 750) {
                        setNumber(Math.floor(Math.random() * 100))  
                        setMove(move + number)
                        
                    } else {
                        setNumber(0)  
                        setMove(850)
                        setIsFirstMove(true)
                        setTimeout(() => {setIsFinish(true)}, 500)
                    }
                }, 1000)

                return() => clearInterval(interval)
            }

        }

    },[move, isStarted, number, isFirstMove])

    useEffect(() => {
        if(!isStarted) {
            setMove(10)
            setIsFirstMove(true)
            setIsFinish(false)
        }
    })

    return(
                <div className='horse' id={name}>
                    <img src={urlPicture} style={{marginLeft: `${move}px`}} data-isFinish={`${isFinish}`} />
                </div>
    )
};