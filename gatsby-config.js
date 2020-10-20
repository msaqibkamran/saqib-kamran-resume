/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Muhammad Saqib Kamran | Computer Science Professional`,
    author: `Muhammad Saqib Kamran`,
    description: `I am a Final Year BS Computer Science student at FAST National University of Computer and Emerging Sciences Lahore, Pakistan. Seeking a position that will take full advantage of my qualification, interpersonal and intrapersonal skills and provide me an environment where I can enhance my skills and aptitude as well.`,
    siteUrl: `https://saqibkamran.tech/`,
    social: {
      twitter: `saqibkamran007`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Muhammad Saqib Kamran | Computer Science Professional`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      }
    }
  ],
};
