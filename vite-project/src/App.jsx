import { useState } from 'react';
import './App.css';
import HomePage from './Views/HomePage';
import GamePage from './Views/GamePage';
import ScorePage from './Views/ScorePage';


function App() {

 const pages ={
  home:0,
  game:1,
  score:2
 }
  
  const [page,setPage]=useState(pages.home)
  const [player,setPlayer]=useState({cardDeck:[]})
  const [computer,setComputer]=useState({cardDeck:[]})

  function viewPages(){
    if(page === pages.game ) return <GamePage setPlayer ={setPlayer} setComputer ={setComputer} setPage ={setPage} player={player} computer={computer}/>
    if(page === pages.score ) return <ScorePage/>
    else{
    return  <HomePage setPage={setPage} setPlayer={setPlayer}/>
    }
    
  
  }
   

  return (
   <div>
     {viewPages()}
   </div>
  )
}

export default App
