import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

import IconLink from './icon-link'
import './footer.scss'

const Footer = () => (
    <footer className="footer">
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
)

export default Footer