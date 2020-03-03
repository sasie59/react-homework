// import React from "react";
// import { Component } from "react";
// import "./Carousel.css";

// export default class CarouselCpm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itemList: props.children
//     };
//     console.warn(this.state.itemList);
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({isMoving: true})
//       setTimeout(()=> {
//         const {itemList} = this.state;
//         this.setState({
//           itemList: itemList.slice(1).concat(itemList[0])
//       });
//       this.setState({isMoving: false});
//       }, 500)
//       // console.warn(itemList);
//     }, 1500);
//   }
  

//   render() {
//     return (
//       <div className="Carousel">
//         {this.state.itemList.map((item,index) =>
//           <div className={'item' +
//           (index === 0 ? ' active': '') +
//           (this.state.isMoving && index < 2 ? ' move': '')
//           }
//           key={index} >
//             {item}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
import React, { Component } from 'react'
import './Carousel.css'
export default class CarouselCpm extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemList: props.children
    }
  }

  componentDidMount(){
    setInterval(() => {
      setTimeout(() => {
        const { itemList } = this.state;
        this.setState({
          itemList: itemList.slice(1).concat(itemList[0])
        });
      },500);
    }, 1500);
  }
  
  render() {
    const {itemList} = this.state;
    return (
      <div className='carousel'>
        <div className='item'>
          <div className='hide'>
            {itemList[0]}
          </div>
          <div className='show'>
            {itemList[1]}
          </div>
        </div>
      </div>
    )
  }
}

