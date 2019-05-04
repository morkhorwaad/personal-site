import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({data, location}) => (
  <Layout location={location}>
    <SEO title="Mark Harwood" keywords={[`mark harwood`, `web developer`]} />

    <header className="page_header"> 
      <h1>Index header</h1>
    </header>

    <p>
      I make websites, applications, and all sorts of fun things - especially on the web. 
    </p>
  </Layout>
)

export default IndexPage
