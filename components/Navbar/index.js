import React from 'react'
import Link from 'next/link'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <nav>
        <div>
          <Link href="/about">
            <a title="About NextJS">About NextJS</a>
          </Link>
          <Link href="/">
            <a title="Our API">API</a>
          </Link>
        </div>
        <style jsx>
        {`
          a {
            padding: 10px;
            text-decoration: none;
            color: green;
          }
          `}
        </style>
      </nav>
    )
  }
}

export default Navbar
