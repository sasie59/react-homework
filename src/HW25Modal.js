import React,{useState} from 'react';
import HW25ModalCpm from './HW25ModalCpm';

const modalProps = [
  {},
  {isTop: true},
  {header: "My Header"},
  {isTop: true, isAnimation: true},
  {isAnimation: true},
];
const btnArr = ['modal', 'top', 'header', 'top + animation', 'animation'];

export default function HW25Modal() {
  const [isShow, setIsShow ] = useState(!1);
  const [nowProps, setProps ] = useState('');

  const handleClick = (index) => {
    setIsShow(!isShow);
    setProps(modalProps[index]);
  };
  return (
    <div>
      {btnArr.map((item,index) => 
        <button 
          key={index}
          className='button'
          onClick={handleClick.bind(this, index)}
        >
          {item}
        </button>
      )}
      {isShow && <div>
        <HW25ModalCpm
          {...nowProps}
          onClick={handleClick}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel in nam sint dolorum, eligendi delectus, dolor quos eum magni facere nemo fuga distinctio. Magni possimus aspernatur corrupti impedit laborum!</HW25ModalCpm>
      </div>}
    </div>
  );
}

// import React, { Component } from 'react';
// import HW25ModalCpm from './HW25ModalCpm';

// const modalProps = [
//   {},
//   {isTop: true},
//   {header: "My Header"},
//   {isTop: true, isAnimation: true},
//   {isAnimation: true},
// ];

// export default class HW25Modal extends Component {
//   constructor(){
//     super();
//     this.state = {
//       isShow: false
//     };
//   }

//   handleClick = index => {
//     this.setState({
//       isShow: !this.state.isShow,
//       nowProps: modalProps[index],
//     });
//   }

//   render() {
    
//     const buttonArr = ['modal', 'top', 'header', 'top + animation', 'animation'].map((item, index) => {
//       return <button onClick={this.handleClick.bind(this, index)} className='button' key={index}>{item}</button>;
//     });
//     return (
//       <div>
//         {buttonArr}
//         {this.state.isShow && <div>
//           <HW25ModalCpm
//             {...this.state.nowProps}
//             onClick={this.handleClick}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex vel in nam sint dolorum, eligendi delectus, dolor quos eum magni facere nemo fuga distinctio. Magni possimus aspernatur corrupti impedit laborum!</HW25ModalCpm>
//         </div>}
//       </div>
//     );
//   }
// }
