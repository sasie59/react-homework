import React from 'react'

export default function PokemonInfo(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.id}</span>
    </div>
  )
}
