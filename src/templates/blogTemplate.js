import React from "react";
import { graphql } from "gatsby";
import Layout from "./../components/Layout";
import styles from "../css/single-blog.module.css";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const blogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post;

  //render rich text options  --documentToReactComponents()
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const url = node.data.target.fields.file["en-US"].url;
        return (
          <div className="rich">
            <h3>this is awesome image</h3>
            <img src={url} alt="blog post" width="400" />
            <p>image provided provided by @johndoe</p>
          </div>
        );
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields;
        const url = image["en-US"].fields.file["en-US"].url;
        return (
          <div className="">
            <br />
            <h1>this is other post: {title["en-US"]} </h1>
            <img src={url} alt="post" width="400" />
            {documentToReactComponents(text["en-US"])}
            <br />
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

//query
export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do,YYYY")
      text {
        json
      }
    }
  }
`;

export default blogTemplate;
