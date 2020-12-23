import React ,{ useRef }from 'react';

export default function HW4Bmi() {
  const cmDOM = useRef();
  const kgDOM = useRef();
  const bmiDOM = useRef();

  const handleClick = () => {
    const cm = cmDOM.current.value;
    const kg = kgDOM.current.value;
    bmiDOM.current.innerText = Math.floor(kg / Math.pow(cm / 100, 2));
  };

  return (
    <div>
      <h1>HW4Bmi</h1>
      <span>身高</span>
      <input
        ref={cmDOM}
        name='cm'
        type="text"
      /><br/>
      <span>體重</span>
      <input
        ref={kgDOM}
        name='kg'
        type="text"
      /><br/>
      <button onClick={handleClick}>計算</button>
      BMI : <span data-testid="bmi" ref={bmiDOM} />
    </div>
  );
}

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
