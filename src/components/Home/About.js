import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import Title from "../Title";
import styles from "../../css/about.module.css";
// import img from "../../images/defaultBcg.jpeg";

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage);

  return (
    <div className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Image
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            explicabo similique quas?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            explicabo similique quas?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </div>
  );
};

export default About;
