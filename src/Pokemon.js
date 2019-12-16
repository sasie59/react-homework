import React, { Component } from 'react';
import PokemonInfo from './PokemonInfo'

export default class Pokemon extends Component {
  constructor(){
    super();
    this.state = {
      pokemonList :[],
      value : ''
    }
  }

  handleChange = ({target}) => {
    this.setState({
      value : target.value
    })
  }
  
  render() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
    .then(function(res) {
      return res.json()
    })
    .then(function(json) {
      console.warn(json);
    })
    return (
      <div>
        <h2>順利抓取 100 隻寶可夢的名字與圖片</h2>
        <h2>可以依名字篩選出寶可夢</h2>
        <span>keyword</span>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        {this.state.pokemonList.map(poke =>{
          return <PokemonInfo 
            name={poke.name}
            id={poke.index + 1}
          />
        })}
        
      </div>
    )
  }
}
