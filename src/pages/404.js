import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import { Link } from "gatsby";

import Layout from "./../components/Layout";
import styles from "../css/error.module.css";
import Banner from "../components/Banner";

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oop's its a dead end">
          <AniLink fade className="btn-white" to="/">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
};

export default error;
