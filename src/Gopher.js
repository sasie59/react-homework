import React, { Component } from 'react'
import './Gopher.css'

export default class Gopher extends Component {
  constructor(){
    super()
    this.state ={
      count : 0,
      mouse : 'G'
    }
  }
  render() {
    const {count, mouse} = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <table>
          <tr>
            <td>{mouse}</td>
            <td>{mouse}</td>
            <td>{mouse}</td>
          </tr>
          <tr>
            <td>{mouse}</td>
            <td>{mouse}</td>
            <td>{mouse}</td>
          </tr>
          <tr>
            <td>{mouse}</td>
            <td>{mouse}</td>
            <td>{mouse}</td>
          </tr>
        </table>
      </div>
    )
  }
}
