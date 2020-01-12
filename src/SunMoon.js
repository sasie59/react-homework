import React, { Component } from 'react';
import './SunMoon.css'

export default class SunMoon extends Component {
  constructor (){
    super ();
    this.state = {
      isMorning : true,
    }
  }

  handleClick = () => {
    this.setState({
      isMorning : !this.state.isMorning
    })
  }

  render() {
    const {isMorning} = this.state;
    return (
      <div className={'sky ' + (isMorning ? 'morn' : 'night')}>
        <div>請仔細觀察太陽與月亮的位置，「必須」對準正中央
          <button onClick={this.handleClick}>切換成 {isMorning ? '晚上' : '早上'}</button>
        </div>
        <img className={'img ' + (isMorning ? 'middle' : 'top')} src="https://img.icons8.com/cotton/256/000000/sun--v1.png" alt="sum"/>
        <img className={'img ' + (isMorning ? 'bottom' : 'middle')} src="https://img.icons8.com/cotton/256/000000/moon-satellite.png" alt="moon"/>
      </div>
    )
  }
}
