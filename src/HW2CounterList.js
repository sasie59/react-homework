import React from 'react'

export default class HW2CounterList extends React.Component {
  constructor(){
    super()
    this.state = ({
      list : [],
      counter : 0
    });
  }
  // HW2: 2019/11/05: 不清楚 map 的使用時機，
  // data binding 觀念不夠深入（資料變介面即改變）
  // ，push 為自身改變函數，不需再給其他變數。
  
  handleClick = () => {
    // const counter = this.state.counter;
    // const list  = this.state.list;

    const { counter, list } = this.state;
    this.setState({
      counter : counter + 1,
      list : [counter + 1, ...list]
    });
  }

  render() {
    return (
      <div>
      <h1>HW2CounterList</h1>
        <button onClick={this.handleClick}>submit</button><br />
        <ul>
          {this.state.list.map(n =>
            <li key={n}>{n}</li>
          )}
        </ul>
      </div>
    )
  }
}