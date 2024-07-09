import React, { useContext, useEffect } from 'react';
import { playerContext } from '../context/playerContext';
import { computerContext } from '../context/computerContext';
import { Link, useNavigate } from 'react-router-dom';

const GameComponent = () => {
  const { player, setPlayer } = useContext(playerContext);
  const { computer } = useContext(computerContext);
  const navigate = useNavigate();

  useEffect(() => {
    decideWinner();
  }, []);

  const decideWinner = () => {
    let win = player.win ? player.win : 0;
    let loss = player.loss ? player.loss : 0;

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
  useEffect(() => {
    if (!player.name) {
      navigate("/");
    }
  }, []);


  useEffect(() => {
    console.log(player);
  }, [player]);

 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10%', height: '200px' }}>
      <h1 style={{ color: 'red' }}>War is over!</h1>
      <h2>{player.win} wins / {player.loss ? player.loss : 0} losses</h2>
      <Link style={{ color: 'red' }} to="/game">play again</Link>
    </div>
  );
};

export default GameComponent;