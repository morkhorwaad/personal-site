import React from "react"
import { graphql } from "gatsby"
import BlogPostLink from "../templates/blogPostLink"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <BlogPostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
     filter: { fileAbsolutePath: {regex : "\/blog/"} },
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
 }`