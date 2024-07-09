import React from 'react'

export default function Card({number}) {
    
  return (
    <div style={{height:"300px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <div style={{backgroundColor:"#ccc",width:"200px",height:"250px",borderRadius:"15px",border:"10px solid black"}}>
          < h1 style={{textAlign:"center",padding:'40px'}}>{number}</h1>
        </div>
    </div>
  )
}
