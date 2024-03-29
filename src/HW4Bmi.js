// class
// import React, { Component } from 'react';

// export default class HW4Bmi extends Component {
//   constructor(){
//     super();
//     this.state = ({
//       cm: '',
//       kg: '',
//       bmi: ''
//     });
//   }

//   handleChange = ({target}) => {
//     this.setState({
//       [target.name] : target.value
//     });
//   }

//   handleBmi = () => {
//     const { kg, cm } = this.state;
//     this.setState({
//       // 體重(公斤) / 身高2(公尺2). 
//       bmi: Math.floor(kg / Math.pow((cm / 100), 2)),
//       cm: '',
//       kg: ''
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>HW4Bmi</h1>
//         <form action="">
//           體重<input
//             name="kg"
//             type="text"
//             value={this.state.kg}
//             onChange={this.handleChange}
//           /><br/>
//           身高<input
//             name="cm"
//             type="text"
//             value={this.state.cm}
//             onChange={this.handleChange}    
//           /><br/>
//         </form>
//         <button onClick={this.handleBmi}>計算</button>
//         <h2>BMI : {this.state.bmi}</h2>
//       </div>
//     );
//   }
// }
// hooks
import React, { useRef } from 'react';

export default function HW4Bmi() {
  const kgDom = useRef();
  const cmDom = useRef();
  const bmiDom = useRef();

  const handleClick = () => {
    const kg = kgDom.current.value;
    const cm = cmDom.current.value;
    bmiDom.current.innerText = ~~(kg / Math.pow((cm / 100), 2));
  };

  return (
    <div>
      <h1>HW4Bmi</h1>
      <form action="">
        體重<input
          ref={kgDom}
          type="text"
          name='kg' /><br />
        身高<input
          ref={cmDom}
          type="text"
          name='cm' />
      </form>
      <button
        onClick={handleClick}
      >點擊</button>
      <h2>
        BMI :
        <span data-testid='bmi' ref={bmiDom} />
      </h2>
    </div>
  );
}

