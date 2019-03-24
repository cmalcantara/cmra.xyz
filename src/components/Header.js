import React from 'react'
import PropTypes from 'prop-types'
import { Rule } from './Typography.js'

const Header = ({ children }) => (
  <header>
    {children}

    <Rule mt={3} mb={3} />
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
