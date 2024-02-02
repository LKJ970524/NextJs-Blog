import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>L.K.J Blog</title>
      </Head>
      <section className={styles.headingMd}>
        <p>[L.K.J Self Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}></ul>
      </section>
    </>
  );
};

export default Home;
