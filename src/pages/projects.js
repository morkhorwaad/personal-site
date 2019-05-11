import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectLink from '../templates/projectLink'

const ProjectsPage = ({
  data: {
    allMarkdownRemark: { edges },
    markdownRemark
  },
}) => {
  const Projects = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />)

  return <Layout>
    <SEO title="Projects" keywords={[]} />

    <header className="page_header">
      <h1>{markdownRemark.frontmatter.title}</h1>
    </header>

    <section>
      {Projects}
    </section>
  </Layout>
}


export const pageQuery = graphql`
query {
  allMarkdownRemark(
   filter: { fileAbsolutePath: {regex : "/markdown/projects/"} },
   sort: { order: DESC, fields: [frontmatter___date]}
 ) {
     edges {
       node {
         excerpt(pruneLength: 250)
         id
         frontmatter {
           title
           date(formatString: "MMMM DD, YYYY")
           path
         }
       }
     }
   }
   markdownRemark(frontmatter: { pageFor: { eq: "Projects" } }) {
    html
    frontmatter {
      pageFor
      title
    }
  }
}
`

export default ProjectsPage