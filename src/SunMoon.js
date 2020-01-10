import React, { Component } from 'react';
import './SunMoon.css'

export default class SunMoon extends Component {
  constructor (){
    super ();
    this.state = {
      hideAndSee : true,
    }
  }

  /**
   * 這題有很多做法，我的做法是，先定義一個 div 上面是太陽，下面是月亮
   * 然後藉由開關來移動整個 div
   *  ---------- ← div
   * |   SUN   | ← 裡面有 img 太陽
   * |         |
   * |   MON   | ← 裡面是 img 月亮
   * ----------
   * Q1 為何背景只有區塊黑
   * Q2 想在img裡再多套用一個css來調位置 但已有true false的關係 
   *    可以直接加在後面嗎
   * 
   */
  handleClick = () => {
    this.setState({
      hideAndSee : !this.state.hideAndSee
    })
  }

  render() {
    const {hideAndSee} = this.state;
    return (
      <div className={hideAndSee ? 'morn' : 'night'}>
        <div className='center'>請仔細觀察太陽與月亮的位置，「必須」對準正中央
          <button onClick={this.handleClick}>切換成 {hideAndSee ? '晚上' : '早上'}</button>
          <img className={hideAndSee ? 'moveDown' : 'moveUp'}src="https://img.icons8.com/cotton/256/000000/sun--v1.png" alt="sum"/>
          <img className={hideAndSee ? 'moveUp' : 'moveDown'} src="https://img.icons8.com/cotton/256/000000/moon-satellite.png" alt="moon"/>
        </div>
      </div>
    )
  }
}
