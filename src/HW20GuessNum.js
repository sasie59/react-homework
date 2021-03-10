import React, { useState,useRef } from "react";

const MIN = 1;
const MAX = 1000;
const makeRand = (min = MIN, max = MAX) => {
  return ~~(Math.random() * (max - min + 1)) + min;
};
const initialData = () => {
  return {
    min: MIN,
    max: MAX,
    isAppear : false,
    bingoNum: makeRand(MIN, MAX),
  };
};
export default function HW20GuessNum() {
  const guessDom = useRef();
  const [
    {min, max, isAppear, bingoNum},
    setState,
  ] = useState(initialData());

  const handleSubmit = (event) => {
    event.preventDefault();
    const guess = +guessDom.current.value;
    const filed = bingoNum > guess ? 'min' :
      bingoNum < guess ? 'max' : isAppear;
    setState(state => ({
      ...state,
      [filed]: guess
    }));
    guessDom.current.value = '';
  };

  const reBingoNum = () => {
    setState(initialData());
  };
  return (
    <div>
      <h1>
        現在範圍 :{min} ~ {max}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"     
          ref={guessDom}
          disabled={isAppear}
        />
        <button disabled={isAppear}>submit</button>
      </form>
      <div className={isAppear ? "see" : "hide"}>
        答對了!答案就是{bingoNum}
        <button onClick={reBingoNum}>重新一局</button>
      </div>
    </div>
  );
}

// import React, { Component } from "react";
// import './HW20GuessNum.scss';

// const MIN = 1;
// const MAX = 1000;

// export const makeRand = (min = MIN, max = MAX) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const resetData = () => {
//   return {
//     value: "",
//     minValue: MIN,
//     maxValue: MAX,
//     hideAndSee : false,
//     bingoNum: makeRand(MIN, MAX),
//   };
// };

// export default class HW20GuessNum extends Component {
//   constructor() {
//     super();
//     this.state = resetData();
//   }

//   handleChange = ({ target: { value } }) => {
//     this.setState({ value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { bingoNum } = this.state;
//     const value = +this.state.value;

//     let updateState = {
//       value: ''
//     };

//     if(bingoNum > value) {
//       updateState.minValue = value;
//     } else if (bingoNum < value) {
//       updateState.maxValue = value;
//     } else {
//       updateState.hideAndSee = true;
//     }

//     // 看一下 updateState是什麼
//     console.warn(updateState);
//     this.setState(updateState);
//   };

//   reBingoNum = () => {
//     this.setState(resetData());
//   }
//   // 按下重新一局時 minValue跟maxValue不會變成1跟1000?

//   render() {
//     return (
//       <div>
//         <h1>
//           現在範圍 :{this.state.minValue} ~ {this.state.maxValue}
//         </h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//             disabled={this.state.hideAndSee}
//           />
//           <button disabled={this.state.hideAndSee}>submit</button>
//         </form>
//         <div className={this.state.hideAndSee ? 'see' : 'hide'}>
//           答對了!答案就是{this.state.bingoNum}
//           <button onClick={this.reBingoNum}>
//             重新一局
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
