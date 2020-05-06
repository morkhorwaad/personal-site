import React from 'react'
import { graphql } from 'gatsby'

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

            <form>
              <label for="name">
                Name
                <input name="name" id="name" type="text" />
              </label>

              <label for="email">
                Email
                <input name="email" id="email" type="email" />
              </label>

              <label for="message">
                What's up?
                <textarea name="message" id="message" height="5" />
              </label>

              <button type="submit">Send it!</button>
              <input type="reset" value="Clear" />
            </form>
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