import React from "react"
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

import "./blogPost.scss";

const BlogPost =({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link className="internal-link" to="/blog">Back to the blog</Link>
      </article>
    </Layout>
  );
};

export default BlogPost

export const query = graphql`
  query($path: String!) {
    markdownRemark( frontmatter: { path: { eq: $path }} ) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`