import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">PingPong</a>
        <div className='userCountDisplay'>{this.props.count} users online</div>
      </nav>
    )
  }
}

export default Navbar;