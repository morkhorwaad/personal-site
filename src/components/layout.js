import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

import IconLink from './icon-link'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <main>
        {children}
        <footer>
          <IconLink link="https://instagram.com/morkhorwaad" title="Mark's Instagram">
            <FaInstagram />
          </IconLink>

          <IconLink link="https://twitter.com/morkhorwaad" title="Mark's Twitter">
            <FaTwitter />
          </IconLink>

          <IconLink link="https://www.linkedin.com/in/mark-harwood-357b85102" title="Mark's LinkedIn">
            <FaLinkedin />
          </IconLink>
        </footer>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
