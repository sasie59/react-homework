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

  // componentDidMount() {
  //   const data =
  //   fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
  //   .then(function(res) {
  //     return res.json()
  //   })
  //   .then(function(json) {
  //     this.setState({
  //       pokemonList : data
  //     })
  //   })
  // }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')                         
      .then((res) => res.json())        
      .then((json) => 
      this.setState({ pokemonList :json.results })); 
  }
//   要sst存在只執行一次的地方 我想到的是cdm 但上面的寫法 我是參考網路上的寫的 但跟第七題的寫法有點不一樣
//   fetch('https://randomuser.me/api/?results=25')
//  .then(function(res) {
//    return res.json()
//  })
//  .then((json) => {
//    this.setState({
//      personList: json.results
//    });
//  });
  

  handleChange = ({target}) => {
    this.setState({
      value : target.value
    })
  }
  
  render() {
    const {pokemonList, value} = this.state;
    console.warn(pokemonList);
    // 這樣算有抓成功了吧?
    let filterList = pokemonList.filter(list =>
      list.name.toLowerCase().indexOf(value.toLowerCase()) > 1
    );
    
    
      /**
       * 你仔細悔亞下你的 json.results 有什麼資料
       * 它應該有很多像是：
       * {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
       * {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"}
       * 這樣的資料，它會回傳名字 跟該 pokemon 的資訊url
       * 然後這個url最後的數字代表它的 id
       * 而你可以用  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/[id].png
       * 來取得該寶可夢的圖片
       * 如果你不知道怎麼取圖片，那你可以退一步先做篩選名字就好。
       */
    return (
      <div>
        <h2>順利抓取 100 隻寶可夢的名字與圖片</h2>
        <h2>可以依名字篩選出寶可夢</h2>
        <span>keyword</span>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <PokemonInfo list={filterList} />
        {/* {this.state.pokemonList.map(poke =>{
          return <PokemonInfo 
            name={poke.name}
            id={poke.index + 1}
          />
        })} */}
        
      </div>
    )
  }
}
