import {useContext, useState } from 'react';
import './App.css'
import HomePage from './Views/HomePage';
import GamePage from './Views/GamePage';
import ScorePage from './Views/ScorePage';
import { Routes,Route } from 'react-router-dom';
import { playerContext } from './context/playerContext';
import {computerContext} from "./context/computerContext"


function App() {
  const [player,setPlayer]=useState({})
  const [computer,setComputer]=useState({})

  return (
    <computerContext.Provider value={{computer,setComputer}}>
    <playerContext.Provider value={{player,setPlayer}}>
   <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/game" element={<GamePage/>}/>
     <Route path="/score" element={<ScorePage/>}/>
   </Routes>
   </playerContext.Provider>
   </computerContext.Provider>
  )
}

export default App
