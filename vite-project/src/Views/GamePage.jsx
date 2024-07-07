import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Components/Card'


export default function ({setPlayer,setComputer,SetPage,player,computer}) {

  
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







return (
  <div>
    <div>
      <h1>Computer</h1>
    </div>
    <div style={{height:"600px",display:'flex', flexDirection:'column',justifyContent:"space-between"}}>
    {/* {computer && computer.cardDeck */}
                 <Card number={computer.cardDeck[0]} />
                {/* : <></>}
    */}
   {player && player.cardDeck
                ? <Card number={player.cardDeck[0]} />
                : <></>}
    
    
    </div>
    <div style={{display:"flex", flexDirection:"row-reverse",justifyContent:'space-between'}}>
      <h1 style={{marginRight:"20px"}}>Player</h1>
      <button style={{width:"100px",height:"80px",marginTop:"30px",marginLeft:"20px"}} >next</button>
    </div>
  </div>
);

}