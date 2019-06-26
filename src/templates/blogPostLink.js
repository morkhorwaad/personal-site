import React from "react"
import { Link } from "gatsby"

import "./blogPostLink.scss"

const BlogPostLink = ({ post }) => (
  <div className="blog-post-item">
    <Link className="internal-link" to={post.frontmatter.path}>
      {post.frontmatter.title}
    </Link>
    <p className="blog-post-item__description">{post.frontmatter.description}</p>
  </div>
)

export default BlogPostLink