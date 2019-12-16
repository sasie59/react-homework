import React, { Component } from 'react'

export default class Pokemon extends Component {
  constructor(){
    super();
    this.state = {
      pokemonList :[]
    }
  }
  
  render() {
    return (
      <div>
        <span>keyword</span>
        <input type="text"/>
      </div>
    )
  }
}
