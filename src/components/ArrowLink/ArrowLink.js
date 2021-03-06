import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import system from 'system-components'
import ArrowIcon from './ArrowIcon'
import { themeHover } from '../../utils/styles'

const ArrowText = system(
  {
    is: 'span',
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'monospace',
    fontSize: [0, 1],
    fontWeight: 4,
  },
  themeHover
)

const ArrowLink = ({ dest, children, external, ...props }) => {
  return external ? (
    <a href={dest}>
      <ArrowText {...props}>
        {children} <ArrowIcon />
      </ArrowText>
    </a>
  ) : (
    <Link to={dest}>
      <ArrowText {...props}>
        {children} <ArrowIcon />
      </ArrowText>
    </Link>
  )
}

ArrowLink.propTypes = {
  dest: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
}

export default ArrowLink
