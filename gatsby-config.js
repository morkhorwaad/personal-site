const rhythm  = require('./src/utils/typography.js').rhythm;

module.exports = {
  siteMetadata: {
    title: `Mark Sebastian Harwood`,
    description: `Mark Harwood is a web developer, UX & design enthusiast, aspiring data goblin, and learning human. He does cyber. This is his site.`,
    author: `@morkhorwaad`,
  },
  trailingSlash: "never",
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`, 
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mark harwood`,
        short_name: `mh`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/mh-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              wrapperStyle: marginBottomResult => `margin-bottom:${rhythm(1)};`
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: 'morkhorwaad',
              gistDefaultCssInclude: true
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`, // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
      options: {
        trackingIds: [
          "G-MF2FBLKBH4", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    }
  ],
}
