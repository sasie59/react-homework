import React, { Component } from 'react';

export default class Tab extends Component {
  constructor() {
    super()
    this.state = {
      arr :['內容1', '內容2', '內容3'],
      index : 0
    }
  }
  handleClick = (index) => {
    this.setState ({
      index
    });
  }
  
  render() {
    const {arr,index} = this.state;
    return (
      <div>
      {['tab1', 'tab2', 'tab3'].map((tabName,index) =>
        <span
        key={index}
        style={{
          color : 'blue',
          padding : '3px',
          border : '1px solid black',
          backgroundColor : 'lightgray'
        }}
        // 要習慣css在這裡的寫法 屬性的寫法:小駝峰式 內容要單引號包住
        onClick={this.handleClick.bind(this, index)
        }>
          {tabName}
        </span>
      )}
        {/* <button
          name={0}
          onClick={this.handleClick}>Tab1</button>
        <button
          name={1}
          onClick={this.handleClick}>Tab2</button>
        <button
          name={2}
          onClick={this.handleClick}>Tab3</button><br /> */}
        <br />{arr[index]}
      </div>
    )
  }
}
