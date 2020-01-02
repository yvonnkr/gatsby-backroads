import React from "react";
import Image from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import styles from "../../css/blog-card.module.css";

const BlogCard = ({ blog }) => {
  const { title, slug, published, image } = blog;
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} alt="single post" className={styles.img} />
        <AniLink fade to={`/blog/${slug}`} className={styles.link}>
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default BlogCard;
