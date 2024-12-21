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
    height: 100px;
    width: 100px;
    position: absolute;
    top: auto;
    bottom: 10px;
    left: ${({x}) => x + 'px'};
    border-radius: 5px;
    transition: 0.5s;
  `;

    const Meteor = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    top: ${({y}) => (y + 'px')};
    left: ${({x}) => x + 'px'};
    border-radius: 5px;
    transition: 0.5s;
    `;


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && playerX > 0) setPlayerX(playerX - 30);
      if (e.key === 'ArrowRight' && playerX < 600) setPlayerX(playerX + 30);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerX]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (gameOver) return;

      setOpponents((prevOpponents) =>
        prevOpponents
          .map((opponent) => ({ ...opponent, y: opponent.y + opponent.speed }))
          .filter((opponent) => opponent.y < 800)
      );

      setOpponents((prevOpponents) => {
        const newOpponent = {
          x: Math.random() * 600,
          y: -100,
          speed: Math.random() * 5 + 4 + score / 50,
        };

        return prevOpponents.length < 4 ? [...prevOpponents, newOpponent] : prevOpponents;
      });

      setScore((prevScore) => prevScore + 1);
      
      setOpponents((prevOpponents) => {
        for (let opponent of prevOpponents) {
          if (
            opponent.y + 100 >= 600 &&
            opponent.x < playerX + 75 &&
            opponent.x + 75 > playerX
          ) {
            setGameOver(true);
            alert(`Game Over! Score: ${score}`);
            clearInterval(interval);
          }
        }

        return prevOpponents;
      });

    },70)

    return () => clearInterval(interval);
  })




    return (
        <>
            <div id='gameContainer'>
                <div id='score'>Score: {score}</div>
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