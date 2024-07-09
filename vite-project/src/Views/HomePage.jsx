import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { playerContext } from '../context/playerContext'

export default function () {
  const {setPlayer} = useContext(playerContext)
  const navigate = useNavigate()
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
       navigate("/game")
  }
  return ( 
  <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:"25%", height:"300px"}}>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
     <h1 style={{color:"red"}}> ready for war!</h1>
     <input onChange={(e)=>{setName(e.target.value)}} placeholder='enter your name' type="text" />
     <button style={{marginTop:"10px"}} onClick={startGame}>start game</button>
    </div>
  </div>
  )
}