import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps({ query: { title } }) {
    return { postTitle: title }
  }

  render() {
    return (
      <div>
        <h1>{this.props.postTitle}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          temporibus unde explicabo repellat obcaecati, iste dignissimos eaque
          alias voluptatum error!
        </p>
      </div>
    )
  }
}
