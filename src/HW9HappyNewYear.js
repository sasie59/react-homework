import React from 'react';

const date20210101 = +new Date('2021/01/01 00:00:00');

export default class HW9HappyNewYear extends React.Component {
  constructor() {
    super()
    this.state = ({
      date : +new Date(),
      countDown : 0,
      day : '',
      hour :'',
      min :'',
      sec : ''
    })
  }

  tick = () => { 
    const { date } = this.state
    this.setState({
      date : +new Date(),
      countDown : Math.floor((date20210101 - date) / 1000),
    });
  }
  componentDidMount() {
    setInterval(this.tick , 1000);
  }
  
  render() {
    const { countDown } = this.state;

    if (countDown === 0) return null;
    
    const ONE_HOUR = 60*60;
    const ONE_DAY = ONE_HOUR * 24;
    const day  = Math.floor(countDown / ONE_DAY);
    const hour = Math.floor((countDown % ONE_DAY) / ONE_HOUR);
    const min  = Math.floor(countDown % ONE_HOUR / 60);
    const sec  = countDown % 60;
    /**
     * sec =  countDown % 60;
     * min =  Math.floor(countDown / 60) % 60;
     * hour = Math.floor(countDown / 60 / 60) % 24;
     * day =  Math.floor(countDown / 60 / 60 / 24);
     */
    return (
      <div>
        <h2>離2021跨年還有{day}天{hour}時{min}分{sec}秒: </h2>
      </div>
    ) 
  }
}
