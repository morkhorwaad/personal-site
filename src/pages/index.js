import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Mark Harwood" keywords={[`mark harwood`, `web developer`]} />
    <h1>Hey! I'm Mark.</h1>
    <p>
      This is my site — a work in progress, to be sure. <br/>
      I'll be updating this with more content as I make it!
    </p>
  </Layout>
)

export default IndexPage
