import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Mark Harwood" keywords={[`mark harwood`, `web developer`]} />

    <header className="page_header"> 
      <h1>Hey! I'm Mark.</h1>
    </header>

    <p>
      I make websites, applications, and all sorts of fun things - especially on the web. 
    </p>
  </Layout>
)

export default IndexPage
