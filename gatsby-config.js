require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Backroads`,
    description: `Explore awesome worldwide tours & discover what makes them unique. Forget your daily routine and say yes to adventure`,
    author: `@yvonnkr`,
    twitterUsename: "@NkrYvonne",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://yvonnkr-gatsby-backroads.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
