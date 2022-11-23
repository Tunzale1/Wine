import React, { Component } from 'react'

class Feature extends Component {
  render() {
    return (
        <div className="product">
        
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.rating}</p>
        {this.props.isInStock ? <div>❤️</div> : null}
      </div>
    )
  }
}

export default Feature


