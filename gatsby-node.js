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

  //pagination
  const numOfPosts = data.posts.edges.length;
  const postsPerPage = 5;
  const numOfPages = Math.ceil(numOfPosts / postsPerPage);

  const pages = Array.from({ length: numOfPages }); //creates an array from int --eg 5 = [und,und,und,und,und,und]

  pages.forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blogs` : `/blogs/${index + 1}`,
      component: path.resolve("./src/templates/blogListTemplate.js"),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numOfPages: numOfPages,
        currentPage: index + 1,
      },
    });
  });
};
