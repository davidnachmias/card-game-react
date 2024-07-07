import React from 'react'
import { useState } from 'react'

export default function ({setPage,setPlayer}) {
  const [name,setName]=useState("")

  function createPlayer(){
    return {
        name:name
    }
  }
  function  validName(){
    console.log(name)
    if(name==""){
      return false
        
    } else{
        return true
    }
    
  }

  function startGame(){
    const nameIsValid = validName()
    if(!nameIsValid){
        return alert("need name to start")
    }
       const player = createPlayer()
       setPlayer(player)
       setPage(1)
  }
  return ( 
    <div>
    <h1> ready for war!</h1>
    <input onChange={(e)=>{setName(e.target.value)}} placeholder='enter your name' type="text" />
    <button onClick={startGame}>start game</button>
    </div>
  )
}