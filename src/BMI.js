import React from 'react';

export default class Bmi extends React.Component {
  constructor(){
    super()
    this.state = ({
      cm : '',
      kg : '',
      BMI : ''
    });
  }
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  calculateBMI = () => {
    const { kg, cm }  = this.state;
    
    this.setState({
      BMI : Math.floor(kg / Math.pow(cm / 100, 2))
    });
  }
  render() {

    return (
      <div>
        <form>
        身高:
        <input
          id=""
          name="cm"
          type="text"
          value={this.state.cm}
          onChange={this.handleChange}
        />cm<br />
        體重:
        <input
          id=""
          name="kg"
          type="text"
          value={this.state.kg}
          onChange={this.handleChange}
        />kg<br />
        </form>
        <button onClick={this.calculateBMI}>計算!</button>
        <h2>BMI : {this.state.BMI}</h2>
      </div>
    )
  }
}
