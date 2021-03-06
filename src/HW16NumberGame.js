import React, { useState } from "react";

const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};
let random = randomNumber();

export default function HW16NumberGame() {
  const [ans, setAns] = useState({
    bingo: 0,
    fail: 0,
  });

  const handleChange = ({ target }) => {
    const result = +target.value === random ? "bingo" : "fail";
    setAns({
      ...ans,
      [result]: ans[result] + 1,
    });
    random = randomNumber();
  };

  return (
    <div>
      <div data-testid='random'>
        隨機數字
        {random}
      </div>
      <input type="text" value="" onChange={handleChange} />
      <div data-testid='bingo'>答對: {ans.bingo}</div>
      <div data-testid='fail'>答錯: {ans.fail}</div>
    </div>
  );
}

// import React, { Component } from 'react';

// const getRandomNumber = () => {
//   return Math.floor(Math.random()*10);
// };

// export default class HW16NumberGame extends Component {
//   constructor(){
//     super();
//     this.state = {
//       random : getRandomNumber(),
//       bingoCount : 0,
//       failCount :0,
//       value :''
//     };
//   }
//   handleChange = ({target}) => {
//     const { random } = this.state;
//     const result = +target.value === random ? 'bingoCount': 'failCount';

//     this.setState({
//       random : getRandomNumber(),
//       [result]: this.state[result] + 1
//       // this.state.bingoCount or this.state.failCont
//     });
//   }

//   render() {
//     const {random,bingoCount,failCount,value} = this.state;
//     return (
//       <h1>
//         {random}<br />
//         <input
//           type="text"
//           value={value}
//           onChange={this.handleChange}
//         />
//         <div>答對: {bingoCount}</div>
//         <div>答錯: {failCount}</div>
//       </h1>
//     );
//   }
// }
