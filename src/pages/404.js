import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import { Text } from '../components/Primitives'
import { Title, Subtitle } from '../components/Typography'
import { themeHover } from '../utils/styles'

const HaikuLink = styled(Link)`
  ${themeHover};
`

const errorPage = () => (
  <>
    <Helmet>
      <title>Woops</title>
    </Helmet>

    <article>
      <Header>
        <Title>Error 404</Title>

        <Subtitle>Requested Page Not Found</Subtitle>
      </Header>

      <main>
        {/* have to ugily do this because somewhere whitespace gets removed */}
        <Text
          is="pre"
          fontSize={[2, 3]}
          fontFamily="monospace"
          lineHeight="title"
        >
          <br />
          &nbsp;
          <br />
          &nbsp;
          <br />
          &nbsp;"Try not to be a man of success but a man of value" - Einstein
          <br />
        </Text>
      </main>
    </article>
  </>
)

export default errorPage
