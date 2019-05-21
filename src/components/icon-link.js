import React from 'react'
import PropTypes from 'prop-types'

import './icon-link.scss'

const IconLink = ({link, title, children}) => (
  <a className="icon-link" href={link} title={title} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

IconLink.propTypes = {
    link: PropTypes.string,
}

IconLink.defaultProps = {
    siteTitle: `#`,
}

export default IconLink
