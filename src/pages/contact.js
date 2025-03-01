import React from "react";
import { graphql } from "gatsby";
import Contact from "../components/Contact/Contact";

import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import SEO from "../components/SEO";

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  );
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
