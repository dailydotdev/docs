import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import HomeNavBoxes from "../components/homepage/homeNavBoxes";
import styles from "./video.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">daily.dev Documentation</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // return <Redirect to="/docs/intro" />;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <img
          className={styles.heroBgImage}
          src="https://assets.website-files.com/5e0a5d9d743608d0f3ea6753/619650c123dedf5abe6feaa5_CTA%20Footer%20Circles.png"
          alt=""
        />
        <HomeNavBoxes />
      </main>
    </Layout>
  );
}
