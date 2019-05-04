import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = ({data}) => {
    const md = data.markdownRemark;
    const { html, frontmatter } = md;
    
    return (
        <Layout>
            <SEO title="Contact" keywords={[]} />

            <header className="page_header">
                <h1>{ frontmatter.title }</h1>
            </header>

            <section dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { pageFor: { eq: "Contact" } }) {
      html
      frontmatter {
        pageFor
        title
      }
    }
  }
`

export default ContactPage