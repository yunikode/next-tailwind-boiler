import React from 'react';
import Link from 'next/link';
import './Navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
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
          <mark className="badge">Hello</mark>
        </div>
      </nav>
    );
  }
}

export default Navbar;
