import React, { Component } from 'react';
import PokemonInfo from './PokemonInfo';

export default class Pokemon extends Component {
  constructor(){
    super();
    this.state = {
      pokemonList :[],
      value : ''
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')                         
      .then((res) => res.json())        
      .then((json) => 
      this.setState({ 
        pokemonList :json.results })
      ); 
  }

  handleChange = ({target}) => {
    this.setState({
      value : target.value
    })
  }
  
  render() {
    const {pokemonList, value} = this.state;
    let filterList = [];
    filterList = pokemonList.filter(list =>
      list.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    return (
    <div>
      <h2>順利抓取 100 隻寶可夢的名字與圖片</h2>
      <h2>可以依名字篩選出寶可夢</h2>
      <span><b>keyword</b></span>
      <input type="text"
        placeholder="name..."
        keyword={value}
        onChange={this.handleChange}
      />
      {filterList.map((poke) =>
          <PokemonInfo 
            key={poke.name}
            name={poke.name}
            url={poke.url}
          />
      )}
      </div>
    )
  }
}
