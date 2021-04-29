// import React ,{ useRef }from 'react';

// export default function HW4Bmi() {
//   const cmDOM = useRef();
//   const kgDOM = useRef();
//   const bmiDOM = useRef();

//   const handleClick = () => {
//     const cm = cmDOM.current.value;
//     const kg = kgDOM.current.value;
//     bmiDOM.current.innerText = Math.floor(kg / Math.pow(cm / 100, 2));
//   };

//   return (
//     <div>
//       <h1>HW4Bmi</h1>
//       <span>身高</span>
//       <input
//         ref={cmDOM}
//         name='cm'
//         type="text"
//       /><br/>
//       <span>體重</span>
//       <input
//         ref={kgDOM}
//         name='kg'
//         type="text"
//       /><br/>
//       <button onClick={handleClick}>計算</button>
//       BMI : <span data-testid="bmi" ref={bmiDOM} />
//     </div>
//   );
// }

// import React from 'react';

// export default class HW4Bmi extends React.Component {
//   constructor(){
//     super();
//     this.state = ({
//       cm : '',
//       kg : '',
//       BMI : ''
//     });
//   }
//   handleChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value
//     });
//   }

//   calculateBMI = () => {
//     const { kg, cm }  = this.state;
    
//     this.setState({
//       BMI : Math.floor(kg / Math.pow(cm / 100, 2))
//     });
//   }
//   render() {

//     return (
//       <div>
//         <form>
//         身高:
//         <input
//           id=""
//           name="cm"
//           type="text"
//           value={this.state.cm}
//           onChange={this.handleChange}
//         />cm<br />
//         體重:
//         <input
//           id=""
//           name="kg"
//           type="text"
//           value={this.state.kg}
//           onChange={this.handleChange}
//         />kg<br />
//         </form>
//         <button onClick={this.calculateBMI}>計算!</button>
//         <h2>BMI : {this.state.BMI}</h2>
//       </div>
//     );
//   }
// }
// class
// import React, { Component } from 'react';

// export default class HW4Bmi extends Component {
//   constructor(){
//     super();
//     this.state =({
//       bmi:'',
//       cm: '',
//       kg: ''
//     });
//   }
//   handleChange = ({target}) => {
//     this.setState({
//       [target.name] : target.value
//     });
//   }

//   handleBmi = () => {
//     const {cm, kg } = this.state;
//     this.setState({
//       bmi: ~~(kg / Math.pow((cm / 100), 2)),
//       cm: '',
//       kg: ''
//     });
//   }

//   render() {
//     const {bmi, cm , kg } =this.state;
//     return (
//       <div>
//         <h1>複習React & Hooks & Jest</h1>
//         <form action="">
//           體 重<input
//             name='kg'
//             type="text"
//             value={kg}
//             onChange={this.handleChange}
//           /><br />
//           身 高<input
//             name='cm'
//             type="text"
//             value={cm}
//             onChange={this.handleChange}
//           />
//         </form>
//         <button onClick={this.handleBmi}>計算!</button>
//         <h2>{bmi}</h2>
//       </div>
//     );
//   }
// }

// hooks
import React,{useRef} from 'react';

export default function HW4Bmi() {
  const cmDom = useRef();
  const kgDom = useRef();
  const bmiDom = useRef();

  const handleBmi = () => {
    const kg = kgDom.current.value;
    const cm = cmDom.current.value;
    bmiDom.current.innerText = ~~(kg / Math.pow( cm / 100, 2));
  };

  return (
    <div>
      <h1>複習React & Hooks & Jest</h1>
      <form action="">
        體 重<input
          ref={kgDom}
          name='kg'
          type="text" 
        /><br />
        身 高<input
          type="text"
          name='cm'
          ref={cmDom}
        />
      </form>
      <button onClick={handleBmi}>計算!</button>
      <h1>BMI : <span data-testid='bmi' ref={bmiDom}/></h1>
    </div>
  );
}



