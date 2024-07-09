import React, { useContext, useEffect } from 'react';
import { playerContext } from '../context/playerContext';
import { computerContext } from '../context/computerContext';
import { Link } from 'react-router-dom';

const GameComponent = () => {

 
  const { player, setPlayer } = useContext(playerContext);
  const { computer } = useContext(computerContext);
  const decideWinner = () => {
    let win = player.win?player.win: 0;
    let loss = player.loss?player.loss: 0;

    if (player.playerCounter > computer.computerCounter) {
      win++;
    } else {
      loss++;
    }

    setPlayer({
      ...player,
      win: win,
      loss: loss
    });
  };

  // useEffect to log player changes
  useEffect(() => {
    console.log(player);
  }, [player]);

  useEffect(() => {
    decideWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10%', height: '200px' }}>
      <h1 style={{ color: 'red' }}>War is over!</h1>
      <h2>{player.win} wins / {player.loss?player.loss:0} losses</h2>
      <Link style={{ color: 'red' }} to="/game">play again</Link>
    </div>
  );
};

export default GameComponent;
