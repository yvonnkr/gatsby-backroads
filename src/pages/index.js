import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from "gatsby";

import Layout from "./../components/Layout";
import Banner from "../components/Banner";
import About from "./../components/Home/About";
import Services from "./../components/Home/Services";
import StyledHero from "../components/StyledHero";
// import SimpleHero from "./../components/SimpleHero";

export default ({ data }) => (
  <Layout>
    <StyledHero img={data.defaultBcg.childImageSharp.fluid} home={true}>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, vero."
      >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
);

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
