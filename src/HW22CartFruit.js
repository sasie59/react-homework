import React from 'react';

export default class HW22CartFruit extends React.Component {

  constructor() {
    super();
    this.state = {
      value: 0,
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.props.fruitName, this.state.value);
    this.setState({
      value : ''
    })
  }

  handleChange = ({target}) => {
    this.setState ({
      value : +target.value
    });
  }

  render() {
    const { name, price } = this.props;
    return (
      <div>
        <span>{name}</span>
        <span>${price}</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder='數量'/>
          <button>加入購物車</button>
        </form>
      </div>
    );
  }
}
