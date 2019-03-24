import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle, withTheme } from 'styled-components'
import { Box, Flex } from '../components/Primitives'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useSiteMetadata } from '../utils/hooks'

import 'sanitize.css'

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.colors.red};
    scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    @media print {
      background: none;
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.red} !important;
    color: ${({ theme }) => theme.colors.darkGrey} !important;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
  }

  @media print {
    nav, footer {
      display: none !important;
    }

    #main-content {
      margin-bottom: 0 !important;
    }
  }
`

const Border = styled(Flex)`
  min-height: 100vh;
  border: ${({ theme }) => theme.borders[3]};
  border-color: transparent !important;
  background-color: transparent;
  background-image: url(/topography_900x900.png);
  background-repeat: repeat;
  background-position: top center;
  background-size: 900px;

  @media (min-resolution: 192dpi) {
    background-image: url(/topography_1800x1800.png);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    border: ${({ theme }) => theme.borders[4]};
    background-image: url(/topography_1200x1200.png);
    background-size: 1200px;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints[0]}) and (min-resolution: 192dpi) {
    background-image: url(/topography_2400x2400.png);
  }

  @media print {
    display: block;
    min-height: 0;
    background: none;
  }
`

const Content = styled(Box)`
  flex: 1;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`

const Constraint = styled(Flex)`
  flex-flow: column nowrap;
  max-width: 64rem;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
`

const Layout = ({ children, location, theme }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{title}</title>

        <meta name="description" content={description} />
        {/* theming */}
        <meta name="theme-color" content={theme.colors.nearWhite} />
        <meta name="apple-mobile-web-app-title" content="cmra" />
        <meta name="application-name" content="cmra" />
        <meta name="msapplication-TileColor" content="{theme.colors.red}" />
        {/* icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={theme.colors.red}
        />
      </Helmet>

      <GlobalStyles />

      <Border>
        <Content
          borderRadius={2}
          py={3}
          px={[3, 4]}
          fontFamily="sans-serif"
          color="darkGrey"
        >
          <Constraint>
            <Navigation location={location} />

            <Box is="main" id="main-content" mb={[5, 6]}>
              {children}
            </Box>

            <Footer />
          </Constraint>
        </Content>
      </Border>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withTheme(Layout)
