const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    let result = await graphql(`
      query {
        allGhostPost {
            nodes {
              slug      
            }
        },
        allStrapiBeers {
          nodes {
            slug
          }
        },
        allStrapiBreweries {
          nodes {
            slug
          }
        }
      }
    `)
   
    result.data.allGhostPost.nodes.forEach(({ slug }) => {
        const { createPage } = actions
        createPage({
          path: "/articles/"+slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: slug,
          },
        })    
    })

    result.data.allStrapiBeers.nodes.forEach(({ slug }) => {
        const { createPage } = actions
        createPage({
          path: "/bieres/"+slug,
          component: path.resolve(`./src/templates/beer.js`),
          context: {
            slug: slug,
          },
        })
    })

    result.data.allStrapiBreweries.nodes.forEach(({ slug }) => {
      const { createPage } = actions
      createPage({
        path: "/brasseries/"+slug,
        component: path.resolve(`./src/templates/brewery.js`),
        context: {
          slug: slug,
        },
      })
  })

      
}