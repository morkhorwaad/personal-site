import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ProjectPage =({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <a href={post.frontmatter.link}>{post.frontmatter.link}</a>
        </header>
        
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default ProjectPage

export const query = graphql`
  query($path: String!) {
    markdownRemark( frontmatter: { path: { eq: $path }} ) {
      html
      frontmatter {
        title
        path
        link
        date
      }
    }
  }
`