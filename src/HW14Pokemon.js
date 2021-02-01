import React, { useState, useEffect,useRef } from 'react';
const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default function HW14Pokemon() {
  const inputDom = useRef();
  const [list, setList] = useState([]);

  const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
      .then(res => res.json())
      .then(({ results: list }) => {
        setList(list);
      });
  };

  useEffect(()=> {
    fetchData();
  },[]);

  return (
    <div>
      <h2>順利抓取 100 隻寶可夢的名字與圖片</h2>
      <h2>可以依名字篩選出寶可夢</h2>
      <span>
        <b>keyword</b>
      </span>
      <input
        type="text"
        ref={inputDom}
        placeholder="name..."
      />
      {list.filter(item => item.name.toLowerCase().indexOf(inputDom.current.value.toLowerCase()) > -1)
        .map(item =>
          <div key={item.name}>
            <img src={`${imgURL}${item.url.slice(34, -1)}.png`} alt=""/>
            <span>{item.name}</span>
          </div>
        )}
    </div>
  );
}

// import React, { Component } from "react";
// const imgURL =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// export default class HW14Pokemon extends Component {
//   constructor() {
//     super();
//     this.state = {
//       pokemonList: [],
//       value: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
//       .then((res) => res.json())
//       .then((json) =>
//         this.setState({
//           pokemonList: json.results,
//         })
//       );
//   }

//   handleChange = ({ target }) => {
//     this.setState({
//       value: target.value,
//     });
//   };

//   render() {
//     const { pokemonList, value } = this.state;
//     let filterList = [];
//     filterList = pokemonList.filter(
//       (list) => list.name.toLowerCase().indexOf(value.toLowerCase()) > -1
//     );
//     return (
//       <div>
//         <h2>順利抓取 100 隻寶可夢的名字與圖片</h2>
//         <h2>可以依名字篩選出寶可夢</h2>
//         <span>
//           <b>keyword</b>
//         </span>
//         <input
//           type="text"
//           placeholder="name..."
//           keyword={value}
//           onChange={this.handleChange}
//         />
//         {filterList.map((item) => (
//           <div key={item.name}>
//             <img src={`${imgURL}${item.url.slice(34, -1)}.png`} alt="" />
//             <span>{item.name}</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
