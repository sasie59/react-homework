import React, { Component } from 'react'
import TooltipCpm from './HW26TooltipCpm'
import './Tooltip.css'

export default class HW26Tooltip extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <br/><br/><br/><br/><br/>
        <TooltipCpm at="top" text="我在上面">
          <button className='btn'>top</button>
        </TooltipCpm>
        <br/>
        <br/>
        <TooltipCpm at="right" text="我在右邊">
          <button className='btn'>right</button>
        </TooltipCpm>
        <br/>
        <br/>
        <TooltipCpm at="left" text="我在左邊">
          <button className='btn'>left</button>
        </TooltipCpm>
        <br/>
        <br/>
        <TooltipCpm at="bottom" text="我在下面">
          <button className='btn'>bottom</button>
        </TooltipCpm>
        <br/>
        <br/>
        <br/>
        Lorem
        <TooltipCpm at="top" text="我在上面">
          <span style={{'color': 'red'}}>ipsum</span>
        </TooltipCpm>
        dolor sit amet consectetur adipisicing elit. Temporibus nostrum atque similique voluptatum laborum soluta ad. Repellendus laborum ratione dignissimos aut quas necessitatibus ut officiis fuga quis odit, labore 
        <TooltipCpm at="bottom" text="我在下面">
          <span style={{'color': 'red'}}>vero.</span>
        </TooltipCpm>
        
      </div>
    )
  }
}
