import React, { useState, useRef } from "react";
import "./HW20GuessNum.scss";

export const makeRandom = () => {
  let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  arr.sort(() => Math.random() - 0.5);
  arr = arr.slice(0, 4);
  return arr;
};

// let randomFour = makeRandom();

const checkAB = (userInput, answer) => {
  let aCount = 0;
  let bCount = 0;
  for (let i = 0; i < 4; i++) {
    if (userInput[i] === answer[i]) aCount += 1;
    else if (
      userInput[i] === answer[0] ||
      userInput[i] === answer[1] ||
      userInput[i] === answer[2] ||
      userInput[i] === answer[3]
    )
      bCount += 1;
  }
  return aCount + "A" + bCount + "B";
};

const isErrorValue = (value) => {
  return [...new Set(value)].length < 4;
};


export default function HW21XAXB() {
  const [randomFour, setRandomFour] = useState(makeRandom());
  const [xaXb, setXaXb] = useState({
    list: [],
    isError: false,
    isAppear: false,
  });
  const guessDom = useRef();
  
    
  const handleSubmit = (event) => {
    // console.warn(randomFour);
    // console.warn(guessDom.current.value);
    const value = guessDom.current.value;
    event.preventDefault();
    if (value.length !== 4 || isErrorValue(value.split("").sort())) {
      return setXaXb({
        ...xaXb,
        isError: true,
      });
    }
    
    const nAnB = checkAB(value, randomFour);
    setXaXb({
      ...xaXb,
      isError: false,
      list: [`${value}: ${nAnB}`, ...xaXb.list],
    });
    guessDom.current.value = '';
    if (nAnB === "4A0B")
      setXaXb({
        list: [],
        isAppear: true,
      });
  };

  const replay = () => {
    setRandomFour(makeRandom());
    setXaXb({
      list: [],
      isAppear: false,
      // bingoNum: makeRandom(),
    });
  };
  return (
    <div>
      <h1>猜數字</h1>
      <ul>
        <li>一進到遊戲電腦隨機產生4位不重複數字</li>
        <li>使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</li>
        <li>送出的答案跟正確答案比較，位置一樣則A，位置不同則B</li>
        <li>會累積過去猜過的答案與結果</li>
        <li>如果猜到 4A 則遊戲結束，並可以另開新局。</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
          data-testid='input'
          type="text" 
          ref={guessDom}
          disabled={xaXb.isAppear} />
        <button disabled={xaXb.isAppear}>猜!</button>
      </form>
      {xaXb.isError && <div data-testid="errMsg">格式錯誤</div>}
      <div data-testid='bingo' className={xaXb.isAppear ? "see" : "hide"}>
        bingo ! game over ， replay?
        <button data-testid='replay' onClick={replay}>Yes</button>
      </div>
      <ul data-testid='ul'>
        {xaXb.list.map((item,index) => 
          <li
            data-testid={`result-${index}`}
            key={index}
          >
            {item}
          </li>
        )}
      </ul>
    </div>
  );
}

// import React, { Component } from "react";
// import './HW20GuessNum.scss';

// const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// arr.sort(() => Math.random() - 0.5);
// const randomFour = arr.slice(0, 4);

// const checkAB = (userInput, answer) => {
//   let aCount = 0;
//   let bCount = 0;
//   for (let i = 0; i < 4; i++) {
//     if (userInput[i] === answer[i]) aCount += 1;
//     else if (
//       userInput[i] === answer[0] ||
//       userInput[i] === answer[1] ||
//       userInput[i] === answer[2] ||
//       userInput[i] === answer[3]
//     )
//       bCount += 1;
//   }
//   return aCount + "A" + bCount + "B";
// };

// const valueCheck = value => {
//   for (let i = 0; i < 4; i++) {
//     if (value[i] === value[i + 1]) {
//       return true;
//     }
//   }
// };
// export default class HW21XaXb extends Component {
//   constructor() {
//     super();
//     this.state = {
//       bingoNum: randomFour,
//       value: "",
//       xaxbList: [],
//       hideAndSee: false
//     };
//   }

//   handleChange = ({ target }) => {
//     this.setState({
//       value: target.value
//     });
//   };
//   handleSubmit = event => {
//     console.warn(randomFour);
//     event.preventDefault();
//     const { value, xaxbList, bingoNum } = this.state;
//     if (value.length !== 4 || valueCheck(value.split("").sort()))
//       return alert("格式不正確");
//     this.setState({
//       xaxbList: [`${value}: ${checkAB(value, bingoNum)}`, ...xaxbList],
//       value: ""
//     });
//     if (checkAB(value, bingoNum) === "4A0B")
//       this.setState({
//         hideAndSee: true
//       });
//   };

//   replay = () => {
//     this.setState({
//       bingoNum: arr.sort(() => Math.random() - 0.5).slice(0, 4),
//       xaxbList: [],
//       hideAndSee: false
//     });
//   };

//   render() {
//     const { value, xaxbList, bingoNum, hideAndSee } = this.state;
//     console.warn(bingoNum);
//     const itemList = xaxbList.map((item, index) => <li key={index}>{item}</li>);
//     return (
//       <div>
//         <h1>猜數字</h1>
//         <ol>
//           <li>一進到遊戲電腦隨機產生4位不重複數字</li>
//           <li>使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</li>
//           <li>送出的答案跟正確答案比較，位置一樣則A，位置不同則B</li>
//           <li>會累積過去猜過的答案與結果</li>
//           <li>如果猜到 4A 則遊戲結束，並可以另開新局。</li>
//         </ol>
//         <form onSubmit={this.handleSubmit} >
//           <input
//             type="text"
//             value={value}
//             disabled={hideAndSee}
//             onChange={this.handleChange} />
//           <button disabled={hideAndSee}>猜!</button>
//         </form>
//         <div className={hideAndSee ? "see" : "hide"}>
//           bingo ! game over ， replay?
//           <button onClick={this.replay}>Yes</button>
//         </div>
//         <ol>{itemList}</ol>
//       </div>
//     );
//   }
// }
