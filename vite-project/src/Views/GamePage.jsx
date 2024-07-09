import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'
import ScorePage from './ScorePage'
import { useNavigate } from 'react-router-dom'
import { playerContext } from '../context/playerContext'
import { computerContext } from '../context/computerContext'


export default function () {
  
const {player,setPlayer} = useContext(playerContext)
const {computer,setComputer} =useContext(computerContext)
  const navigate = useNavigate()
  function cardDeck(){
    let deck = []
     for(let i = 1;i<=13;i++){
      deck.push(i,i,i,i)
     }
     return deck
  
  }

  const [deck,setDeck]=useState(()=>{
   return cardDeck()
  })

  const [playerCounter,setPlayerCounter] =useState(0)
  const [computerCounter,setComputerCounter] =useState(0)

  function randomizeCards(root) {
    const shuffledRoot = root.sort(() => Math.random() - 0.5);
    const halfway = Math.floor(shuffledRoot.length / 2);
    setPlayer({
        ...player,
        cardDeck: [...shuffledRoot.slice(0, halfway)]
        
    })
    
    setComputer({
        cardDeck: [...shuffledRoot.slice(halfway)]
    })
    
    
}
 
  useEffect(()=>{
    randomizeCards(deck)
}, [])


function nextCard() {
  const newPlayerDeck = [...player.cardDeck];
  const newComputerDeck = [...computer.cardDeck];

   const playerCard=newPlayerDeck.pop();
   const computerCard=newComputerDeck.pop();
  if (playerCard > computerCard) {
     setPlayerCounter(playerCounter + 1);
  } else if (computerCard > playerCard) {
     setComputerCounter(computerCounter +1) 
  } 
  
  setPlayer({ ...player, cardDeck: newPlayerDeck,playerCounter});
  setComputer({ ...computer, cardDeck: newComputerDeck,computerCounter });

    if (player.cardDeck.length === 1 || computer.cardDeck.length === 1) {
      navigate("/score")
}}




  useEffect(()=>{
    console.log(player)
  },[player])




return (
  <div>
    <div  style={{width :"400px",height:"100px" , display:"flex",justifyContent:"center",alignItems:"end"}}>
      <h1>Computer: {computerCounter}</h1>
    </div>
    <div style={{marginTop:"5px",height:"600px",display:'flex', flexDirection:'column',justifyContent:"space-around"}}>
       {computer.cardDeck ? <Card number=  {computer.cardDeck[computer.cardDeck.length - 1]} />: <></>}
   
       {player.cardDeck ? <Card number={player.cardDeck[player.cardDeck.length-1]} />: <></>}
    
    
    </div>
    <div style={{display:"flex", flexDirection:"row-reverse",justifyContent:'space-between'}}>
      <h1 style={{marginRight:"20px"}}>Player: {playerCounter}</h1>
      <button onClick={nextCard} style={{width:"100px",height:"80px",marginTop:"20px",marginLeft:"20px"}} >next</button>
    </div>
  </div>
);

}