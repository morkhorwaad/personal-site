import { Link } from 'gatsby'
import React, { Component } from 'react'

import './navBar.scss'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      menuOpen: false,
      menuClasses: [ "menuClosed" ]
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.menuClick = this.menuClick.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.removeAnimationClasses = this.removeAnimationClasses.bind(this)
  }
  
  menuClick() {
    const flip = !this.state.menuOpen
    this.toggleMenu(flip)
  }

  toggleMenu(direction) {
    this.setState({ menuOpen: direction})
    let menuClasses = [];
    // this was to do more interesting animation stuff - went with a simple opacity transition
    menuClasses.push(direction ? "a-menuOpen" : "a-menuClose");
    this.setState({ menuClasses })
  }

  closeMenu() {
    if(this.state.menuOpen) {
      this.toggleMenu(false);
    }
  }

  removeAnimationClasses() {
    const menuClasses = [ this.state.menuOpen ? "menuOpen" : "menuClosed" ];
    this.setState({ menuClasses });
  }

  render() {
    const navClass = "navBar " + this.state.menuClasses.join(" ");

    return (
      <>
        <button onClick={this.menuClick} className="menuButton">Menu</button>
        <nav className={navClass} onAnimationEnd={this.removeAnimationClasses}>
          <Link onClick={this.closeMenu} to="/">Home</Link>
          <Link onClick={this.closeMenu} to="/blog">Blog</Link>
          <Link onClick={this.closeMenu} to="/projects">Projects</Link>
          <Link onClick={this.closeMenu} to="/about">About</Link>
          <Link onClick={this.closeMenu} to="/contact">Contact</Link>
        </nav>
      </>
    )
  }
}
export default NavBar
