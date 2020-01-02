import React from "react";
import Image from "gatsby-image";
import { FaMap } from "react-icons/fa";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from "gatsby";

import styles from "../../css/tour.module.css";

//alternative if image not found on contentful
const getDefaultImg = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour;

  const response = useStaticQuery(getDefaultImg);
  const defaultImg = response.file.childImageSharp.fluid;

  let mainImage = images ? images[0].fluid : defaultImg;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from £{price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

//validate props
Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Tour;
