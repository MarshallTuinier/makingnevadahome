module.exports = {
  siteMetadata: {
    title: `Making Nevada Home`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/src/assets`,
    name: 'assets',
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp` /*
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      },
    },*/
  ]
};
