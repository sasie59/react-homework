import React from 'react'

export default class ItemList extends React.Component {
  constructor(){
    super()
    this.state = ({
      list : [],
      value : ''
    });
  }

  handleChange = (event)=> {
    const { value, list }  = this.state

    /**
     * onChange 只是改變value而已吧
     * 不應該更新 list
     */
    this.setState ({
      value : event.target.value,
      list : [value,...list]
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    /** 更新 list 的動作應該要在這裡做 */
  }
  render() {
    return (
      <div>
        <h1>清單</h1>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          name=""
          id=""
          value={this.state.value}
          onChange={this.handleChange} />
        </form>
        <ul>
          {this.state.list.map(n =>
          <li key={n}>{n}</li>)}
        </ul>
      </div>
    )
  }
}
