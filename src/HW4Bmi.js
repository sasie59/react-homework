import React ,{ useState }from 'react';

export default function HW4Bmi() {
  const [ cm, setCm ] = useState('');
  const [ kg, setKg ] = useState('');
  const [ bmi, setBmi ] = useState('');

  return (
    <div>
      <h1>HW4Bmi</h1>
      <span>身高</span>
      <input 
        name='cm'
        value={cm}
        type="text"
        onChange={({target}) =>
          setCm(target.value)
        }
      /><br/>
      <span>體重</span>
      <input
        name='kg'
        value={kg}
        type="text"
        onChange={({target})=>
          setKg(target.value)
        }
      /><br/>
      <button onClick={()=> setBmi(Math.floor(kg / Math.pow(cm / 100, 2)))}>計算</button>
      BMI : {bmi}
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
