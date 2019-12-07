import React, { Component } from 'react'

export default class Edycja extends Component {
  render() {
    const {	match: { params: { id }}} = this.props;
    return (
      <div>
        <h3>Edycja - komponent</h3>
        Nr: { id }
      </div>
    )
  }
}
