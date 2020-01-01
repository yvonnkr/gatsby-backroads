require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Backroads`,
    description: `Explore awesome worldwide tours & discover what makes them unique. Forget your daily routine and say yes to adventure`,
    author: `@yvonnkr`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-playground",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
  ],
};
