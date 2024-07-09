import React, { useContext, useEffect, useState } from 'react';
import { playerContext } from '../context/playerContext';
import { computerContext } from '../context/computerContext';
import { Link } from 'react-router-dom';
export default function GameComponent() {
  const { player,setPlayer } = useContext(playerContext);
  const computer = useContext(computerContext);

  
  useEffect(()=>{
console.log(player)
  },[player])

  function decideWinner() {
    let win = player.win?player.win:0
    let loss = player.loss?player.loss:0
    if (player.playerCounter > computer.computerCounter) {
      win++
    } else {
      loss++
    }
    setPlayer( ({
      ...player,
      win: win,
      loss: loss
    }));
  }

  useEffect(()=>{
    decideWinner()
  },[])
    


  return (
    <> 
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '25%', height: '300px' }}>
      <h1 style={{ color: 'red' }}>War is over!</h1>
      <h2>{player.win} wins / {player.loss} losses</h2>
      <Link to={"/game"}>play again</Link>
    </div>
    </>
  );
}
