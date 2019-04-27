import React, { Children } from 'react'
import PropTypes from 'prop-types'

const IconLink = ({link, title, children}) => (
  <a className="link_btn" href={link} title={title} target="_blank">
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
