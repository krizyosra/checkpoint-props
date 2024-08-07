import React from 'react'
import data from "../player"
import Player from './Player'
function Playerslist() {

    const Style={"display": "flex"}
  return (
    <div style={Style}>

        {data.map((el) => <Player obj={el}/> )}
       
       
    </div>
  )
}

export default Playerslist
