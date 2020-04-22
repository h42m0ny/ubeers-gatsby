const GHOST_URI = process.env.GHOST_URI || "http://localhost:2369"
const GHOST_TOKEN = process.env.GHOST_TOKEN || "82c373e6104e0e85936b11c70a"
const STRAPI_URI = process.env.STRAPI_URI || "http://localhost:1337"

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `art`,
        path: `${__dirname}/src/images/art`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: STRAPI_URI,
        queryLimit: 10000, // Default to 100
        contentTypes: [`beers`, `breweries`, `categories`],
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: GHOST_URI,
        contentApiKey: GHOST_TOKEN,
        version: `v3`, // Ghost API version, optional, defaults to "v3".
        // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UBeers`,
        short_name: `ubeers`,
        start_url: `/`,
        background_color: `#8bd8ed`,
        theme_color: `#8bd8ed`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-express",
      options: {
        output: "config/gatsby-express.json",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`average`, `prata\:400,700`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@common": path.resolve(__dirname, "src/components/common"),
          "@images": path.resolve(__dirname, "src/images"),
          "@sections": path.resolve(__dirname, "src/components/sections"),
          "@styles": path.resolve(__dirname, "src/styles/"),
          "@static": path.resolve(__dirname, "static/"),
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
