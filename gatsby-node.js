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
                description
              }
              html
            }
          }
        },
        projects:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/projects/"}}) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                title
                path
                date(formatString: "MMMM DD, YYYY")
              }
              html
            }
          }
        }
      }
    `);

    /** TO ADD:
     * projects:allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/projects/"}}) {
          edges {
            node {
              excerpt(pruneLength: 250)
              id
              frontmatter {
                title
                path
                date(formatString: "MMMM DD, YYYY")
              }
              html
            }
          }
        }
     */

    data.blog.edges.forEach(edge => { 
        const blogPath = edge.node.frontmatter.path;   
        console.log("BLOG POST PATH: " + blogPath);
        actions.createPage({ 
            path: blogPath, 
            component: require.resolve(`./src/templates/blogPost.js`)
        }); 
    });

    data.projects.edges.forEach(edge => { 
      const projPath = edge.node.frontmatter.path;  
      actions.createPage({ 
          path: projPath, 
          component: require.resolve(`./src/templates/projectPage.js`)
      }); 
    })
}