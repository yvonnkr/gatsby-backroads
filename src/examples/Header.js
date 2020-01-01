import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const firstQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(firstQuery);
  const { title, description, author } = data.site.siteMetadata;

  return (
    <div>
      <p>Title: {title}</p>
      <p>Desc: {description}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default Header;
