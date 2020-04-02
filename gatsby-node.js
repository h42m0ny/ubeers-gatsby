const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
      query {
        allGhostPost {
            nodes {
              slug      
            }
          }
      }
    `)
   
    result.data.allGhostPost.nodes.forEach(({ slug }) => {
        const { createPage } = actions
        console.log("slug",slug)
        createPage({
          path: "/articles/"+slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: slug,
          },
        })
        
      })
}