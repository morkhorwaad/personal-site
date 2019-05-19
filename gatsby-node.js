/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        blog:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/blog/"}}) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                path
              }
              html
            }
          }
        }
        projects:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/projects/"}}) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                title
                link
                path
                date
              }
              html
            }
          }
        }
      }
    `)
    data.blog.edges.forEach(edge => { 
        const path = edge.node.frontmatter.path   
        actions.createPage({ 
            path, 
            component: require.resolve(`./src/templates/blogPost.js`), 
        }) 
    });

    data.projects.edges.forEach(edge => { 
      const path = edge.node.frontmatter.path   
      actions.createPage({ 
          path, 
          component: require.resolve(`./src/templates/projectPage.js`), 
      }) 
  })
}