import React, { Component } from 'react';
import PokemonInfo from './PokemonInfo';

const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

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
      {filterList.map(poke =>{
        return (
          <React.Fragment key={poke.name}>
            <PokemonInfo 
              name={poke.name}
              key={poke.url}
              id={poke.index}
            />
            {/* 我要強調一下， slice(-2, -1) 這個方法不太好，你看一下你的圖片就知道了 */}
            <img
              src={`${imgURL}${poke.url.slice(-2, -1)}.png`}
              key={value.index}
              />
          </React.Fragment>
        )})}
      </div>
    )
  }
}
