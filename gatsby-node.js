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
        }
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
    console.log(data);
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