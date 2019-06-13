import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import NavBar from './navBar'
import Footer from './footer'
import './layout.scss'
import '../styles/global.scss'

const Layout = ({ children }) => (
  <div className="layout">
    <Link to="/" className="logo">Mark Harwood</Link>
    <NavBar />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
