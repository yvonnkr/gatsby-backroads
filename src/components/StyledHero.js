import React from "react";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

//alternative if img prop not set
const getDefaultImg = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const StyledHero = ({ img, className, children, home }) => {
  const response = useStaticQuery(getDefaultImg);
  const defaultImg = response.file.childImageSharp.fluid;

  let displayImg = img ? img : defaultImg;

  return (
    <BackgroundImage className={className} fluid={displayImg} home={home}>
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
