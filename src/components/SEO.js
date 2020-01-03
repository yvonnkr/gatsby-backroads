import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

//query
const getSiteMetadata = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        twitterUsename
        siteUrl
        image
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getSiteMetadata);
  const {
    siteTitle,
    siteDesc,
    author,
    twitterUsename,
    siteUrl,
    image,
  } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" description={image} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsename} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
