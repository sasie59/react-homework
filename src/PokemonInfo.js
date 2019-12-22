import React from 'react';

const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function PokemonInfo(props) {
  const ID = props.url.slice(34,-1);
  return (
    <div>
      <span>{props.name}</span>
      <img src={`${imgURL}${ID}.png`} alt=""/>
    </div>
  )
}