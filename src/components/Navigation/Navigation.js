import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import system from 'system-components'
import SkipNavLink from './SkipNavLink'
import Logo from './Logo'
import { Flex } from '../Primitives'
import { List, ListItem } from '../Typography'
import { themeHover } from '../../utils/styles'

const activeBorder = css`
  .active & {
    border-bottom: ${({ theme }) => theme.borders[2]};
    border-color: ${({ theme }) => theme.colors.red};
  }
`

const LinkText = system(
  {
    is: 'span',
    px: 1,
    pb: 1,
    fontSize: [0, 1],
    fontFamily: 'monospace',
  },
  'space',
  themeHover,
  activeBorder
)

const isActive = ({ location, href, isPartiallyCurrent }) => {
  if (location.pathname === '/' && href === '/') {
    return { className: 'active' }
  } else if (isPartiallyCurrent && href !== '/') {
    return { className: 'active' }
  }

  return null
}

const NavLink = ({ children, to, ...props }) => (
  <Link to={to} getProps={isActive}>
    <LinkText {...props}>{children}</LinkText>
  </Link>
)

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

const Navigation = ({ location }) => (
  <Flex
    is="nav"
    alignItems="center"
    justifyContent="space-between"
    mt={[0, 2, 3]}
    mb={[3, 4]}
    css="position: relative"
  >
    <SkipNavLink />

    <Flex alignItems="center">
      <Logo />
    </Flex>

    <List fontFamily="monospace">
      <ListItem display="inline-block">
        <NavLink to="/" mr={2}>
          Home
        </NavLink>
      </ListItem>

      <ListItem display="inline-block">
        <NavLink to="/projects/" mr={2}>
          Projects
        </NavLink>
      </ListItem>

      <ListItem display="inline-block">
        <NavLink to="/writing/" mr={2}>
          Writing
        </NavLink>
      </ListItem>
    </List>
  </Flex>
)

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Navigation
