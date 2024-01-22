import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import NavBar from './navBar'
import Footer from './footer'
import './layout.scss'
import '../styles/global.scss'
import MorkLogo from '../images/mork_logo.svg'

const Layout = ({ children }) => (
  <div className="layout">
    <Link to="/" className="logo">
      <MorkLogo/>
    </Link>
    <NavBar />
    <main className="fadeInMain">
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
