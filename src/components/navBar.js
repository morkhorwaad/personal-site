import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './navBar.scss'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }
  
  toggleMenu() {
    const flip = !this.state.menuOpen
    this.setState({ menuOpen: flip})
  }

  closeMenu() {
    if(this.state.menuOpen) {
      this.setState({ menuOpen: false})
    }
  }

  render() {
    const navClass = this.state.menuOpen ? "navBar menuOpen" : "navBar"

    return (
      <nav className={navClass}>
        <button onClick={this.toggleMenu} className="menuButton">Menu</button>
        <Link onClick={this.closeMenu} to="/">Home</Link>
        <Link onClick={this.closeMenu} to="/blog">Blog</Link>
        <Link onClick={this.closeMenu} to="/projects">Projects</Link>
        <Link onClick={this.closeMenu} to="/about">About</Link>
        <Link onClick={this.closeMenu} to="/contact">Contact</Link>
      </nav>
    )
  }
}
export default NavBar
