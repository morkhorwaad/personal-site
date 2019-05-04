import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({data, location}) => {
  const md = data.markdownRemark;
  const { html, frontmatter } = md;

  return (
    <Layout location={location}>
      <SEO title="Mark Harwood" keywords={[`mark harwood`, `web developer`]} />

      <header className="page_header"> 
        <h1>{ frontmatter.title }</h1>
      </header>

      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { pageFor: { eq: "Index" } }) {
      html
      frontmatter {
        pageFor
        title
      }
    }
  }
`

export default IndexPage
