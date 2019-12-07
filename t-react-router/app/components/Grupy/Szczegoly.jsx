import React, { Component } from 'react'

export default class Szczegoly extends Component {
  render() {
    return (
      <div>
        <h3>Szczegóły - komponent</h3>
        Nr: { this.props.match.params.id }
      </div>
    )
  }
}
