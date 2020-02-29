import React, { Component } from 'react';
import './Carousel.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: props.children,
    }
  }

  componentDidMount() {
    setInterval(() => {
      
      this.setState({ isMoving: true });

      setTimeout(() => {
        // 替換
        const { itemList } = this.state;
        this.setState({
          itemList: itemList.slice(1).concat(itemList[0])
        });
        this.setState({ isMoving: false });
      }, 500);
    }, 1500);
  }

  /**
   * 0          1          2          3
   * |----------|----------|----------|
   *            |-----|    |-----|
   *            動畫時間    動畫時間
   * 
   * a----------a     b----------b     c----------c
   * |----------|-----|----------|-----|----------|
   *            動畫時間          動畫時間
   * 
   */

  render() {
    return (
      <div className="Carousel">
        {this.state.itemList.map((item, index) =>
          <div className={
              "item" +
              (index === 0 ? " active": "") +
              (this.state.isMoving && index < 2 ? " move": "")
            }
            key={index}>
            {item}
          </div>
        )}
      </div>
    )
  }
}
/**
 * [a, b, c]
 * [b, c, a]
 * [c, a, b]
 */