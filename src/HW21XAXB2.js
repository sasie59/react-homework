import React, { Component } from "react";
import "./GuessNum.css";

// 產生亂數答案的 function 因為會重複使用，所以要獨立寫一個 function
// ps: 注意!!! 它回傳的是一個字串，而不是一個陣列
// 可以 export 給 jest
const getRandFor = () => {
  const randomFour = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  randomFour.sort(() => Math.random() - 0.5);
  return randomFour.slice(0, 4).join('');
}

// 重置資料: 第一次進來時 跟 重新一局 都會使用，所以要獨立出來
// 可以 export 給 jest
const resetData = () => {
  return {
    value: "",
    xaxbList: [],
    hideAndSee: false,
    bingoNum: getRandFor(),
  }
}

// 可以 export 給 jest
const checkAB = (userInput, answer) => {
  let aCount = 0;
  let bCount = 0;
  let index = -1;

  for (let i = 0; i < userInput.length; i++) {
    /**
     * 尋找 userInput 輸入的某一位有沒有在 答案裡
     * 如果有，那勢必大於 1
     * 如果位置相等就是 i === index 也就是 a
     * 如果不相等，那檢查 index 是否大於 -1，是的話就是 b
     */

    index = answer.indexOf(userInput[i]);
    if(i === index) {
      aCount++;
    } else if(index > -1) {
      bCount++;
    }
  }

  return aCount + "A" + bCount + "B";
};

// isValid 是否有效
// 可以 export 給 jest
const isValid = value => {
  // 如果長度不等於4
  if(value.length !== 4) return false;

  // 把每個 i 位跟 i + 1 位比較，一樣代表有重複，則立刻 return false
  for (let i = 0; i < value.length - 1; i++) {
    if(value[i] === value[i + 1]) return false;
  }

  // 如果可以跑到這裡代表一定對，return true
  return true;
};

export default class HW21XAXB2 extends Component {
  constructor() {
    super();
    this.state = resetData();
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value, xaxbList, bingoNum } = this.state;

    // 把判斷的條件盡量寫在 isValid 裡面，讓funtion各師其職
    if (!isValid(value)) return alert("格式不正確");

    this.setState({
      value: "",
      hideAndSee: checkAB(value, bingoNum) === "4A0B",
      xaxbList: [`${value}: ${checkAB(value, bingoNum)}`, ...xaxbList],
    });
  };

  replay = () => {
    this.setState(resetData());
  };

  render() {
    const { value, xaxbList, bingoNum, hideAndSee } = this.state;
    console.warn(bingoNum);
    const itemList = xaxbList.map((item, index) => <li key={index}>{item}</li>);
    return (
      <div>
        <h1>猜數字</h1>
        <ol>
          <li>一進到遊戲電腦隨機產生4位不重複數字</li>
          <li>使用者送出答案，若不符合「不重複4位數字」則跳錯誤訊息</li>
          <li>送出的答案跟正確答案比較，位置一樣則A，位置不同則B</li>
          <li>會累積過去猜過的答案與結果</li>
          <li>如果猜到 4A 則遊戲結束，並可以另開新局。</li>
        </ol>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            value={value}
            disabled={hideAndSee}
            onChange={this.handleChange} />
          <button disabled={hideAndSee}>猜!</button>
        </form>
        <div className={hideAndSee ? "see" : "hide"}>
          bingo ! game over ， replay?
          <button onClick={this.replay}>Yes</button>
        </div>
        <ol>{itemList}</ol>
      </div>
    );
  }
}
