import React, { useState, useEffect } from "react";

export default function HW17RandomNum() {
  const [ num, setNum ] = useState('');
  
  const numChange = () => {
    setNum(Math.floor(Math.random()* 9 + 1));
  };

  useEffect(() => {
    setInterval(() => {
      numChange();
    }, Math.floor(Math.random() * 501) + 500);
  }, []);
  

  return (
    <div>
      <h1>請設定一個會隨機變化的數字(1~9)</h1>
      <h2>每次變的時間介於 500ms ~ 1000ms 之間</h2>
      <h1>{num}</h1>
    </div>
  );
}

// import React, { Component } from 'react';

// export default class HW17RandomNum extends Component {
//   constructor(){
//     super();
//     this.state = {
//       num : ''
//     };
//   }
//   numChange = () => {
//     this.setState({
//       num : Math.floor(Math.random()*9+1),
//     });
//   }
//   componentDidMount() {
//     setInterval(this.numChange, Math.floor(Math.random() * 501) + 500)
//   }

//   render() {
//     const {num} = this.state;
//     return (
//       <div>
//         <h1>請設定一個會隨機變化的數字(1~9)</h1>
//         <h2>每次變的時間介於 500ms ~ 1000ms 之間</h2>
//         <h1>{num}</h1>
//       </div>
//     );
//   }
// }
