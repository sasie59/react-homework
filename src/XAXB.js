import React, { Component } from "react";

export default class XAXB extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      xaxbList: []
    };
  }
  handleChange = ({ target }) => {
    this.setState({
      value: target.value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { value, xaxbList } = this.state;
    
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
        <form onSubmit={this.handSubmit}>
          <input type="text" value={value} onChange={this.handleChange} />
          <button>猜!</button>
        </form>
      </div>
    );
  }
}
