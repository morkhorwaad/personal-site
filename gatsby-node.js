/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark(
            filter: { fileAbsolutePath: {regex : "\/blog/"} },
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
                html
            }
          }
        }
      }
    `)
    console.log(data)
    data.allMarkdownRemark.edges.forEach(edge => { 
        const path = edge.node.frontmatter.path   
        actions.createPage({ 
            path, 
            component: require.resolve(`./src/templates/blogPost.js`), 
        }) 
    })
}