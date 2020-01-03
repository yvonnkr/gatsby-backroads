import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "./../components/Layout";
import styles from "../css/blog.module.css";
import BlogCard from "./../components/Blog/BlogCard";
import Title from "../components/Title";

const blogListTemplate = ({ data, pageContext }) => {
  const { numOfPages, currentPage } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numOfPages;

  const prevPage =
    currentPage - 1 === 1 ? `/blogs/` : `/blogs/${currentPage - 1}`;
  const nextPage = `/blogs/${currentPage + 1}`;

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />

        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node} />
          ))}
        </div>

        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              prev
            </AniLink>
          )}

          {Array.from({ length: numOfPages }, (_, index) => {
            return (
              <AniLink
                fade
                key={index}
                to={`/blogs/${index === 0 ? "" : index + 1}`}
                className={
                  index + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {index + 1}
              </AniLink>
            );
          })}

          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  );
};

//with pagination
export const query = graphql`
  query getPosts($limit: Int!, $skip: Int!) {
    posts: allContentfulPost(
      limit: $limit
      skip: $skip
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default blogListTemplate;
