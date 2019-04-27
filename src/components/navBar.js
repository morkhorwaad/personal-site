import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './navBar.scss'

const NavBar = ({ siteTitle }) => (
  <nav className="navBar">
    <Link to="/">Mark Harwood</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
