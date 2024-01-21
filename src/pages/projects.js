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

    <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />

    <section>
      {Projects.length > 0 
        ? {Projects}
        : <p>Right now, all of my projects are works in progress. Take a look at <a href="https://www.github.com/morkhorwaad">my GitHub</a> to see what I'm up to, and back here to see the writeup when I'm done!</p>
      }
    </section>
  </Layout>
}


export const pageQuery = graphql`
query {
  allMarkdownRemark(
   filter: { fileAbsolutePath: {regex : "/markdown/projects/"} },
   sort: {frontmatter: {date: DESC}}
 ) {
     edges {
       node {
         excerpt(pruneLength: 250)
         id
         frontmatter {
           title
           path
           date
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