import React from "react"
import { graphql } from "gatsby"
import BlogPostLink from "../templates/blogPostLink"
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
    markdownRemark
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogPostLink key={edge.node.id} post={edge.node} />)

  return <Layout>
    <SEO title="Projects" keywords={[]} />

    <header className="page_header">
      <h1>{markdownRemark.frontmatter.title}</h1>
    </header>

    <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />

    <section>
      {Posts}
    </section>
  </Layout>
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
     filter: { fileAbsolutePath: {regex : "/markdown/blog/"} },
     sort: {frontmatter: {date: DESC}}
   ) {
       edges {
         node {
           excerpt(pruneLength: 250)
           id
           frontmatter {
             title
             date(formatString: "MMMM DD, YYYY")
             path
             description
           }
         }
       }
     }
     markdownRemark(frontmatter: { pageFor: { eq: "Blog" } }) {
      html
      frontmatter {
        pageFor
        title
      }
    }
 }`