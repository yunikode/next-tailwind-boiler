import React, { Component } from 'react'
import Head from 'next/head'

export default class extends Component {
  static getInitialProps({ query: { title } }) {
    return { postTitle: title }
  }

  render() {
    return (
      <section className="page-section container mx-auto">
        <Head>
          <title>{this.props.postTitle}</title>
        </Head>
        <div>
          <h1>{this.props.postTitle}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus temporibus unde explicabo repellat obcaecati, iste
            dignissimos eaque alias voluptatum error!
          </p>
        </div>
      </section>
    )
  }
}
