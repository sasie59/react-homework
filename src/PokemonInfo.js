import React from 'react'

export default function PokemonInfo(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.id}</span>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
      {/* 先test圖片能否掛上去 先寫死的 */}
    </div>
  )
}
