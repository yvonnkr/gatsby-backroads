const path = require("path");

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }

      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.tours.edges.forEach(({ node }) => {
    createPage({
      component: path.resolve("./src/templates/tourTemplate.js"),
      path: `/tours/${node.slug}`,
      context: {
        slug: node.slug,
      },
    });
  });

  data.posts.edges.forEach(({ node }) => {
    createPage({
      component: path.resolve("./src/templates/blogTemplate.js"),
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    });
  });
};
