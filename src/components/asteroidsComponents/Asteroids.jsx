import { ReturnButton } from "../ReturnButton"
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './Asteroids.css'

export const Asteroids = ({changeSwitch}) => {
    const [playerX, setPlayerX] = useState(300);
    const [opponents, setOpponents] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const Ship = styled.img`
    height: 128px;
    width: 128px;
    position: absolute;
    top: auto;
    bottom: 10px;
    left: ${({x}) => x + 'px'};
    border-radius: 5px;
    transition: 1s;
  `;

    const Meteor = styled.img`
    height: 128px;
    width: 128px;
    position: absolute;
    top: auto;
    bottom: 10px;
    left: ${({x}) => x + 'px'};
    border-radius: 5px;
    transition: 1s;
    `;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && playerX > 0) setPlayerX(playerX - 30);
      if (e.key === 'ArrowRight' && playerX < 560) setPlayerX(playerX + 30);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerX]);


    return (
        <>
            <div id='gameContainer'>
                <div id='score'>Score</div>
                <Ship src='./src/components/asteroidsComponents/spaceship.png' alt='Player ship' x={playerX}></Ship>
                {opponents.map((opponent, index) => (
                    <Meteor key={index} src='./src/components/asteroidsComponents/meteor.png'
                        x={opponent.x} y={opponent.y}/>
                ))}
            </div>
        
            <ReturnButton changeSwitch={changeSwitch}/>
        </>
    )
}