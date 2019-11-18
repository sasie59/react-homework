import React, { Component } from 'react';

export default class Tab extends Component {
  constructor() {
    super()
    this.state = {
      value :'',
      content1 : "我是內容1",
      content2 : "我是內容2",
      content3 : "我是內容3",
    }
  }
  handleClick = ({target}) => {
    this.setState ({
      value : target.value,
    });
  }
  
  render() {
    const {value,content1,content2,content3} = this.state;
    // if(value === '') {
    //   let value = content1
    // }
    // 如何指定按鈕1一開始就被選定?
    return (
      <div>
        <button
          name={1}
          value={content1}
          onClick={this.handleClick}>Tab1</button>
        <button
          name={2}
          value={content2}
          onClick={this.handleClick}>Tab2</button>
        <button
          name={3}
          value={content3}
          onClick={this.handleClick}>Tab3</button><br />
        {value}
      </div>
    )
  }
}
