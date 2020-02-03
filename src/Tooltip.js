import React, { Component } from 'react'
import TooltipCpm from './TooltipCpm'
export default class Tooltip extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    // const direction = ['top', 'right', 'bottom', 'left'].map((item,index) =>{
    //   return <button key={index}>{item}</button>
    // })
    return (
      <div>
        {/* {direction} */}
        {/* 第一直覺是hover */}
        <TooltipCpm at='top' text='我在上面'>top</TooltipCpm>
        <TooltipCpm at='right' text='我在右邊'>right</TooltipCpm>
        <TooltipCpm at='bottom' text='我在下面'>bottom</TooltipCpm>
        <TooltipCpm at='left' text='我在左邊'>left</TooltipCpm>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum atque similique voluptatum laborum soluta ad. Repellendus laborum ratione dignissimos aut quas necessitatibus ut officiis fuga quis odit, labore vero.
      </div>
    )
  }
}
