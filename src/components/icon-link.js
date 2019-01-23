import React, { Children } from 'react'
import PropTypes from 'prop-types'

import './icon-link.scss'

const IconLink = ({link, title, children}) => (
  <a className="icon-link" href={link} title={title} target="_blank">
    {children}
  </a>
)

IconLink.propTypes = {
    link: PropTypes.String,
}

IconLink.defaultProps = {
    siteTitle: `#`,
}

export default IconLink
