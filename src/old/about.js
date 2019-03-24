import React from 'react'
import Helmet from 'react-helmet'
import system from 'system-components'
import Header from '../components/Header'
import Stats from '../components/Stats'
import { Title, Paragraph } from '../components/Typography'
import { useSiteMetadata } from '../utils/hooks'
import { themeHover, themeUnderline } from '../utils/styles'

const AboutLink = system({ is: 'a' }, themeHover, themeUnderline)

const AboutPage = () => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <title>About • {title}</title>
      </Helmet>

      <article>
        <Header>
          <Title>Self-Doxxing</Title>
        </Header>

        <main>
          <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={6} mb={3}>
            &ldquo;I&rsquo;m a frontend developer with a passion for legibility,
            performance, and the open web. A quick learner with a thirst for
            knowledge. Enthusiastic and hard-working, I pride myself on my
            attention to&nbsp;detail.&rdquo;
          </Paragraph>

          <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={3}>
            That&rsquo;s what the intro on{' '}
            <AboutLink href="https://resume.lowmess.com">
              my r&eacute;sum&eacute;
            </AboutLink>{' '}
            says. Kind of boring, huh? Well, it&rsquo;s a r&eacute;sum&eacute;.
            They&rsquo;re supposed to be boring. (Don&rsquo;t be such
            a&nbsp;nitpicker.)
          </Paragraph>

          <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={0}>
            Here&rsquo;s the fun stuff: my name technically isn&rsquo;t Alec
            (don&rsquo;t worry about it), my favorite beer is all of them, and I
            like to list things in threes. If you have any questions, I&rsquo;m
            happy to send you a non sequitur and/or fully-serious response if
            you{' '}
            <AboutLink href="mailto:alec@lowmess.com">email&nbsp;me</AboutLink>.
          </Paragraph>

          <Stats mt={[4, 5]} />
        </main>
      </article>
    </>
  )
}

export default AboutPage
