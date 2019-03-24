import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import system from 'system-components'
import Header from '../components/Header'
import ProjectPreview from '../components/ProjectPreview'
import { Text } from '../components/Primitives'
import { Title, Subtitle, Paragraph } from '../components/Typography'
import { themeHover } from '../utils/styles'

const HeaderLink = system({ is: 'a' }, themeHover)

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson(limit: 1) {
        edges {
          node {
            title
            description
            website
            repo
          }
        }
      }
    }
  `)

  return (
    <article>
      <Header>
        <Title>Carlos&nbsp;Alcantara</Title>
      </Header>
      <Subtitle fontSize={[2, 3]} mt={1} mb={5}>
        Philippine Science High School - Main Campus | Batch 2020
      </Subtitle>

      <main>
        <Paragraph>
          I&rsquo;m a senior high school student interested in developing
          expertise in all the fields of science, from Math, Physics, Chemistry,
          Biology, Humanities, Engineering and Computer Science, in order to
          develop a unique and nuanced perspective that will allow me to create
          vertically integrated solutions to today&rsquo;s modern problems.
        </Paragraph>
      </main>

      <main>
        <Text
          is="h2"
          fontSize={[3, 4]}
          fontWeight="7"
          lineHeight="title"
          mt={5}
          mb={4}
        >
          Latest Project
        </Text>

        <ProjectPreview
          project={data.allProjectsJson.edges[0].node}
          level="h3"
        />
      </main>
    </article>
  )
}

export default IndexPage
