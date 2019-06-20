import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import IconLink from './icon-link'
import './footer.scss'

const Footer = () => (
    <footer className="footer">
          <IconLink link="https://www.github.com/morkhorwaad" title="Mark's GitHub">
            <FaGithub />
          </IconLink>

          <IconLink link="https://www.linkedin.com/in/mark-harwood-357b85102" title="Mark's LinkedIn">
            <FaLinkedin />
          </IconLink>
    </footer>
)

export default Footer